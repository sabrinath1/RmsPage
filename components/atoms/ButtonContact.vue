<script setup lang="ts">
const props = defineProps<{
  name: string;
  color: "yellow" | "brown";
  shadow: "yellow" | "white";
}>();
const social = useSocialRedirect();
</script>
<template>
  <div class="flex">
    <button
      class="text-secondary rounded-lg w-auto h-10 flex justify-center border-white border-2 items-center px-6 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
      :class="{
        'bg-primary': props.color === 'yellow',
        'bg-secondary': props.color === 'brown',
        'border-secondary': props.shadow === 'white',
        'border-primary': props.shadow === 'yellow',
      }"
      @click="() => social.redirect('whatsapp')"
    >
      {{ props.name }}
    </button>
  </div>
</template>
