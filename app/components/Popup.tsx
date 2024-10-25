import React, { useEffect } from "react";
import { MehOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";

const Popup: React.FC<{ message: string; description: string }> = ({
  message,
  description,
}) => {
  notification.open({
    message,
    description,
    icon: <MehOutlined style={{ color: "#F53D33" }} />,
  });
  return null; // Render nothing, as the notification is handled outside of the component
};

export default Popup;
