<template>
  <footer id="contacto" class="footer-bg">
    <v-container class="py-8">
      <v-row justify="center" align="center" class="mb-4">
        <v-col cols="12" md="3" class="d-flex flex-column align-center mb-2">
          <div style="width:100%;display:flex;justify-content:center;align-items:center;">
            <img :src="require('@/assets/logo.png')" alt="F5 Consultoría & Marketing" style="height:64px;max-width:180px;object-fit:contain;filter:drop-shadow(0 2px 8px #F47B2044);margin-bottom:8px;" />
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <h2 style="color:#F47B20;font-weight:bold;letter-spacing:1px;margin-bottom:8px;">Contáctenos</h2>
          <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:24px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <v-icon color="#F47B20" size="28">mdi-whatsapp</v-icon>
              <a href="https://wa.me/50377370216" target="_blank" style="color:#2F2E83;font-weight:bold;text-decoration:none;">+503 7737 0216</a>
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              <v-icon color="#2F2E83" size="28">mdi-email</v-icon>
              <a href="mailto:info@f5consultoria.com" style="color:#2F2E83;font-weight:bold;text-decoration:none;">info@f5consultoria.com</a>
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              <v-icon color="#2F2E83" size="28">mdi-map-marker</v-icon>
              <span style="color:#2F2E83;font-weight:bold;">El Congo, Santa Ana, El Salvador</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="3" class="d-flex flex-column align-center">
          <div style="display:flex;gap:12px;justify-content:center;">
            <v-btn icon href="https://www.tiktok.com/@f5consultoria" target="_blank" style="background:#FFFFFF;border-radius:50%;box-shadow:0 2px 8px #E5E5E5;">
              <img src="https://img.icons8.com/color/48/000000/tiktok--v1.png" alt="TikTok" style="height:32px;width:32px;object-fit:contain;vertical-align:middle;" />
            </v-btn>
            <v-btn icon href="https://www.instagram.com/f5consultoria" target="_blank" style="background:#FFFFFF;border-radius:50%;box-shadow:0 2px 8px #E5E5E5;">
              <v-icon size="32" color="#2F2E83">mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon href="https://www.facebook.com/f5consultoria" target="_blank" style="background:#FFFFFF;border-radius:50%;box-shadow:0 2px 8px #E5E5E5;">
              <v-icon size="32" color="#2F2E83">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon href="https://wa.me/50377370216?text=Gracias%20por%20comunicarte%20con%20F5%20Consultoria%20Y%20Marketing.%20%C2%BFC%C3%B3mo%20podemos%20ayudarte%3F" target="_blank" style="background:#F47B20;border-radius:50%;box-shadow:0 2px 8px #F47B2044;">
              <v-icon size="32" color="#FFFFFF">mdi-whatsapp</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="mt-4">
        <v-col cols="12" class="text-center" style="color:#4A4A4A;font-size:1rem;">
          &copy; 2025 <span style="color:#2F2E83;font-weight:bold;">F5 Consultoría & Marketing</span>. Todos los derechos reservados.
        </v-col>
      </v-row>
    </v-container>
  </footer>


</template>

<style scoped>
    .footer-bg {
      background: linear-gradient(90deg, #E5E5E5 0%, #FFFFFF 100%);
      box-shadow: 0 -4px 24px #1A1A1A22;
      border-radius: 24px 24px 0 0;
      border-top: 4px solid #F47B20;
    }
</style>

<script>
export default {
  name: 'ContactoSection',
};
</script>

<style scoped>
/* Estilos personalizados */
</style>
