import React, { Component } from "react";
import MailDisplay from "../../components/MailDisplay";
import MailActions from "../../components/MailActions";
import {
  ALL_MAIL_SERVICES,
  MAIL_SERVICES_DOMAINS,
  MAIL_SERVICES_MAILBOX_PATH_CONFIG,
} from "../../config";
import { MAILBOX_NAME_LENGTH } from "../../config/generalConfig";
import {
  generateRandomWord,
  getMessage,
  openLinkInNewTab,
  copyTextToClipboard,
} from "../../utils";
import faker from 'faker';

export default class MailGenerator extends Component {
  // componentDidUpdate() {
  //   console.log(faker.internet.userName())
  // }
  state = {
    mailBoxName: faker.internet.userName(),
    mailService: ALL_MAIL_SERVICES[0],
  };

  setMailBoxName = (mailBoxName) => {
    this.setState({
      ...this.state,
      mailBoxName: mailBoxName,
    });
  };

  setMailService = (mailService) => {
    this.setState({
      ...this.state,
      mailService: mailService,
    });
  };

  getComposedEmailId = () => {
    const {mailBoxName, mailService} = this.state;
    return `${mailBoxName}@${MAIL_SERVICES_DOMAINS[mailService]}`;
  };

  openMailBoxInNewTab = () => {
    const {mailBoxName, mailService} = this.state;
    const mailBoxPathConfig = MAIL_SERVICES_MAILBOX_PATH_CONFIG[mailService];
    const composedMailboxUrl = `${mailBoxPathConfig.prefix}${mailBoxName}${mailBoxPathConfig.suffix}`;
    openLinkInNewTab(composedMailboxUrl);
  };

  generateAndSetMailBoxName = () => {
    this.setMailBoxName(faker.internet.userName());
  };

  copyMailIdToClipboard = () => {
    copyTextToClipboard(this.getComposedEmailId(), getMessage("copied"));
  };

  render() {
    const { mailBoxName, mailService } = this.state;

    return (
      <div style={{maxWidth: "1200px", margin: "0px auto"}}>
        <MailDisplay
          mailBoxName={mailBoxName}
          mailServiceDomain={mailService}
          changeMailBoxName={this.setMailBoxName}
          changeMailService={this.setMailService}
        />

        <MailActions
          copyMailIdToClipboard={this.copyMailIdToClipboard}
          generateMailName={this.generateAndSetMailBoxName}
          openMailBoxInNewTab={this.openMailBoxInNewTab}
        />
      </div>
    );
  }
}

