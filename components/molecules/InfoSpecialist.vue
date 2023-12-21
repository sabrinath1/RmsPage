<script setup lang="ts">
const props = defineProps<{
  specialist: Specialist;
}>();
</script>
<template>
  <div class="justify-center">
    <div class="">
      <h3 class="font-bold text-xl lg:text-3xl text-center">
        {{ props.specialist.name }}
      </h3>
      <AtomsText :content="props.specialist.description" />
    </div>
  </div>
</template>
