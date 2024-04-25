import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space } from "antd";

dayjs.extend(customParseFormat);

const dateFormat = "YYYY-MM-DD";

const Datepicker = ({ onDataChange }: any) => {
  const handleChange = (date: any, dateString: any) => {
    onDataChange(dateString);
  };

  return (
    <Space direction="vertical" size={2}>
      <DatePicker
        style={{ blockSize: 35, backgroundColor: "#A4F5F5" }}
        defaultValue={dayjs(dayjs(), dateFormat)}
        format={dateFormat}
        onChange={handleChange}
      />
    </Space>
  );
};

export default Datepicker;
