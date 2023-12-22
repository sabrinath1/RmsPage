<script setup lang="ts">
const props = defineProps<{
  content: string;
  img: string;
}>();
</script>
<template>
  <div class="flex justify-end w-full -z-30">
    <div class="flex justify-start w-full h-auto items-center -z-30">
      <img :src="props.img" class="w-10 h-auto" />

      <p
        class="w-full font-sans text-accent mx-2 text-base md:text-xl l my-6 relative justify-center items-center mt-4 sm:text-xl font-light xl:text-2xl"
      >
        {{ props.content }}
      </p>
    </div>
  </div>
</template>
