<template>
  <section id="educativa">
    <v-container>
      <h1 class="mb-8 font-weight-bold" style="color:#2F2E83;letter-spacing:3px;text-shadow:0 2px 12px #F47B2044;">Sección Educativa</h1>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="8" class="mb-8 edu-card" rounded="xl" style="background:#FFFFFF;box-shadow:0 4px 16px #E5E5E5;">
            <v-card-title class="font-weight-bold edu-title" style="color:#F47B20;">¿Qué es DTF?</v-card-title>
            <v-card-text>
              <p class="edu-text" style="color:#4A4A4A; font-size:1.05rem; line-height:1.7;">
                DTF (Direct to Film) es una técnica moderna de impresión textil que permite transferir diseños directamente sobre prendas mediante una película especial y calor. Es ideal para personalizar camisas, gorras y otros productos con alta calidad y durabilidad.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'EducativaSection',
};
</script>

<style scoped>
/* Estilos personalizados */
</style>