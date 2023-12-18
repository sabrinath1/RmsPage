<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <div class="flex w-full justify-center absolute z-10">
    <div
      class="navbar bg-primary justify-between xl:justify-around fixed h-20 lg:h-24"
    >
      <div class="flex-none lg:hidden">
        <label
          for="my-drawer-3"
          class="btn btn-circle swap swap-rotate bg-primary border-primary text-secondary hover:bg-white"
        >
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 512 512"
          >
            <path
              d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
            />
          </svg>
        </label>
      </div>

      <div class="flex px-2 mx-2">
        <AtomsLogotipo></AtomsLogotipo>
      </div>

      <div
        class="flex-none hidden lg:block justify-center items-center text-white"
      >
        <MoleculesMenu></MoleculesMenu>
      </div>

      <div class="hidden md:flex items-end space-x-4 mr-6 text-center">
        <AtomsButtonContact
          color="yellow"
          name="Entrar em Contato"
          shadow="brown"
        ></AtomsButtonContact>
        <!-- <button
          class="hidden sm:flex"
          text
          style="font-size: 35px"
          @click="social.redirect('whatsapp')"
        >
          <Icon name="mdi:whatsapp" class="text-white transition-all" />
        </button> -->
        <!-- <button
          class="hidden lg:flex"
          text
          style="font-size: 35px"
          @click="social.redirect('instagram')"
        >
          <Icon name="mdi:instagram" class="text-secondary transition-all" />
        </button> -->
      </div>
    </div>
  </div>
</template>
