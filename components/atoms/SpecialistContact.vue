<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <div class="flex justify-center w-64">
    <span
      class="inline-flex overflow-hidden rounded-md bg-white/60 shadow-sm border backdrop-blur-sm text-black border-blackClass Properties Preview border-inherit border-color: inherit; border-current border-color: currentColor; border-transparent border-color: transparent; border-black"
    >
      <button
        class="inline-block border-e p-3 hover:bg-gray-100 focus:relative"
        title="Edit Product"
      >
        <Icon name="bxl:whatsapp" class="text-2xl" />
      </button>

      <button
        class="inline-block p-3 hover:bg-gray-100 focus:relative border-e"
        title="Delete Product"
        @click="social.redirect('instagram')"
      >
        <Icon name="bxl:instagram" class="text-2xl" />
      </button>
      <button
        class="inline-block border-e p-3 hover:bg-gray-100 focus:relative"
        title="Edit Product"
      >
        <Icon name="majesticons:bookmark-plus-line" class="text-2xl" />
      </button>
    </span>
  </div>
</template>
