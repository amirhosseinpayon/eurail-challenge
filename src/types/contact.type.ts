import { contactNameType } from './contact-name.type'

export type contactType = {
  name: contactNameType,
  email: string,
  phone: string,
  picture: any,
  location: any,
  login: any
}