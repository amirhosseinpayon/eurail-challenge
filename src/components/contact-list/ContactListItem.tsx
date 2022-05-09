import React from "react";

import styles from "./contacts-list.module.scss";

import { ContactCard } from "../contact-card/ContactCard";

import { contactType } from "../../types/contact.type";

interface Props {
  contact: contactType;
  showCard: boolean;
  onClickHandler: () => void;
  onCloseCardHandler: (event: React.MouseEvent) => void;
}

export const ContactListItem: React.FC<Props> = ({
  contact,
  showCard,
  onClickHandler,
  onCloseCardHandler,
}) => (
  <li
    className={styles.contactListItem}
    onClick={onClickHandler}
    key={contact.phone}
  >
    <span>{contact.name.first}</span>,&nbsp;
    <span>{contact.name.last.toUpperCase()}</span>
    {showCard ? (
      <ContactCard
        contact={contact}
        onCloseHandler={(event: React.MouseEvent) => onCloseCardHandler(event)}
      />
    ) : null}
  </li>
);
