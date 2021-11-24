
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
    <div>
      <MailboxNameInput
        key="mailboxNameInput"
        mailBoxName={mailBoxName}
        changeMailBoxName={changeMailBoxName}
      />
      <h2 style={{flexGrow: "1" }}>@</h2>
      <MailServiceSelector
        key="mailServiceSelector"
        mailServiceDomain={mailServiceDomain}
        changeMailService={changeMailService}
      />
    </div>
  );
}
