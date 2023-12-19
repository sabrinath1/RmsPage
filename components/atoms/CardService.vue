<script setup lang="ts">
const props = defineProps<{
  title: string;
  img: string;
  text: "white" | "brown";
}>();
</script>

<template>
  <!-- <div
    class="card xl:w-80 w-52 h-56 rounded px-2 m-3 lg:m-5 xl:m-10"
    :class="{
      'text-secondary': props.text === 'brown',
      'text-white': props.text === 'white',
    }"
  >
    <div class="flex w-full justify-center">
      <div class="flex justify-center items-center rounded-full w-24 h-24 mt-5">
        <img :src="props.img" class="w-16 h-16" />
      </div>
    </div>
    <div class="items-center text-center w-full">
      <h2 class="card-title flex justify-center my-3">
        {{ props.title }}
      </h2>
    </div>
  </div> -->
  <div>
    <div
      class="block rounded-xl border border-primary p-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
      href="/accountant"
    >
      <span
        class="inline-block rounded-lg bg-gray-50 p-3 justify-center items-center w-24 h-24 mt-5"
      >
        <img :src="props.img" class="w-16 h-16" />
      </span>

      <h2 class="mt-2 font-semibold flex justify-center my-3">
        {{ props.title }}
      </h2>

      <!-- <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
        Lorem ipsum dolor sit amet consectetur.
      </p> -->
    </div>
  </div>
</template>
