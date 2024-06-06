<script setup>
import ContactCard from "@/components/ContactCard.vue"
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
    <div class="grid grid-cols-7">
      <div class="sticky top-0 h-fit">
        <div class="flex size-10 items-center">
          <span class="text-base font-medium text-indigo-300">J</span>
        </div>
      </div>
      <div class="col-span-6 flex flex-col">
        <ContactCard v-for="index in 10" :key="index" />
      </div>
    </div>
    <div class="grid grid-cols-7">
      <div class="sticky top-0 h-fit">
        <div class="flex size-10 items-center">
          <span class="text-base font-medium text-indigo-300">K</span>
        </div>
      </div>
      <div class="col-span-6 flex flex-col">
        <ContactCard v-for="index in 10" :key="index" />
      </div>
    </div>
  </section>
</template>
