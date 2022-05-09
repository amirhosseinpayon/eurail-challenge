import React from "react";

import styles from "./contact-card.module.scss";

import { ContactInfoItem } from "./ContactInfoItem";

import { contactType } from "../../types/contact.type";

interface Props {
  contact: contactType;
  onCloseHandler: (event: React.MouseEvent) => void;
}

export const ContactCard: React.FC<Props> = React.memo(
  ({
    contact: {
      name,
      picture,
      email,
      phone,
      location: { street, city, state, postcode },
      login: { username },
    },
    onCloseHandler,
  }) => {
    return (
      <div className={styles.contactCard}>
        <div className={styles.contactCardImageSide}>
          <span className={styles.contactCardClose} onClick={onCloseHandler}>
            X
          </span>
          <img
            className={styles.contactCardThumbnail}
            src={picture.thumbnail}
            alt={email}
          />
        </div>
        <div className={styles.contactCardContentSide}>
          <p
            className={styles.contactCardName}
          >{`${name.first.toUpperCase()}, ${name.last.toLowerCase()}`}</p>
          <ul className={styles.contactCardInfoList}>
            <ContactInfoItem title="email" value={email} />
            <ContactInfoItem title="phone" value={phone} />
            <ContactInfoItem title="street" value={street.name} />
            <ContactInfoItem title="city" value={city} />
            <ContactInfoItem title="state" value={state} />
            <ContactInfoItem title="postcode" value={postcode} />
          </ul>
        </div>
        <div className={styles.contactCardUsername}>
          <span>USERNAME</span>&nbsp;
          <span>{username}</span>
        </div>
      </div>
    );
  }
);
