import React from "react";
import {
  MAIL_SERVICES_HOMEPAGES,
  MAIL_SERVICE_NAMES,
  ALL_MAIL_SERVICES,
} from "../../config";


const MailServiceAttribution = ({ link, name }) => (
  <a target="_blank" href={link}>
    {name}
  </a>
);


export default function AttributionMessage() {
  return (
    <h4>
      Thanks to{" "}
      {ALL_MAIL_SERVICES.map((serviceKey) => (
        <MailServiceAttribution
          key={serviceKey}
          link={MAIL_SERVICES_HOMEPAGES[serviceKey]}
          name={MAIL_SERVICE_NAMES[serviceKey]}
        />
      ))}
    </h4>
  );
}
