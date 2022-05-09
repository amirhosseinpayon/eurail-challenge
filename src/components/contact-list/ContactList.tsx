import React, { useState, useEffect } from "react";

import styles from "./contacts-list.module.scss";

import { useMemoizedSortedContacts } from "../../hooks/useMemoizedSortedContacts";

import { ContactListItem } from "./ContactListItem";

import { contactType } from "../../types/contact.type";

interface Props {
  categorizedContacts: any;
  activeCategoryKey: string;
}

export const ContactList: React.FC<Props> = ({
  categorizedContacts,
  activeCategoryKey = "a",
}) => {
  const [activeContacts, setActiveContacts] = useState<contactType[]>([]);
  const [selectedContactPhone, setSelectedContactPhone] = useState<
    string | null
  >(null);

  useEffect(() => {
    setActiveContacts(categorizedContacts[activeCategoryKey].contacts);
  }, [activeCategoryKey, categorizedContacts]);

  const sortedActiveContacts = useMemoizedSortedContacts(
    activeContacts,
    activeCategoryKey
  );

  const onSelectCardHandler = (phone: string) => {
    setSelectedContactPhone(phone);
  };

  const onCloseCardHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedContactPhone(null);
  };

  return (
    <div className={styles.contactList}>
      <ul className={styles.contactListItems}>
        {sortedActiveContacts.map((contact: contactType) => (
          <ContactListItem
            key={contact.phone}
            contact={contact}
            showCard={selectedContactPhone === contact.phone}
            onClickHandler={() => onSelectCardHandler(contact.phone)}
            onCloseCardHandler={onCloseCardHandler}
          />
        ))}
      </ul>
    </div>
  );
};
