<script setup lang="ts">
const props = defineProps<{
  content: string;
  color: "white" | "black";
}>();
</script>
<template>
  <div
    class="flex text-white w-full my-6 relative justify-center items-center mt-4 sm:text-xl font-light xl:text-2xl"
    :class="{
      'text-white': props.color === 'white',
      'text-black': props.color === 'black',
    }"
  >
    {{ props.content }}
  </div>
</template>
