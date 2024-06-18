<template>
  <section class="flex h-full flex-col overflow-hidden text-gray-100">
    <header class="flex items-center gap-3 p-3">
      <RouterLink to="/contacts">
        <span class="material-symbols-outlined text-xl"> close </span>
      </RouterLink>
      <h2 class="w-full text-lg">Create contact</h2>
      <button
        class="rounded-full bg-indigo-300 px-4 py-1.5 text-sm text-gray-900"
      >
        Save
      </button>
      <span class="material-symbols-outlined text-xl"> more_vert </span>
    </header>
    <div
      class="flex flex-col items-center gap-4 overflow-y-auto px-3 py-4 no-scrollbar"
    >
      <div class="flex flex-col items-center gap-3">
        <div
          class="flex size-24 items-center justify-center rounded-full bg-gray-800 text-gray-950"
        >
          <span class="material-symbols-outlined text-6xl text-gray-100">
            add_photo_alternate
          </span>
        </div>
        <h2 class="text-indigo-300">Add picture</h2>
      </div>
      <div class="flex w-full flex-col gap-4">
        <div class="flex gap-3">
          <span class="material-symbols-outlined mt-1 text-xl text-gray-100">
            person
          </span>
          <div class="flex w-9/12 flex-col gap-2">
            <input
              class="rounded border border-solid border-gray-100 bg-gray-900 p-3 text-sm text-gray-100 placeholder:text-sm placeholder:text-gray-100"
              type="text"
              placeholder="First name"
            />
            <input
              class="rounded border border-solid border-gray-100 bg-gray-900 p-3 text-sm text-gray-100 placeholder:text-sm placeholder:text-gray-100"
              type="text"
              placeholder="Last name"
            />
          </div>
        </div>
        <div class="flex gap-3">
          <span class="material-symbols-outlined mt-1 text-xl text-gray-100">
            domain
          </span>
          <div class="w-9/12">
            <input
              class="w-full rounded border border-solid border-gray-100 bg-gray-900 p-3 text-sm text-gray-100 placeholder:text-sm placeholder:text-gray-100"
              type="text"
              placeholder="Company"
            />
          </div>
        </div>
        <div class="flex gap-3">
          <span class="material-symbols-outlined mt-1 text-xl text-gray-100">
            phone
          </span>
          <div class="flex w-9/12 flex-col gap-2">
            <input
              class="rounded border border-solid border-gray-100 bg-gray-900 p-3 text-sm text-gray-100 placeholder:text-sm placeholder:text-gray-100"
              type="text"
              placeholder="Phone"
            />
            <select
              name="phone"
              id="phoneLabel"
              class="w-1/2 rounded border border-solid border-gray-100 bg-gray-900 p-3 text-sm text-gray-100 placeholder:text-sm placeholder:text-gray-100"
            >
              <option value="empty">No label</option>
              <option value="mobile" selected>Mobile</option>
              <option value="work">Work</option>
              <option value="home">Home</option>
              <option value="other">Other</option>
              <option value="custom">Custom</option>
            </select>
          </div>
        </div>
        <div class="flex gap-3">
          <span class="material-symbols-outlined mt-1 text-xl text-gray-100">
            email
          </span>
          <div class="flex w-9/12 flex-col gap-2">
            <input
              class="rounded border border-solid border-gray-100 bg-gray-900 p-3 text-sm text-gray-100 placeholder:text-sm placeholder:text-gray-100"
              type="text"
              placeholder="Email"
            />
            <select
              name="phone"
              id="phoneLabel"
              class="w-1/2 rounded border border-solid border-gray-100 bg-gray-900 p-3 text-sm text-gray-100 placeholder:text-sm placeholder:text-gray-100"
            >
              <option value="empty">No label</option>
              <option value="home" selected>Home</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
              <option value="custom">Custom</option>
            </select>
          </div>
        </div>
        <div class="flex gap-3">
          <span class="material-symbols-outlined mt-1 text-xl text-gray-100">
            event
          </span>
          <div class="flex w-9/12 flex-col gap-2">
            <input
              class="rounded border border-solid border-gray-100 bg-gray-900 p-3 text-sm text-gray-100 placeholder:text-sm placeholder:text-gray-100"
              type="text"
              placeholder="Significant date"
            />
            <select
              name="phone"
              id="phoneLabel"
              class="w-1/2 rounded border border-solid border-gray-100 bg-gray-900 p-3 text-sm text-gray-100 placeholder:text-sm placeholder:text-gray-100"
            >
              <option value="empty">No label</option>
              <option value="mobile" selected>Birthday</option>
              <option value="other">Other</option>
              <option value="custom">Custom</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
