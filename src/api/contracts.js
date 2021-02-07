import { ethers } from 'ethers'
const { treasuryABI } = require('../contracts/abi/Treasury.abi.json');

export const fund = async (currency, amount) => {
    console.log('fund')
    console.log(window.ethereum.selectedAddress);
    if(!window.ethereum.selectedAddress) 
        await window.ethereum.enable();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log('fund1')

    const contract = new ethers.Contract(
        '0x3CFCae3fe95f555783E13DF1ce6697602608f66D',
        treasuryABI,
        signer,
    );
    console.log('fund2')

    const createTx = await contract.fund(currency, amount);
    console.log('fund3')

    const transactionResult = await createTx.wait();
    const { events } = transactionResult;

    console.log('events: ', events);
    const createdEvents = events.find(
      e => e.event === 'Approve',
    );

    if (!createdEvents) {
      throw new Error('Something went wrong');
    } else {
      console.log('success :)')
    }
}