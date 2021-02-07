
import React from "react";

import { notification } from "antd";
import { HeartOutlined, CloseOutlined } from "@ant-design/icons";


export const openNotification = (title, description, success) => {
  if(success) {
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