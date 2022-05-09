import { useEffect } from "react";
import { contactType } from '../types/contact.type'
import { categorizedContactType } from '../types/categorizedContact.type'

export const useFillCategorizedContacts = (contacts: contactType[], categorizedContacts: categorizedContactType[]) => {
  useEffect(() => {
    contacts?.forEach((contact: contactType) => {
      const firstChar: any = contact.name.last.charAt(0).toLowerCase();
      categorizedContacts[firstChar]?.contacts.push(contact);
    });
  }, [contacts, categorizedContacts]);

  return categorizedContacts;
};