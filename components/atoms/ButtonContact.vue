<script setup lang="ts">
const props = defineProps<{
  name: string;
  color: "yellow" | "brown";
  shadow: "yellow" | "brown";
}>();
const social = useSocialRedirect();
</script>
<template>
  <div class="flex">
    <button
      class="text-secondary block w-80 rounded bg-primary px-12 py-3 text-sm font-medium border-2 focus:outline-none focus:ring sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
      :class="{
        'bg-primary': props.color === 'yellow',
        'bg-secondary': props.color === 'brown',
        'border-secondary': props.shadow === 'brown',
        'border-primary': props.shadow === 'yellow',
      }"
      @click="() => social.redirect('whatsapp')"
    >
      {{ props.name }}
    </button>
  </div>
</template>
