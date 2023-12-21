<script setup lang="ts">
const props = defineProps<{
  img: string;
  text?: "white" | "brown";
  content: string;
}>();
</script>
<template>
  <div
    class="flex flex-col justify-center w-96 items-center text-center justify-items-center"
  >
    <img
      alt="Foto Especialista"
      :src="props.img"
      class="w-64 xl:w-80 xl:h-96 object-cover h-80 rounded-lg"
    />

    <p class="mt-2 w-64">
      {{ props.content }}
    </p>
  </div>
</template>
