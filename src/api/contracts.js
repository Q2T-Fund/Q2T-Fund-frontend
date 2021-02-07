import { ethers } from 'ethers'
const { treasuryABI } = require('../contracts/abi/Treasury.abi.json');
const { erc20abi } = require('../contracts/abi/ERC20.abi.json');

const daiContractAddress = "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD"
const e18 = "000000000000000000";

export const approveDai = async (address, amount) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    daiContractAddress,
    erc20abi,
    signer,
  );

  const weiAmount = amount.toString() + e18

  const createTx = await contract.approve(address, weiAmount);

  const transactionResult = await createTx.wait();
  const { events } = transactionResult;

}
export const fund = async (communityTreasuryAddress, currency, amount) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    communityTreasuryAddress,
    treasuryABI,
    signer,
  );

  const createTx = await contract.fund(currency, amount);
  await createTx.wait();

}