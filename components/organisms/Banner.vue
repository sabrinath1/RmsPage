<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <div class="w-full hidden lg:flex">
    <img
      class="flex w-full h-auto"
      src="/img/banner-desktop.png"
      alt="Ilustração de uma casa"
    />
  </div>
  <div class="w-full hidden md:flex lg:hidden">
    <img
      class="flex w-full h-auto"
      src="/img/banner-tablet.png"
      alt="Ilustração de uma casa"
    />
  </div>
  <div class="flex md:hidden">
    <img
      class="flex w-full h-auto"
      src="/img/banner-mobile2.png"
      alt="Ilustração de uma casa"
    />
  </div>
</template>
