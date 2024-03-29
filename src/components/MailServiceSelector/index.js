import React from "react";
import Select from "react-select";
import {
  MAIL_SERVICES_DOMAINS,
  ALL_MAIL_SERVICES,
} from "../../config";



const MailServiceSelector = (props) => {
  const { selectedMailService, changeMailService } = props;

  const mailServiceOptions = ALL_MAIL_SERVICES.map((serviceKey) => {
    return { value: serviceKey, label: MAIL_SERVICES_DOMAINS[serviceKey] };
  });

  const selectedMailServiceOption = mailServiceOptions.find(
    (option) => option.serviceKey === selectedMailService
  );

  const SELECT_STYLE_CONFIG = {
    option: (provided, state) => ({
      ...provided,
      color: "black",
      opactiy: 1,
      lineHeight: 2,
      width: 500,
      height: 53,
      border: "1px solid",
      textAlign: "center",
      cursor: "pointer",
      color: "white"
    }),
    menu: (provided, state) => ({
      ...provided,
      width: 500,
      height: 53,
      zIndex: "9999",
      background: "rgba(256, 256, 256, 1)",
      cursor: "pointer",
    }),
    control: () => ({
      width: 500,
      height: 53,
      border: "1px solid",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      lineHeight: 4,
      cursor: "pointer",
      color: "white"
    }),
    singleValue: (provided, state) => {
      const transition = "opacity 300ms";
      const opacity =1;
      return { ...provided, opacity, transition };
    },
  };
  return (
    <div >
      <Select
        styles={SELECT_STYLE_CONFIG}
        isSearchable
        defaultValue={selectedMailServiceOption}
        onChange={(option) => changeMailService(option.value)}
        options={mailServiceOptions}
        components={{
          IndicatorSeparator: () => null
        }}
      />
    </div>
  );
};


export default MailServiceSelector;