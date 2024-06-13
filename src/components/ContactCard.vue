<script setup>
import { defineProps } from "vue"

const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="flex items-center gap-3 px-3 py-1.5">
    <div
      class="flex size-8 items-center justify-center rounded-full bg-orange-500"
    >
      <h3 class="text-lg text-gray-950">{{ contact.name[0] }}</h3>
    </div>
    <p class="text-sm text-gray-100">{{ contact.name }}</p>
  </div>
</template>
