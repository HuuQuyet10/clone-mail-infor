import React from "react";

export default function MailboxNameInput(props) {
  const { mailBoxName, changeMailBoxName } = props;
  return (
    <input
      type="name"
      id="name"
      value={mailBoxName}
      onChange={changeMailBoxName}
      readOnly
      style={{fontSize: "20px", textAlign: "center"}}
    />
  );
}
