import { ethers } from 'ethers'
import { openNotification } from '../components/utils/common-functions';

const {q2tabi} = require('../contracts/abi/Q2T.json');
const { erc20abi } = require('../contracts/abi/ERC20.abi.json');

const daiContractAddress = "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063"
const e18 = "000000000000000000";

export const validateKovanNet = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const network = await provider.getNetwork();
  if (network.name !== 'kovan') {
    return false;
  }
  return true;
}

export const approveDai = async (address, amount) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    daiContractAddress,
    erc20abi,
    signer,
  );

  const weiAmount = amount.toString() + e18

  await contract.approve(address, weiAmount);

}
export const fund = async (communityTreasuryAddress, currency, amount) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const network = await provider.getNetwork();
  if (network.name !== 'kovan') {
    return false;
  }
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    communityTreasuryAddress,
    q2tabi,
    signer,
  );

  const createTx = await contract.fund(currency, amount);
  await createTx.wait();

}

export const getTemplate = (template) => {
  let id = 0;
  switch (template) {
    case 'open-source':
      id = 0;
      break;
    case 'art':
      id = 1;
      break;
    case 'local':
      id = 2;
      break;
    default:
      id = 0;

  }
  return ++id;
}

export const depositTx = async (template, amount, repaymentPercent) => {
  // const provider = new ethers.providers.getDefaultProvider("kovan")
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    '0xc015c3a36d8Fb3A8Ef118Bd1026c2cC6AA946ba7',
    q2tabi,
    signer
  );
  const weiAmount = amount.toString() + e18

  console.log( weiAmount, repaymentPercent);
  const createTx = await contract.deposit(template, weiAmount, repaymentPercent);
  const transactionResult = await createTx.wait();

  console.log("deposit results: ", transactionResult);
  const { events } = transactionResult;

  console.log("events: ", events);
  const createdEvents = events.find((e) => e.event === "Deposited");

  if (!createdEvents) {
    console.log("event not found: ");

    openNotification(
      "Transaction Failed!",
      `Something went wrong... Make sure to confirm both metamask prompts.`,
      false
    );
  } else {
    console.log("Event was found", createdEvents);
    const maticExplorerLink = `https://explorer-mainnet.maticvigil.com/tx/${createdEvents.transactionHash}/token-transfers`
    openNotification(
      "Transaction Success!",
      `Congratulations, you can view your transaction here: ${maticExplorerLink}`,
      true
    );
  }
};