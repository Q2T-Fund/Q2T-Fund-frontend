import { ThreadID } from '@textile/hub'
import * as repository from "./repository";
require('dotenv').config();

const skillWalletCollection = 'SkillWallet'
const skillWalletThreadID =  ThreadID.fromString('bafk42lwogxbt7moa7p7gdclynpvm3h7bnfnk56nzawnkftxdlkzmpri');
const skillWalletPrivateKey = process.env.REACT_APP_TEXTILE_PRIV_KEY

export async function getSkillWalletByID(id) {
	return repository.getByID(skillWalletCollection, id, skillWalletPrivateKey, skillWalletThreadID);
}

export async function storeSkillWallet(model) {
	return repository.insert(skillWalletCollection, model, skillWalletPrivateKey, skillWalletThreadID);
}
