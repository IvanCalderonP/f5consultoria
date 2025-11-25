<template>
  <section id="casos">
    <v-container>
      <h1 class="mb-8 font-weight-bold" style="color:#2F2E83; letter-spacing:3px; text-shadow:0 2px 12px #F47B2044;">Casos de Éxito</h1>
      <v-divider class="mb-8" color="#E5E5E5"></v-divider>
      <v-row>
        <v-col cols="12" md="6" v-for="caso in casos" :key="caso.titulo">
          <v-hover v-slot="{ isHovering, props }">
            <v-card v-bind="props" elevation="8" class="mb-10 caso-card" :class="{ 'hovered': isHovering }" transition="scale-transition" style="background:#FFFFFF;box-shadow:0 4px 16px #E5E5E5;">
              <v-img :src="caso.img" height="220px" class="rounded-t-lg" style="box-shadow:0 4px 16px #2F2E8344;" />
              <v-card-title class="font-weight-bold" style="color:#F47B20;">{{ caso.titulo }}</v-card-title>
              <v-card-text>
                <p style="font-size:1.05rem; color:#4A4A4A; line-height:1.6;">{{ caso.historia }}</p>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'CasosSection',
  data() {
    return {
      casos: [
        {
          titulo: 'Empresa ABC',
          historia: 'ABC logró aumentar sus ventas en un 30% gracias a nuestros productos personalizados. Su equipo ahora luce uniforme y profesional.',
          img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        },
        {
          titulo: 'Cliente Juan Pérez',
          historia: 'Juan necesitaba regalos corporativos únicos. Con nuestros termos y llaveros personalizados, logró impresionar a sus clientes.',
          img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        },
        {
          titulo: 'Empresa XYZ',
          historia: 'XYZ renovó su imagen con banners y viniles de alta calidad, mejorando la presencia en eventos y ferias.',
          img: 'https://images.unsplash.com/photo-1465101178521-c1a6f3b4e8a6',
        },
      ],
    };
  },
};
</script>

<style scoped>
.caso-card {
  transition: box-shadow 0.3s, transform 0.3s;
  border-radius: 16px;
  box-shadow: 0 2px 8px #1867C033;
}
.caso-card.hovered {
  box-shadow: 0 8px 32px #FF9800AA;
  transform: scale(1.03);
}
</style>