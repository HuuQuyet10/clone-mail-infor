import React from "react";
import { getMessage } from "../../utils/translationUtils";




const Action = (props) => {
  const { actionCallback, messageId, emoji, emojiLabel } = props;
  return (
    <button onClick={actionCallback} style={{width: "300px", color: "#ffffff", backgroundColor: "darksalmon", fontSize: "26px", marginRight: "10px", border: "none", borderRadius: "13px", cursor: "pointer"}}>
      {getMessage(messageId)}{" "}
      <span role="img" aria-label={emojiLabel}>
        {emoji}
      </span>
    </button>
  );
};

const MailActions = (props) => {
  const {
    copyMailIdToClipboard,
    generateMailName,
    openMailBoxInNewTab,
  } = props;

  const ACTION_BUTTONS_CONFIG = [
    {
      actionCallback: copyMailIdToClipboard,
      messageId: "copy",
      emoji: "📄",
      emojiLabel: "sheet",
    },
    {
      actionCallback: generateMailName,
      messageId: "generate",
      emoji: "⚡️",
      emojiLabel: "zap",
    },
    {
      actionCallback: openMailBoxInNewTab,
      messageId: "gotomailbox",
      emoji: "🚀",
      emojiLabel: "rocket",
    },
  ];

  return (
    <div style={{margin: "30px 0px"}}>
      {ACTION_BUTTONS_CONFIG.map((config) => (
        <Action
          key={config.messageId}
          actionCallback={config.actionCallback}
          messageId={config.messageId}
          emoji={config.emoji}
          emojiLabel={config.emojiLabel}
        />
      ))}
    </div>
  );
};

export default MailActions;
