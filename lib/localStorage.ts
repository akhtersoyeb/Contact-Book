import { Url } from "url"

export type Contact = {
  id: string
  name: string
  phone: string
  type: string
  isOnWhatsapp: boolean
  profilePicture: string
}

export const addContactToLS = (contact: Contact) => {
  const data = localStorage.getItem('contacts')
  const contacts = data
    ? JSON.parse(data)
    : []
  const newContacts = [...contacts, contact].sort((a, b) => a.name.localeCompare(b.name))
  localStorage.setItem('contacts', JSON.stringify(newContacts))
}

export const getContactIndexFromLS = (id: string) => {
  const data = localStorage.getItem('contacts')
  if (data) {
    const contacts = JSON.parse(data)
    const index = contacts.findIndex((item: Contact) => item.id === id)
    return index
  } else {
    return -1
  }

}

export const getContactsFromLS = () => {
  const data = localStorage.getItem('contacts')
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

export const setContactsArray = (newContacts: Contact[]) => {
  localStorage.setItem('contacts', JSON.stringify(newContacts))
}

export const updateContactOnLS = (updatedContact, index) => {
  const storedContacts = getContactsFromLS()
  storedContacts[index] = updatedContact
  setContactsArray(storedContacts)
}