<script setup lang="ts">
const props = defineProps<{
  title: string;
  img: string;
  color: "yellow" | "brown";
  text: "white" | "brown";
}>();
</script>

<template>
  <div
    class="card xl:w-80 w-52 h-56 rounded px-2 m-3 lg:m-5 xl:m-10 -z-30"
    :class="{
      'bg-primary': props.color === 'yellow',
      'bg-secondary': props.color === 'brown',
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
  </div>
</template>
