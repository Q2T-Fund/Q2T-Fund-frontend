import React, { useState } from "react";

import { notification } from 'antd';
import { HeartOutlined } from "@ant-design/icons"

export default function openNotification(title, description, success) {
  notification.open({
    message: `${title}`,
    description: `${description}`,
    duration: 0,
    icon: <HeartOutlined />
  });
}