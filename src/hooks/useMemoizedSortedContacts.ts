import { useRef, useState, useEffect } from "react";

import _ from "lodash";

import { contactType } from "../types/contact.type";

export const useMemoizedSortedContacts = (contacts: contactType[], activeCategoryKey: string) => {
    
  // cache sorted contacts by the key
  const cachedSortedContacts:any = useRef({});
  
  const [sortedSContacts, setSortedContacts] = useState<contactType[]>([])

  useEffect(() => {
    if (!contacts.length) {
      return
    }

    let sortedContacts = [];

    if (cachedSortedContacts.current[activeCategoryKey]) {
      sortedContacts = cachedSortedContacts.current[activeCategoryKey];
    } else {
      sortedContacts = _.sortBy(contacts, [
        ({ name }: contactType) => name?.first.toLowerCase(),
        ({ name }: contactType) => name?.last.toLowerCase(),
      ]);
      cachedSortedContacts.current[activeCategoryKey] = sortedContacts;
    }

    setSortedContacts(sortedContacts)
  }, [contacts]);

  return sortedSContacts
};