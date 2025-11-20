<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="12" class="pa-8 card-gradient" rounded="xl">
          <contacto-section />
        </v-card>
    </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.card-gradient {
  background: linear-gradient(135deg, #FF9800 0%, #FFD180 100%);
  color: #222;
  box-shadow: 0 8px 32px #FF980088;
}
</style>
<script>
import ContactoSection from '../components/ContactoSection.vue';
export default {
  components: { ContactoSection }
};
</script>
