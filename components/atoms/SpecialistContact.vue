<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <span
    class="inline-flex overflow-hidden rounded-md bg-white shadow-sm border"
  >
    <button
      class="inline-block border-e p-3 text-gray-700 hover:bg-gray-100 focus:relative"
      title="Edit Product"
    >
      <Icon name="bxl:whatsapp" color="black" class="text-2xl" />
    </button>

    <button
      class="inline-block p-3 text-gray-700 hover:bg-gray-100 focus:relative border-e"
      title="Delete Product"
      @click="social.redirect('instagram')"
    >
      <Icon name="bxl:instagram" class="text-2xl" color="black" />
    </button>
    <button
      class="inline-block border-e p-3 text-gray-700 hover:bg-gray-100 focus:relative"
      title="Edit Product"
    >
      <Icon
        name="majesticons:bookmark-plus-line"
        color="black/80"
        class="text-2xl"
      />
    </button>
  </span>
</template>
