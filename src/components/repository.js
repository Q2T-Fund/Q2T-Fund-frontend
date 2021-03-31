import { Client, createUserAuth, PrivateKey, ThreadID } from '@textile/hub'
require('dotenv').config();


const keyInfo = {
	key: process.env.REACT_APP_TEXTILE_KEY,
	secret: process.env.REACT_APP_TEXTILE_SECRET
}


export async function initialize(privateKey, threadID, collection, schema) {

	const userAuth = await auth(keyInfo);
	const client = Client.withUserAuth(userAuth);

	const identity = await PrivateKey.fromString(privateKey);
	await client.getToken(identity)

	try {
		console.log('collection exists');

		await client.getCollectionInfo(threadID, collection);
	} catch (err) {
		console.log('creating collection');
		await client.newCollection(threadID, { name: collection, schema });
	}
}

export async function auth(keyInfo) {
  // Create an expiration and create a signature. 60s or less is recommended.
  const expiration = new Date(Date.now() + 60 * 1000)
  // Generate a new UserAuth
  const userAuth = await createUserAuth(keyInfo.key, keyInfo.secret ?? '', expiration)
  return userAuth
}

export async function getAll(collectionName, privKey, threadID) {
  const auth = await this.auth(keyInfo);
  const client = Client.withUserAuth(auth);

  const thread = threadID ? ThreadID.fromString(threadID) : this.ditoThreadID;

  const identity = await PrivateKey.fromString(privKey)
  await client.getToken(identity)
  return await client.find(thread, collectionName, {});
}

export async function getByID(collectionName, id, privKey, threadID) {
  const auth = await this.auth(keyInfo);
  const client = Client.withUserAuth(auth);

  const thread = ThreadID.fromString(threadID);
  const identity = await PrivateKey.fromString(privKey)
  await client.getToken(identity)
  return await client.findByID(thread, collectionName, id);
}

export async function filter(collectionName, filter, privKey, threadID) {
  const auth = await this.auth(keyInfo);
  const client = Client.withUserAuth(auth);

  const thread = ThreadID.fromString(threadID);
  const identity = await PrivateKey.fromString(privKey);
  await client.getToken(identity)
  const toReturn = await client.find(thread, collectionName, filter);
  return toReturn;
}

export async function insert(collectionName, model, privKey, threadID) {
  const auth = await this.auth(keyInfo);
  const client = Client.withUserAuth(auth);

  const thread = ThreadID.fromString(threadID);
  const identity = await PrivateKey.fromString(privKey)
  await client.getToken(identity)
  return await client.create(thread, collectionName, [model]);
}

export async function save(collectionName, values, privKey, threadID) {
  const auth = await this.auth(keyInfo);
  const client = Client.withUserAuth(auth);

  const thread = ThreadID.fromString(threadID);
  const identity = await PrivateKey.fromString(privKey)
  await client.getToken(identity)
  return await client.save(thread, collectionName, values);
}

export async function update(collectionName, id, model, privKey, threadID) {
  const auth = await this.auth(keyInfo);
  const client = Client.withUserAuth(auth);

  const thread = ThreadID.fromString(threadID);
  const identity = await PrivateKey.fromString(privKey)
  await client.getToken(identity)
  let toUpdate = await client.findByID(thread, collectionName, id);
  toUpdate = model;
  client.save(thread, collectionName, [toUpdate]);
}