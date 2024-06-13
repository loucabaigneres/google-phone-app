import { defineStore } from "pinia"

export const useContactStore = defineStore("contact", () => {
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      number: "1234567890",
    },
    {
      id: 2,
      name: "Jane Doe",
      number: "0987654321",
    },
    {
      id: 3,
      name: "Alice",
      number: "12 31 23 12 31",
    },
    {
      id: 4,
      name: "Bob",
      number: "3213213213",
    },
    {
      id: 5,
      name: "Charlie",
      number: "4564564564",
    },
    {
      id: 6,
      name: "David",
      number: "7897897897",
    },
    {
      id: 7,
      name: "Eve",
      number: "9879879879",
    },
    {
      id: 8,
      name: "Emma",
      number: "6546546546",
    },
  ]

  const addContact = (name, number) => {
    const newContact = {
      id: contacts.length + 1,
      name,
      number,
    }
    contacts.push(newContact)
  }

  return {
    contacts,
    addContact,
  }
})
