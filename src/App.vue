<template>
  <v-app>
    <v-app-bar app elevation="8" :class="isDark ? 'app-bar-dark' : 'app-bar-light'">
      <v-toolbar-title class="d-flex align-center">
        <img :src="logo" alt="Logo" height="72" style="margin-right: 18px; filter: drop-shadow(0 2px 8px #F47B2044); border-radius: 12px; background: transparent; padding: 4px;" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row class="d-none d-md-flex">
        <v-btn text to="/" :style="btnStyle">Inicio</v-btn>
        <v-btn text to="/productos" :style="btnStyle">Productos</v-btn>
        <v-btn text to="/casos" :style="btnStyle">Casos de Éxito</v-btn>
        <v-btn text to="/educativa" :style="btnStyle">Sección Educativa</v-btn>
        <v-btn text to="/servicios" :style="btnStyle">Servicios</v-btn>
        <v-btn text @click="scrollToFooter" style="color:#F47B20;font-weight:bold;">Contáctenos</v-btn>
      </v-row>
      <v-btn icon class="d-md-none" @click="drawer = true">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary right :class="isDark ? 'drawer-dark' : 'drawer-light'">
      <v-list>
        <v-list-item @click="goTo('/')">Inicio</v-list-item>
        <v-list-item @click="goTo('/productos')">Productos</v-list-item>
        <v-list-item @click="goTo('/casos')">Casos de Éxito</v-list-item>
        <v-list-item @click="goTo('/educativa')">Sección Educativa</v-list-item>
        <v-list-item @click="goTo('/servicios')">Servicios</v-list-item>
        <v-list-item @click="handleContacto">Contáctenos</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div :class="isDark ? 'main-bg-dark' : 'main-bg-light'">
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
        <v-card :class="isDark ? 'dialog-dark' : 'dialog-light'">
          <v-card-title class="headline" :style="{color: isDark ? '#F47B20' : '#2F2E83', fontWeight: 'bold'}">Contáctenos</v-card-title>
          <v-card-text :style="{color: isDark ? '#E5E5E5' : '#4A4A4A'}">
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
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ContactoSection from './components/ContactoSection.vue';
import logo from './assets/logo.png';

const drawer = ref(false);
const router = useRouter();
const showContacto = ref(false);
const isDark = ref(false);

// Detectar modo oscuro del sistema
onMounted(() => {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  isDark.value = darkModeQuery.matches;
  
  // Escuchar cambios en el modo oscuro
  darkModeQuery.addEventListener('change', (e) => {
    isDark.value = e.matches;
  });
});

const btnStyle = computed(() => ({
  color: isDark.value ? '#FFFFFF' : '#2F2E83',
  fontWeight: 'bold'
}));

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
/* ========================================
   IMPORTAR FUENTES DE GOOGLE FONTS
======================================== */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ========================================
   CONFIGURACIÓN GLOBAL DE FUENTES
======================================== */

/* Fuente base para todo el sitio - Poppins */
* {
  font-family: 'Poppins', sans-serif !important;
}

body {
  font-family: 'Poppins', sans-serif !important;
}

/* Títulos principales (h1) - Bebas Neue */
h1, 
.display-1, 
.display-2, 
.main-title {
  font-family: 'Bebas Neue', cursive !important;
  letter-spacing: 3px !important;
  font-weight: 400 !important;
}

/* Subtítulos (h2, h3) - Bebas Neue */
h2, 
h3, 
.headline,
.v-card-title {
  font-family: 'Bebas Neue', cursive !important;
  letter-spacing: 2px !important;
  font-weight: 400 !important;
}

/* Texto normal - Poppins */
p, 
span, 
.v-card-text, 
.v-card-text p,
.v-list-item {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 400 !important;
  line-height: 1.6 !important;
}

/* Botones - Poppins Bold */
.v-btn {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600 !important;
  letter-spacing: 0.5px !important;
  text-transform: none !important;
}

/* Links - Poppins Medium */
a {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 500 !important;
}

/* Navegación en el header - Poppins Bold */
.v-app-bar .v-btn {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
  letter-spacing: 0.8px !important;
}

/* Texto del carrusel - títulos Bebas Neue */
.carrusel-texto h2 {
  font-family: 'Bebas Neue', cursive !important;
  letter-spacing: 2px !important;
}

/* Texto del carrusel - descripción Poppins */
.carrusel-texto p {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 400 !important;
}

/* ========================================
   MODO CLARO
======================================== */

