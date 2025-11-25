<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <div class="inicio-carrusel-full">
          <v-carousel
            cycle
            height="520"
            show-arrows
            hide-delimiter-background
            delimiter-icon="mdi-circle"
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-img :src="slide.img" height="520" cover class="carrusel-img-zoom">
                <div class="carrusel-texto">
                  <h2>{{ slide.titulo }}</h2>
                  <p>{{ slide.descripcion }}</p>
                </div>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </div>
        <v-card elevation="12" class="pa-8" rounded="xl" style="margin-top:32px;">
          <h1 class="display-2 font-weight-bold mb-6 main-title" style="color:#2F2E83;text-shadow:0 2px 12px #F47B2044,0 2px 0 #fff;letter-spacing:3px;">
            Transformamos tus<br>
            ideas en impresión<br>
            profesional.
          </h1>
          <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 24px;">
            <v-icon size="56" color="#F47B20">mdi-whatsapp</v-icon>
            <v-btn
              class="cotiza-btn"
              elevation="8"
              href="https://wa.me/50377370216?text=Gracias%20por%20comunicarte%20con%20F5%20Consultoria%20Y%20Marketing.%20%C2%BFC%C3%B3mo%20podemos%20ayudarte%3F"
              target="_blank"
            >
              Cotiza por WhatsApp
            </v-btn>
          </div>
        </v-card>
        <inicio-section />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InicioSection from '../components/InicioSection.vue';
export default {
  components: { InicioSection },
  data() {
    return {
      slides: [
        {
          img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80',
          titulo: '¡Promoción de Camisas!',
          descripcion: 'Aprovecha descuentos especiales en camisas personalizadas.'
        },
        {
          img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
          titulo: 'Gorras Exclusivas',
          descripcion: 'Nuevos modelos de gorras con tu logo o diseño favorito.'
        },
        {
          img: 'https://images.unsplash.com/photo-1465101178521-c1a6f3b4e8a6?auto=format&fit=crop&w=900&q=80',
          titulo: 'Termos y Regalos',
          descripcion: 'Personaliza termos, llaveros y más para tu empresa.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.inicio-carrusel-full {
  width: 100vw;
  max-width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  position: relative;
  z-index: 2;
}
.inicio-carrusel-full .v-carousel {
  border-radius: 0;
  box-shadow: 0 8px 32px #2F2E8344;
}
.carrusel-texto {
  position: absolute;
  bottom: 32px;
  left: 32px;
  background: rgba(44,44,44,0.65);
  color: #fff;
  padding: 18px 32px;
  border-radius: 18px;
  box-shadow: 0 4px 24px #1A1A1A44;
  max-width: 70vw;
}
.carrusel-texto h2 {
  margin: 0 0 8px 0;
  font-size: 2rem;
  color: #F47B20;
  font-weight: bold;
  letter-spacing: 2px;
}
.carrusel-texto p {
  margin: 0;
  font-size: 1.15rem;
  color: #fff;
}
.cotiza-btn {
  background: #F47B20 !important;
  color: #fff !important;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 32px;
  box-shadow: 0 6px 24px #F47B2044;
  min-width: 120px;
  height: 40px;
  transition: background 0.2s;
}
.cotiza-btn:hover {
  background: #e76b10 !important;
}
.carrusel-img-zoom {
  transition: transform 0.5s ease;
}
.carrusel-img-zoom:hover {
  transform: scale(1.05);
}
.main-title {
  line-height: 1.2;
}
</style>