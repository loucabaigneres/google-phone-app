<script setup>
import { computed, ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const contactId = ref(route.params.id)

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

const contact = computed(() =>
  contacts.find((c) => c.id.toString() === contactId.value),
)
</script>

<template>
  <section class="flex h-full flex-col overflow-hidden text-gray-100">
    <header class="flex gap-4 p-3">
      <span class="material-symbols-outlined mr-auto text-xl">
        arrow_back
      </span>
      <span class="material-symbols-outlined text-xl"> edit </span>
      <span class="material-symbols-outlined text-xl"> star </span>
      <span class="material-symbols-outlined text-xl"> more_vert </span>
    </header>
    <div class="overflow-y-auto no-scrollbar">
      <div class="flex flex-col items-center gap-4 px-3 py-4">
        <div
          class="flex size-36 items-center justify-center rounded-full bg-orange-500 text-gray-950"
        >
          <span class="text-7xl font-normal">M</span>
        </div>
        <h1 class="text-xl font-light">{{ contact.name }}</h1>
        <div class="grid w-full grid-cols-4 items-center">
          <div class="flex flex-col items-center gap-1">
            <div
              class="flex size-9 items-center justify-center rounded-full bg-gray-700"
            >
              <span class="material-symbols-outlined text-xl"> call </span>
            </div>
            <p class="">Call</p>
          </div>
          <div class="flex flex-col items-center gap-1">
            <div
              class="flex size-9 items-center justify-center rounded-full bg-gray-700"
            >
              <span class="material-symbols-outlined text-xl"> chat </span>
            </div>
            <p class="">Text</p>
          </div>
          <div class="flex flex-col items-center gap-1">
            <div
              class="flex size-9 items-center justify-center rounded-full bg-gray-700"
            >
              <span class="material-symbols-outlined text-xl"> videocam </span>
            </div>
            <p class="">Video</p>
          </div>
          <div class="flex flex-col items-center gap-1">
            <div
              class="flex size-9 items-center justify-center rounded-full bg-gray-700"
            >
              <span class="material-symbols-outlined text-xl">
                directions
              </span>
            </div>
            <p class="">Directions</p>
          </div>
        </div>
        <div class="flex w-full flex-col gap-6 rounded-xl bg-gray-800 p-3">
          <h3 class="text-sm font-medium">Contact info</h3>
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-xl"> call </span>
            <div class="w-full">
              <p class="text-sm">{{ contact.number }}</p>
              <p class="text-xs font-light">Mobile</p>
            </div>
            <span class="material-symbols-outlined text-xl"> videocam </span>
            <span class="material-symbols-outlined text-xl"> chat </span>
          </div>
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-xl"> location_on </span>
            <div class="w-full">
              <p class="text-sm">X rue de Y</p>
              <p class="text-xs font-light">Home</p>
            </div>
            <span class="material-symbols-outlined text-xl"> directions </span>
          </div>
        </div>
      </div>
      <hr class="" />
      <div class="flex flex-col gap-6 px-3 py-24 pt-4">
        <h3 class="text-sm font-medium">Contact settings</h3>
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-xl"> note_stack </span>
          <p class="text-sm">Reminders</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-xl"> block </span>
          <p class="text-sm">Block numbers</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-xl"> voicemail </span>
          <p class="text-sm">Router to voicemail</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-xl"> link </span>
          <p class="text-sm">View linked contacts</p>
        </div>
      </div>
    </div>
  </section>
</template>
