<script setup lang="ts">
const props = defineProps<{
  specialist: Specialist;
  reverse?: boolean;
}>();
</script>
<template>
  <div
    class="w-full flex flex-col justify-center items-center h-auto lg:pb-10 mt-4 px-10"
  >
    <div
      class="px-4 sm:px-6 lg:py-12 lg:px-8 flex flex-col md:flex-row xl:mx-20 w-full xl:w-2/3 lg:-mt-0 mt-6 border-2 rounded-xl border-secondary"
      :class="{
        'md:flex-row-reverse': props.reverse,
      }"
    >
      <div class="flex w-auto md:w-72 lg:w-auto justify-start">
        <MoleculesContactSpecialist :specialist="props.specialist" />
      </div>
      <div class="flex w-full mt-32 lg:mt-0 h-auto mb-10">
        <n-tabs
          default-value="bio"
          justify-content="space-evenly"
          type="segment"
          animated
        >
          <n-tab-pane name="bio" tab="Bio">
            <MoleculesInfoSpecialist :specialist="props.specialist" />
          </n-tab-pane>
          <n-tab-pane name="historico" tab="Histórico">
            <MoleculesHistoricSpecialist :specialist="props.specialist" />
          </n-tab-pane>
          <n-tab-pane name="especializacao" tab="Especialização">
            <AtomsSpecialization :specialist="props.specialist" />
          </n-tab-pane>
        </n-tabs>
      </div>
    </div>
  </div>
</template>
