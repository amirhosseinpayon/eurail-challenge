import { useState } from "react";

import styles from "./contacts.module.scss";

import { useApi } from "../../hooks/useApi";
import { useCategorizedContacts } from "../../hooks/useCategorizedContacts";
import { useFillCategorizedContacts } from "../../hooks/useFillCategorizedContacts";

import { GET_CONTACTS } from "../../services/API_URLS";

import { ContactsCategoryTabs } from "../../components/contacts-category-tabs/ContactsCategoryTabs";
import { ContactList } from "../../components/contact-list/ContactList";

export const Contacts = () => {
  const { loading, response }: any = useApi({
    method: "get",
    url: GET_CONTACTS,
  });
  const categorizedContacts = useFillCategorizedContacts(
    response,
    useCategorizedContacts()
  );

  const [activeCategoryKey, setActiveCategoryKey] = useState("a");

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className={styles.contactsWrapper}>
      <p>Contact List</p>
      <div className={styles.contacts}>
        <ContactsCategoryTabs
          categorizedContacts={categorizedContacts}
          activeCategoryKey={activeCategoryKey}
          onClickTabHandler={(categoryKey: string) =>
            setActiveCategoryKey(categoryKey)
          }
        />

        <ContactList
          categorizedContacts={categorizedContacts}
          activeCategoryKey={activeCategoryKey}
        />
      </div>
    </div>
  );
};
