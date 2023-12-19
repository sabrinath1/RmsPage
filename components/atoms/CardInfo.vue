<script setup lang="ts">
const props = defineProps<{
  content: string;
  img: string;
}>();
</script>
<template>
  <div class="flex justify-end w-full">
    <div class="flex justify-start w-full h-auto items-center">
      <img :src="props.img" class="w-10 h-auto" />

      <p
        class="w-full font-sans text-accent mx-2 my-6 text-base md:text-xl xl:text-2xl font-normal"
      >
        {{ props.content }}
      </p>
    </div>
  </div>
</template>
