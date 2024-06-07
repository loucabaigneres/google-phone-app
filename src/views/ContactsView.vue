<script setup>
import ContactCard from "@/components/ContactCard.vue"
import { computed } from "vue"

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
    number: "1231231231",
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

const groupedContacts = computed(() => {
  // Grouper les contacts par première lettre du nom
  const grouped = contacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(contact)
    return acc
  }, {})

  // Trier chaque groupe de contacts par nom
  Object.keys(grouped).forEach((letter) => {
    grouped[letter].sort((a, b) => a.name.localeCompare(b.name))
  })

  // Trier les clés (lettres) de l'objet grouped et reconstruire l'objet dans l'ordre alphabétique
  const sortedGrouped = Object.keys(grouped)
    .sort()
    .reduce((acc, key) => {
      acc[key] = grouped[key]
      return acc
    }, {})

  return sortedGrouped
})
</script>

<template>
  <section
    class="flex h-full flex-col overflow-y-auto px-3 pb-36 pt-2 text-gray-200"
  >
    <div class="ml-10 flex items-center gap-3 px-3 py-1.5 text-indigo-300">
      <div class="flex size-7 items-center justify-center">
        <span class="material-symbols-outlined text-xl"> person_add </span>
      </div>
      <p class="text-sm">Create new contact</p>
    </div>
    <div
      v-for="(group, letter) in groupedContacts"
      :key="letter"
      class="grid grid-cols-7"
    >
      <div class="sticky top-0 h-fit">
        <div class="flex size-10 items-center">
          <span class="text-base font-medium text-indigo-300">{{
            letter
          }}</span>
        </div>
      </div>
      <div class="col-span-6 flex flex-col">
        <ContactCard
          v-for="contact in group"
          :key="contact.id"
          :contact="contact"
        />
      </div>
    </div>
  </section>
</template>
