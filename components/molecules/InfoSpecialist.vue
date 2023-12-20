<script setup lang="ts">
const props = defineProps<{
  name: string;
  content: string;
  info1: string;
  info2: string;
}>();
</script>
<template>
  <div class="flex justify-center">
    <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <h3 class="font-bold text-xl text-center">{{ props.name }}</h3>
      <AtomsText :content="props.content" color="black" />
      <h3 class="font-semibold text-xl text-center">Especialização</h3>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center mt-10 text-center justify-items-center lg:px-20"
      >
        <div
          class="flex flex-col w-full h-auto md:px-20 lg:px-4 px-10 justify-center xl:px-20"
        >
          <p
            v-html="props.info1"
            class="sm:text-xl font-light xl:text-2xl text-justify"
          />
        </div>
        <div
          class="flex flex-col w-full h-auto md:px-20 lg:px-4 px-10 justify-start xl:px-20"
        >
          <p
            v-html="props.info2"
            class="sm:text-xl font-light xl:text-2xl text-justify"
          />
        </div>
      </div>
    </div>
  </div>
</template>