.app-bar-light {
  background: linear-gradient(90deg, #2F2E83 0%, #F47B20 50%, #1A1A1A 100%) !important;
  border-radius: 0 0 24px 24px;
  box-shadow: 0 8px 32px #2F2E8344;
}

.main-bg-light {
  min-height: 100vh;
  background: #FFFFFF !important;
  position: relative;
  overflow: visible;
}

.main-bg-light h1,
.main-bg-light h2,
.main-bg-light h3 {
  color: #2F2E83 !important;
}

.main-bg-light p,
.main-bg-light span,
.main-bg-light .v-card-text {
  color: #1A1A1A !important;
}

.main-bg-light .v-card {
  background: #FFFFFF !important;
  color: #1A1A1A !important;
}

.main-bg-light .v-card-title {
  color: #2F2E83 !important;
}

.drawer-light {
  background: #FFFFFF !important;
}

.drawer-light .v-list-item {
  color: #2F2E83 !important;
}

.dialog-light {
  background: #FFFFFF !important;
}

/* ========================================
   MODO OSCURO
======================================== */

.app-bar-dark {
  background: linear-gradient(90deg, #1A1A3E 0%, #F47B20 50%, #0D0D0D 100%) !important;
  border-radius: 0 0 24px 24px;
  box-shadow: 0 8px 32px #00000088;
}

.main-bg-dark {
  min-height: 100vh;
  background: #1A1A3E !important;
  position: relative;
  overflow: visible;
}

.main-bg-dark h1,
.main-bg-dark h2,
.main-bg-dark h3 {
  color: #FFFFFF !important;
  text-shadow: 0 2px 12px #F47B2044 !important;
}

.main-bg-dark p,
.main-bg-dark span,
.main-bg-dark .v-card-text {
  color: #E5E5E5 !important;
}

.main-bg-dark .v-card {
  background: #2A2A4E !important;
  color: #FFFFFF !important;
}

.main-bg-dark .v-card-title {
  color: #F47B20 !important;
}

.main-bg-dark .v-card-text p {
  color: #E5E5E5 !important;
}

.main-bg-dark .card-gradient {
  background: linear-gradient(135deg, #2A2A4E 0%, #3A3A6E 100%) !important;
  color: #FFFFFF !important;
}

.drawer-dark {
  background: #2A2A4E !important;
}

.drawer-dark .v-list-item {
  color: #FFFFFF !important;
}

.drawer-dark .v-list-item:hover {
  background: rgba(244, 123, 32, 0.2) !important;
}

.dialog-dark {
  background: #2A2A4E !important;
  color: #FFFFFF !important;
}

/* ========================================
   ESTILOS COMPARTIDOS
======================================== */

.main-bg-light::after,
.main-bg-dark::after {
  content: '';
  position: absolute;
  bottom: 60px; 
  right: 8vw;
  width: 140px; 
  height: 140px;
  background: url('https://img.icons8.com/color/96/000000/t-shirt.png') no-repeat center/contain;
  opacity: 0.10;
  z-index: 0;
}

.main-bg-light::before,
.main-bg-dark::before {
  content: '';
  position: absolute;
  top: 40px; 
  left: 5vw;
  width: 100px; 
  height: 100px;
  background: url('https://img.icons8.com/color/96/000000/t-shirt.png') no-repeat center/contain;
  opacity: 0.08;
  z-index: 0;
}

.main-bg-light .circle-orange,
.main-bg-dark .circle-orange {
  position: absolute;
  border-radius: 50%;
  background: #FF9800;
  opacity: 0.25;
  z-index: 0;
  box-shadow: 0 4px 24px #FF980044;
  pointer-events: none;
}

.main-bg-light .circle-orange.c1,
.main-bg-dark .circle-orange.c1 {
  width: 180px;
  height: 180px;
  top: 18vh;
  left: 8vw;
}

.main-bg-light .circle-orange.c2,
.main-bg-dark .circle-orange.c2 {
  width: 120px;
  height: 120px;
  bottom: 8vh;
  right: 10vw;
}

.main-bg-light .circle-orange.c3,
.main-bg-dark .circle-orange.c3 {
  width: 90px;
  height: 90px;
  top: 55vh;
  left: 65vw;
}

.main-bg-light .circle-blue,
.main-bg-dark .circle-blue {
  position: absolute;
  border-radius: 50%;
  background: #1867C0;
  opacity: 0.18;
  z-index: 0;
  box-shadow: 0 4px 24px #1867C044;
  pointer-events: none;
}

.main-bg-light .circle-blue.c4,
.main-bg-dark .circle-blue.c4 {
  width: 120px;
  height: 120px;
  top: 10vh;
  right: 12vw;
}

.main-bg-light .circle-blue.c5,
.main-bg-dark .circle-blue.c5 {
  width: 80px;
  height: 80px;
  bottom: 12vh;
  left: 18vw;
}

.v-main > div > * {
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

.saludo-hola-mundo {
  width: 100vw;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
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
  background: rgba(44,44,44,0.85);
  color: #fff;
  padding: 18px 32px;
  border-radius: 18px;
  box-shadow: 0 4px 24px #1A1A1A44;
  max-width: 70vw;
}

.carrusel-texto h2 {
  margin: 0 0 8px 0;
  font-size: 2rem;
  color: #F47B20 !important;
  font-weight: bold;
}

.carrusel-texto p {
  margin: 0;
  font-size: 1.15rem;
  color: #FFFFFF !important;
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

/* ========================================
   ARREGLOS ESPECÍFICOS PARA CELULAR
======================================== */

/* Forzar fondo blanco en cards en modo claro */
.main-bg-light .v-container .v-card {
  background: #FFFFFF !important;
}

/* Forzar fondo oscuro en cards en modo oscuro */
.main-bg-dark .v-container .v-card {
  background: #2A2A4E !important;
}

/* Arreglar gradiente en modo oscuro */
.main-bg-dark .card-gradient {
  background: linear-gradient(135deg, #2A2A4E 0%, #3A3A6E 100%) !important;
}

/* Asegurar que los textos se vean bien en modo oscuro */
.main-bg-dark .v-card p,
.main-bg-dark .v-card span,
.main-bg-dark .v-card-text,
.main-bg-dark .v-card-text p {
  color: #E5E5E5 !important;
}

/* Asegurar que los títulos de cards se vean en naranja en modo oscuro */
.main-bg-dark .v-card .v-card-title {
  color: #F47B20 !important;
}
</style>