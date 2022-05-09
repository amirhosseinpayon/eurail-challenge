import { contactType } from './contact.type'

export type categorizedContactType = {
  label: string,
  key: string,
  contacts: contactType[],
}