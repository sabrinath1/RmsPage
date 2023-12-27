<template>
  <div class="drawer bg-white z-0 w-full relative">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <OrganismsHeader />

      <div class="mb-20 mt-20">
        <slot></slot>
      </div>
      <OrganismsFooter />
    </div>
    <div class="drawer-side z-20">
      <label for="my-drawer-3  " class="drawer-overlay"></label>
      <MoleculesMenuMobile />
    </div>
  </div>
</template>
