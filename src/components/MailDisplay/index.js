
import React from "react";
import MailboxNameInput from "../MailBoxNameInput";
import MailServiceSelector from "../MailServiceSelector";


export default function MailDisplay(props) {
  const {
    mailBoxName,
    mailServiceDomain,
    changeMailService,
    changeMailBoxName,
  } = props;

  return (
    <div style={{display: "flex", marginTop: "30px", color: "black"}}>
      <MailboxNameInput
        key="mailboxNameInput"
        mailBoxName={mailBoxName}
        changeMailBoxName={changeMailBoxName}
      />
      <h2 style={{ padding: "0px 16px", marginTop: "10px", marginBottom: "0px"}}>@</h2>
      <MailServiceSelector
        key="mailServiceSelector"
        mailServiceDomain={mailServiceDomain}
        changeMailService={changeMailService}
      />
    </div>
  );
}
