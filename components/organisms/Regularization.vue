<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <div class="flex-col w-full">
    <div class="justify-center items-center w-full px-10 self-center">
      <AtomsSemiTitle name="  Porque regularizar seu imóvel?" color="black">
      </AtomsSemiTitle>
    </div>
    <div class="flex flex-col lg:flex-row w-full h-auto justify-center mt-10">
      <div
        class="flex-col px-6 w-full lg:w-1/2 justify-center text-center items-center xl:pl-36"
      >
        <AtomsCardWhat
          title="Segurança Jurídica:"
          content="A regularização confere segurança jurídica ao proprietário, assegurando que ele tenha o direito legal de posse sobre o imóvel. Isso evita disputas e litígios futuros relacionados à propriedade."
        />
        <AtomsCardWhat
          title="Valorização do Imóvel:"
          content="Imóveis regulares têm até 60% de valorização se comparado aos em situação irregular. A legalidade do imóvel pode ser um fator decisivo para compradores e investidores."
        />
        <AtomsCardWhat
          title="Acesso a Financiamentos e Empréstimos:"
          content="  Proprietários de imóveis regulares têm mais facilidade para obter financiamentos e empréstimos com taxas menores, já que a regularização é frequentemente um requisito para instituições financeiras."
        />
        <AtomsCardWhat
          title="Alugueres com maior garantia: "
          content=" A regularização de um imóvel é fundamental quando se busca obter aluguel com mais garantia, tanto para o proprietário quanto para o inquilino."
        />
        <div class="w-full flex justify-center mb-10 lg:mb-1">
          <AtomsButtonContact
            name="Quero Regularizar"
            color="yellow"
            shadow="brown"
            @click="() => social.redirect('whatsapp1')"
          ></AtomsButtonContact>
        </div>
      </div>
      <div class="flex w-full lg:w-1/2 px-6">
        <img
          src="/img/home.png"
          alt="Foto de um Imóvel Regularizado"
          class="w-auto h-auto"
        />
      </div>
    </div>
  </div>
</template>
