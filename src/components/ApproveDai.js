import { ethers } from 'ethers'

const { abi } = require('../contracts/abi/ERC20.abi.json')
const erc20abi = abi
const daiContractAddress = "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD"

export default async function approveDai(address, amount) {

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    daiContractAddress,
    erc20abi,
    signer,
  );

  const newAmount = ethers.BigNumber.from((amount*1e18).toString())

  const createTx = await contract.approve(address, newAmount);

  const transactionResult = await createTx.wait();

  console.log('dai_approve(): ', transactionResult)
  const { events } = transactionResult;

  console.log('events: ', events);
  // const createdEvents = events.find(
  //   e => e.event === 'Approve',
  // );

  // if (!createdEvents) {
  //   throw new Error('Something went wrong');
  // } else {
  //   console.log('Event was found', createdEvents)
  // }

}
