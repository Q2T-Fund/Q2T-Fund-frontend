import React from "react";
import { notification } from "antd";
import { HeartOutlined, CloseOutlined } from "@ant-design/icons";
import { Buckets } from '@textile/hub'
const fs = require('fs');

const keyInfo = {
  key: process.env.REACT_APP_TEXTILE_KEY,
  secret: process.env.REACT_APP_TEXTILE_SECRET
}


export async function pushJSONDocumentInTextileHub(json) {
  const buckets = await Buckets.withKeyInfo(keyInfo)
  const { root } = await buckets.getOrCreate(process.env.REACT_APP_BUCKET_NAME)
  if (!root) throw new Error('bucket not created')
  const buf = Buffer.from(JSON.stringify(json, null, 2))
  const path = `metadata.json`
  const links = await buckets.pushPath(root.key, path, buf)
  return `https://hub.textile.io${links.path.path}`;
}


export const openNotification = (title, description, success) => {
  if (success) {
    notification.open({
      message: title,
      description: description,
      duration: 0,
      icon: <HeartOutlined />,
    });
  } else {
    notification.open({
      message: title,
      description: description,
      duration: 0,
      icon: <CloseOutlined />,
    });
  }
};