<script setup>
import ContactCard from "@/components/ContactCard.vue"
import { useContactStore } from "@/stores/contacts.js"
import { computed } from "vue"
import { RouterLink } from "vue-router"

const { contacts } = useContactStore()

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
  <section class="flex h-full flex-col overflow-hidden">
    <SearchBar />
    <div class="mb-0.5 h-full overflow-hidden px-3">
      <div
        class="flex h-full flex-col overflow-y-auto px-3 pb-36 pt-2 text-gray-200"
      >
        <RouterLink to="/contacts/create">
          <div
            class="ml-10 flex items-center gap-3 px-3 py-1.5 text-indigo-300"
          >
            <div class="flex size-7 items-center justify-center">
              <span class="material-symbols-outlined text-xl">
                person_add
              </span>
            </div>
            <p class="text-sm">Create new contact</p>
          </div>
        </RouterLink>
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
          <ul class="col-span-6 flex flex-col">
            <li v-for="contact in group" :key="contact.id">
              <RouterLink :to="{ name: 'contact', params: { id: contact.id } }">
                <ContactCard :contact="contact" />
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <NavBar />
  </section>
</template>
