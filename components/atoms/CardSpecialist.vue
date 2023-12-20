<script setup lang="ts">
const props = defineProps<{
  img: string;
  text: "white" | "brown";
  content: string;
}>();
</script>
<template>
  <div class="flex flex-col justify-center w-96 items-center text-center py-6">
    <img
      alt="Foto Especialista"
      :src="props.img"
      class="w-64 object-cover h-80 rounded-lg"
    />

    <!-- <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
        Lorem, ipsum dolor.
      </h3> -->

    <p
      class="mt-2 w-64"
      :class="{
        'text-white': props.text === 'white',
        'text-secondary': props.text === 'brown',
      }"
    >
      {{ props.content }}
    </p>
  </div>
</template>
