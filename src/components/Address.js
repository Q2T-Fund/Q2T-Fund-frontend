import React, { useState, useEffect } from "react";
import Blockies from "react-blockies";
import { Typography, Skeleton } from "antd";


import { getAddress } from "@ethersproject/address";
/*

  Displays an address with a blockie, links to a block explorer, and can resolve ENS

  <Address
    value={address}
    ensProvider={mainnetProvider}
    blockExplorer={optional_blockExplorer}
    fontSize={optional_fontSize}
  />

*/

const { Text } = Typography;

const blockExplorerLink = (address, blockExplorer) => `${blockExplorer || "https://etherscan.io/"}${"address/"}${address}`;



const Address = (props) => {
  const ens = useLookupAddress(props.ensProvider, props.value);

  if (!props.value) {
    return (
      <span>
        <Skeleton avatar paragraph={{ rows: 1 }} />
      </span>
    );
  }

  let displayAddress = props.value.substr(0, 6);

  if (ens && ens.indexOf("0x")<0) {
    displayAddress = ens;
  } else if (props.size === "short") {
    displayAddress += "..." + props.value.substr(-4);
  } else if (props.size === "long") {
    displayAddress = props.value;
  }

  const etherscanLink = blockExplorerLink(props.value, props.blockExplorer);
  if (props.minimized) {
    return (
      <span style={{ verticalAlign: "middle" }}>
        <a style={{ color: "#ffffff" }} target={"_blank"} href={etherscanLink} rel="noopener noreferrer">
          <Blockies seed={props.value.toLowerCase()} size={8} scale={2} />
        </a>
      </span>
    );
  }

  let text;
  if (props.onChange) {
    text = (
      <Text editable={{ onChange: props.onChange }} copyable={{ text: props.value }}>
        <a style={{ color: "#ffffff" }} target={"_blank"} href={etherscanLink} rel="noopener noreferrer">
          {displayAddress}
        </a>
      </Text>
    );
  } else {
    text = (
      <Text copyable={{ text: props.value }}>
        <a style={{ color: "#ffffff" }} target={"_blank"} href={etherscanLink} rel="noopener noreferrer">
          {displayAddress}
        </a>
      </Text>
    );
  }

  return (
    <span>
      <span style={{ verticalAlign: "middle" }}>
        <Blockies seed={props.value.toLowerCase()} size={8} scale={props.fontSize?props.fontSize/7:4} />
      </span>
      <span style={{ verticalAlign: "middle", paddingLeft: 5, fontSize: props.fontSize?props.fontSize:28 }}>{text}</span>
    </span>
  );
}

export default Address;



const lookupAddress = async (provider, address) => {
  try {
    // Accuracy of reverse resolution is not enforced.
    // We then manually ensure that the reported ens name resolves to address
    const reportedName = await provider.lookupAddress(address);
    const resolvedAddress = await provider.resolveName(reportedName);
    if (getAddress(address) === getAddress(resolvedAddress)) {
      return reportedName;
    }
  } catch (e) {
    // Do nothing
  }
  return "";
};

const useLookupAddress = (provider, address) => {
  const [ensName, setEnsName] = useState(address);
  const [ensCache, setEnsCache] = useLocalStorage('ensCache_'+address);

  useEffect(() => {
    if( ensCache && ensCache.timestamp>Date.now()){
      setEnsName(ensCache.name)
    }else{
      if (provider) {
        lookupAddress(provider, address).then((name) => {
          setEnsName(name)
          setEnsCache({
            timestamp:Date.now()+360000,
            name:name
          })
        });
      }
    }
  }, [ensCache, provider, address, setEnsName, setEnsCache]);

  return ensName;
};




// Hook from useHooks! (https://usehooks.com/useLocalStorage/)
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
  
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
  
    return [storedValue, setValue];
  }
  