<script setup lang="ts">
const props = defineProps<{
  title: string;
  content: string;
}>();
</script>
<template>
  <div class="w-full mx-auto flex lg:flex-row justify-center my-4">
    <!-- <div class="flex justify-center lg:justify-start mx-auto">
      <img src="/img/check.png" class="w-8 h-8 justify-center" />
    </div> -->
    <div class="flex-col w-full my-auto font-normal text-justify">
      <h3 class="flex px-4 text-secondary font-bold text-xl py-2 justify-start">
        {{ props.title }}
      </h3>
      <p
        class="w-full px-4 justify-end font-sans text-lg text-secondary text-justify xl:text-2xl flex my-6 relative items-center mt-4 sm:text-xl font-light"
      >
        {{ props.content }}
      </p>
    </div>
  </div>
</template>
