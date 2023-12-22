<!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->
<template>
  <div class="w-full justify-center flex">
    <section>
      <div class="flex lg:hidden justify-center items-center w-full bg-primary">
        <AtomsSemiTitle name="Nossos Serviços" color="black"> </AtomsSemiTitle>
      </div>
      <div
        class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 justify-center items-center"
      >
        <div
          class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 items-center lg:gap-x-16"
        >
          <div
            class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
          >
            <div class="hidden lg:flex">
              <AtomsSemiTitle
                name="Nossos Serviços"
                color="black"
              ></AtomsSemiTitle>
            </div>

            <AtomsText
              content="O processo de regularização pode variar de acordo com a legislação local e a situação específica do imóvel. Conte com a orientação de  nossos profissionais especializados para garantir que todos os trâmites sejam realizados corretamente.


"
              color="black"
            ></AtomsText>
            <!-- <a
              href="#"
              class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a> -->
            <AtomsButtonContact
              name=" Contratar Serviço"
              color="yellow"
              shadow="brown"
              text="brown"
            ></AtomsButtonContact>
          </div>
          <MoleculesListService />
        </div>
      </div>
    </section>
  </div>
</template>
