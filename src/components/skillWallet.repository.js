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
async function initialize() {
	repository.initialize(skillWalletPrivateKey, skillWalletThreadID, skillWalletCollection, DiToSkillWalletSchema);
}


const DiToSkillWalletSchema = {
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#",
	"$id": "https://example.com/object1610669989.json",
	"title": "Root",
	"type": "object",
	"required": [
		"skillWallet"
	],
	"properties": {
		_id: { type: 'string' },
		"skillWallet": {
			"$id": "#root/skillWallet",
			"title": "Skillwallet",
			"type": "array",
			"default": [],
			"items": {
				"$id": "#root/skillWallet/items",
				"title": "Items",
				"type": "object",
				"required": [
					"skill",
					"level"
				],
				"properties": {
					"skill": {
						"$id": "#root/skillWallet/items/skill",
						"title": "Skill",
						"type": "string",
						"default": "",
						"examples": [
							"asd"
						],
						"pattern": "^.*$"
					},
					"level": {
						"$id": "#root/skillWallet/items/level",
						"title": "Level",
						"type": "integer",
						"examples": [
							2
						],
						"default": 0
					}
				}
			}

		}
	}
}
