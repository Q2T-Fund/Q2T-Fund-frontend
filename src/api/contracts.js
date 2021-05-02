import { ethers } from 'ethers'
import { openNotification } from '../components/utils/common-functions';

const { treasuryABI } = require('../contracts/abi/Treasury.abi.json');
const { erc20abi } = require('../contracts/abi/ERC20.abi.json');
const { treasuryAbi } = require("../contracts/abi/TreasuryDAO.abi.json");

const daiContractAddress = "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD"
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
    treasuryABI,
    signer,
  );

  const createTx = await contract.fund(currency, amount);
  await createTx.wait();

}

export const getTreasuryDAOAddress = (template) => {
  const treasuryDAOOpenSourceAddress = "0x5A29c96878764519E9266A87543E97211aA8283c";
  const treasuryDAOLocalCommunitiesAddress = "0x98fF76Dbe4b7E931204788c676FE4D22565f825D";
  const treasuryDAOArtAddress = "0x555c643cbC1119132a0736B6Fe8df2D41a09537f";
  let address = '';
  switch (template) {
    case 'open-source':
      address = treasuryDAOOpenSourceAddress;
      break;
    case 'art':
      address = treasuryDAOArtAddress;
      break;
    case 'local':
      address = treasuryDAOLocalCommunitiesAddress;
      break
    default:
      address = treasuryDAOOpenSourceAddress;

  }
  return address;
}

export const depositTx = async (address, currency, amount, repaymentPercent) => {
  // const provider = new ethers.providers.getDefaultProvider("kovan")
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    address,
    treasuryAbi,
    signer
  );

  const createTx = await contract.deposit(currency, amount, repaymentPercent);
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
    const etherScanLink = `https://kovan.etherscan.io/tx/${createdEvents.transactionHash}`;
    openNotification(
      "Transaction Success!",
      `Congratulations, you can view your transaction here: ${etherScanLink}`,
      true
    );
  }
};