<template>
  <section id="servicios">
    <v-container>
  <h1 class="mb-8 font-weight-bold" style="color:#2F2E83;letter-spacing:1px;text-shadow:0 2px 12px #F47B2044;">Servicios y Productos</h1>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="servicio-card" elevation="10" rounded="xl" style="background:#FFFFFF;box-shadow:0 4px 16px #E5E5E5;">
            <v-card-title class="font-weight-bold d-flex align-center" style="color:#1A1A1A;">
              <v-icon color="#F47B20" class="mr-2">mdi-tshirt-crew</v-icon>
              Camisas Estampadas
            </v-card-title>
            <v-card-text style="color:#4A4A4A;">
              <p>Personalización de camisas con estampados de alta calidad.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in estampadasImgs" :key="img">
                  <v-img :src="img" alt="Camisa estampada" class="rounded-lg" />
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="servicio-card" elevation="10" rounded="xl" style="background:#FFFFFF;box-shadow:0 4px 16px #E5E5E5;">
            <v-card-title class="font-weight-bold d-flex align-center" style="color:#1A1A1A;">
              <v-icon color="#2F2E83" class="mr-2">mdi-tshirt-crew-outline</v-icon>
              Camisas Sublimadas
            </v-card-title>
            <v-card-text style="color:#4A4A4A;">
              <p>Camisas sublimadas con diseños vibrantes y duraderos.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in sublimadasImgs" :key="img">
                  <v-img :src="img" alt="Camisa sublimada" class="rounded-lg" />
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="servicio-card" elevation="10" rounded="xl" style="background:#FFFFFF;box-shadow:0 4px 16px #E5E5E5;">
            <v-card-title class="font-weight-bold d-flex align-center" style="color:#1A1A1A;">
              <v-icon color="#F47B20" class="mr-2">mdi-hat-fedora</v-icon>
              Gorras Personalizadas
            </v-card-title>
            <v-card-text style="color:#4A4A4A;">
              <p>Gorras con tu logo, frase o diseño favorito.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in gorrasImgs" :key="img">
                  <v-img :src="img" alt="Gorra personalizada" class="rounded-lg" />
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="servicio-card" elevation="10" rounded="xl">
            <v-card-title class="font-weight-bold d-flex align-center">
              <v-icon color="#FF9800" class="mr-2">mdi-bottle-tonic</v-icon>
              Termos Personalizados
            </v-card-title>
            <v-card-text>
              <p>Termos con impresión personalizada para empresas o regalos.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in termosImgs" :key="img">
                  <v-img :src="img" alt="Termo personalizado" class="rounded-lg" />
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="servicio-card" elevation="10" rounded="xl">
            <v-card-title class="font-weight-bold d-flex align-center">
              <v-icon color="#1697F6" class="mr-2">mdi-pen</v-icon>
              Lapiceros Personalizados
            </v-card-title>
            <v-card-text>
              <p>Lapiceros con tu marca o diseño especial.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in lapicerosImgs" :key="img">
                  <v-img :src="img" alt="Lapicero personalizado" class="rounded-lg" />
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="servicio-card" elevation="10" rounded="xl">
            <v-card-title class="font-weight-bold d-flex align-center">
              <v-icon color="#FF9800" class="mr-2">mdi-puzzle</v-icon>
              Rompecabezas Personalizados
            </v-card-title>
            <v-card-text>
              <p>Rompecabezas con imágenes, logos o mensajes únicos.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in rompecabezasImgs" :key="img">
                  <v-img :src="img" alt="Rompecabezas personalizado" class="rounded-lg" />
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="servicio-card" elevation="10" rounded="xl">
            <v-card-title class="font-weight-bold d-flex align-center">
              <v-icon color="#1697F6" class="mr-2">mdi-key</v-icon>
              Llaveros Personalizados
            </v-card-title>
            <v-card-text>
              <p>Llaveros con formas y diseños personalizados.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in llaverosImgs" :key="img">
                  <v-img :src="img" alt="Llavero personalizado" class="rounded-lg" />
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="servicio-card" elevation="10" rounded="xl">
            <v-card-title class="font-weight-bold d-flex align-center">
              <v-icon color="#25D366" class="mr-2">mdi-billboard</v-icon>
              Banners y Viniles
            </v-card-title>
            <v-card-text>
              <p>Banners y viniles para publicidad, eventos y decoración.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in bannersImgs" :key="img">
                  <v-img :src="img" alt="Banner o vinil" class="rounded-lg" />
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script>
export default {
  name: 'ServiciosSection',
  data() {
    return {
      estampadasImgs: [
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      ],
      sublimadasImgs: [
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      ],
      gorrasImgs: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9',
        'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      ],
      termosImgs: [
        'https://images.unsplash.com/photo-1519864600265-abb23847ef2c',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      ],
      lapicerosImgs: [
        'https://images.unsplash.com/photo-1518972559570-7cc1309f3229',
        'https://images.unsplash.com/photo-1464983953574-0892a716854b',
      ],
      rompecabezasImgs: [
        'https://images.unsplash.com/photo-1503676382389-4809596d5290',
        'https://images.unsplash.com/photo-1465101178521-c1a6f3b4e8a6',
      ],
      llaverosImgs: [
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      ],
      bannersImgs: [
        'https://images.unsplash.com/photo-1465101178521-c1a6f3b4e8a6',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      ],
    };
  },
};
</script>

<style scoped>
.servicio-card {
  background: linear-gradient(120deg, #f5f7fa 0%, #e3f0ff 100%);
  box-shadow: 0 6px 24px #1697F633;
  margin-bottom: 32px;
  border-radius: 24px;
  transition: box-shadow 0.2s, transform 0.2s;
}
.servicio-card:hover {
  box-shadow: 0 12px 32px #1697F6cc;
  transform: scale(1.03);
}
.v-card-title {
  font-size: 1.3rem;
  letter-spacing: 1px;
}
.v-card-text p {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 16px;
}
.v-img.rounded-lg {
  border-radius: 16px;
}
</style>
