<script setup lang="ts">
const props = defineProps<{
  specialist: Specialist;
}>();
</script>
<template>
  <div>
    <h3 class="font-semibold text-xl lg:text-2xl text-center">
      Especialização
    </h3>
    <div class="">
      <n-list>
        <n-list-item v-for="s in specialist.skills">
          {{ s }}
        </n-list-item>
      </n-list>
    </div>
  </div>
</template>
