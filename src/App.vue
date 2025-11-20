<template>
  <v-app>
  <v-app-bar app dark elevation="8" style="background: linear-gradient(90deg, #2F2E83 0%, #F47B20 50%, #1A1A1A 100%); border-radius: 0 0 24px 24px; box-shadow: 0 8px 32px #2F2E8344;">
      <v-toolbar-title class="d-flex align-center">
  <img :src="logo" alt="Logo" height="72" style="margin-right: 18px; filter: drop-shadow(0 2px 8px #F47B2044); border-radius: 12px; background: transparent; padding: 4px;" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row class="d-none d-md-flex">
        <v-btn text to="/" style="color:#FFFFFF;font-weight:bold;">Inicio</v-btn>
        <v-btn text to="/servicios" style="color:#FFFFFF;font-weight:bold;">Servicios</v-btn>
        <v-btn text to="/casos" style="color:#FFFFFF;font-weight:bold;">Casos de Éxito</v-btn>
        <v-btn text to="/educativa" style="color:#FFFFFF;font-weight:bold;">Sección Educativa</v-btn>
        <v-btn text @click="scrollToFooter" style="color:#F47B20;font-weight:bold;">Contáctenos</v-btn>
      </v-row>
  <v-btn icon class="d-md-none" @click="drawer = true">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary right>
      <v-list>
        <v-list-item @click="goTo('/')">Inicio</v-list-item>
        <v-list-item @click="goTo('/servicios')">Servicios</v-list-item>
        <v-list-item @click="goTo('/casos')">Casos de Éxito</v-list-item>
        <v-list-item @click="goTo('/educativa')">Sección Educativa</v-list-item>
        <v-list-item @click="handleContacto">Contáctenos</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div class="main-bg">
        <span class="circle-orange c1"></span>
        <span class="circle-orange c2"></span>
        <span class="circle-orange c3"></span>
        <span class="circle-blue c4"></span>
        <span class="circle-blue c5"></span>
        <router-view />
      </div>
      <contacto-section />
      <v-dialog v-model="showContacto" persistent width="340" transition="dialog-bottom-transition">
        <template #activator="{ on }">
          <div class="whatsapp-float" v-on="on" @click="showContacto = true">
            <v-icon size="48" color="#F47B20">mdi-whatsapp</v-icon>
          </div>
        </template>
        <v-card>
          <v-card-title class="headline" style="color:#2F2E83;font-weight:bold;">Contáctenos</v-card-title>
          <v-card-text style="color:#4A4A4A;">
            ¿Necesitas ayuda? Escríbenos por WhatsApp y te atenderemos de inmediato.
          </v-card-text>
          <v-card-actions>
            <v-btn color="#25D366" href="https://wa.me/50377370216?text=Hola%2C%20quiero%20más%20información%20sobre%20F5%20Consultoría%20y%20Marketing" target="_blank" dark>
              Ir a WhatsApp
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="showContacto = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ContactoSection from './components/ContactoSection.vue';
import logo from './assets/logo.png';

const drawer = ref(false);
const router = useRouter();
const showContacto = ref(false);


function goTo(path) {
  router.push(path);
  drawer.value = false;
}

function scrollToFooter() {
  const el = document.getElementById('contacto');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleContacto() {
  scrollToFooter();
  drawer.value = false;
}

</script>

<style>
  .main-bg {
    min-height: 100vh;
    background: #FFFFFF;
    position: relative;
    overflow: visible;
  }
.main-bg::after {
  content: '';
  position: absolute;
  bottom: 60px; right: 8vw;
  width: 140px; height: 140px;
  background: url('https://img.icons8.com/color/96/000000/t-shirt.png') no-repeat center/contain;
  opacity: 0.10;
  z-index: 0;
}
.main-bg::before {
  content: '';
  position: absolute;
  top: 40px; left: 5vw;
  width: 100px; height: 100px;
  background: url('https://img.icons8.com/color/96/000000/t-shirt.png') no-repeat center/contain;
  opacity: 0.08;
  z-index: 0;
}
  .main-bg .circle-orange {
    position: absolute;
    border-radius: 50%;
    background: #FF9800;
    opacity: 0.25;
    z-index: 0;
    box-shadow: 0 4px 24px #FF980044;
    pointer-events: none;
  }
  .main-bg .circle-orange.c1 {
    width: 180px;
    height: 180px;
    top: 18vh;
    left: 8vw;
  }
  .main-bg .circle-orange.c2 {
    width: 120px;
    height: 120px;
    bottom: 8vh;
    right: 10vw;
  }
  .main-bg .circle-orange.c3 {
    width: 90px;
    height: 90px;
    top: 55vh;
    left: 65vw;
  }
  .main-bg .circle-blue {
    position: absolute;
    border-radius: 50%;
    background: #1867C0;
    opacity: 0.18;
    z-index: 0;
    box-shadow: 0 4px 24px #1867C044;
    pointer-events: none;
  }
  .main-bg .circle-blue.c4 {
    width: 120px;
    height: 120px;
    top: 10vh;
    right: 12vw;
  }
  .main-bg .circle-blue.c5 {
    width: 80px;
    height: 80px;
    bottom: 12vh;
    left: 18vw;
  }
.v-main > .main-bg > * {
  position: relative;
  z-index: 1;
}
  .logo-img {
    height: 72px;
    margin-right: 18px;
    filter: drop-shadow(0 2px 8px #FF9800aa);
    border-radius: 12px;
    background: #fff;
    padding: 4px;
  }
@media (max-width: 600px) {
  .logo-img {
    height: 90px;
    margin-right: 20px;
  }
  .titulo-marca {
    font-size: 1.3rem;
    white-space: normal;
    max-width: 80vw;
    font-weight: bold;
    letter-spacing: 0.5px;
    line-height: 1.2;
    display: inline-block;
    overflow: visible;
    text-overflow: unset;
  }
}
/* Sin estilos extra para el menú, vuelve al diseño horizontal clásico */
.saludo-hola-mundo {
  width: 100vw;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #2F2E83;
  margin-top: 0;
  margin-bottom: 0.5rem;
  background: transparent;
  position: relative;
  z-index: 10;
}
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
  letter-spacing: 1px;
}
.carrusel-texto p {
  margin: 0;
  font-size: 1.15rem;
  color: #fff;
}
.whatsapp-float {
  position: fixed;
  right: 32px;
  bottom: 32px;
  z-index: 9999;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 24px #25D36644;
  padding: 8px;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
}
.whatsapp-float:hover {
  box-shadow: 0 8px 32px #25D36688;
  transform: scale(1.08);
}
</style>



