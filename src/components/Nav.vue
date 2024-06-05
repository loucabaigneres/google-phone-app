<script>
import { RouterLink } from "vue-router"
</script>

<template>
  <nav class="w-full bg-gray-800 text-center">
    <div class="grid grid-cols-3 p-3 text-gray-400">
      <RouterLink to="/favorites" class="flex flex-col items-center gap-2">
        <span class="material-symbols-outlined rounded-3xl px-5 py-1">
          star
        </span>
        <span class="text-sm"> Favorites </span>
      </RouterLink>
      <RouterLink to="/" class="flex flex-col items-center gap-2">
        <span class="material-symbols-outlined rounded-3xl px-5 py-1">
          schedule
        </span>
        <span class="text-sm"> Recents </span>
      </RouterLink>
      <RouterLink to="/contacts" class="flex flex-col items-center gap-2">
        <span class="material-symbols-outlined rounded-3xl px-5 py-1">
          group
        </span>
        <span class="text-sm"> Contacts </span>
      </RouterLink>
    </div>
    <div class="flex w-full justify-center py-2">
      <div class="h-1 w-1/4 rounded-sm bg-gray-300"></div>
    </div>
  </nav>
</template>

<style>
.router-link-exact-active > .material-symbols-outlined {
  font-variation-settings: "FILL" 1;
  background-color: #374151;
}

.router-link-exact-active > span:last-child {
  font-weight: 700;
}
</style>
