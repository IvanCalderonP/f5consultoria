<template>
  <section id="servicios">
    <v-container>
      <h1
        class="mb-8 font-weight-bold"
        style="
          color: #2f2e83;
          letter-spacing: 3px;
          text-shadow: 0 2px 12px #f47b2044;
        "
      >
        Servicios y Productos
      </h1>

      <v-row>
        <v-col cols="12" md="6">
          <v-card
            class="servicio-card"
            elevation="10"
            rounded="xl"
            style="background: #ffffff; box-shadow: 0 4px 16px #e5e5e5"
          >
            <v-card-title
              class="font-weight-bold d-flex align-center"
              style="color: #1a1a1a"
            >
              <v-icon color="#F47B20" class="mr-2">mdi-tshirt-crew</v-icon>
              Camisas Estampadas
            </v-card-title>
            <v-card-text style="color: #4a4a4a">
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
          <v-card
            class="servicio-card"
            elevation="10"
            rounded="xl"
            style="background: #ffffff; box-shadow: 0 4px 16px #e5e5e5"
          >
            <v-card-title
              class="font-weight-bold d-flex align-center"
              style="color: #1a1a1a"
            >
              <v-icon color="#2F2E83" class="mr-2"
                >mdi-tshirt-crew-outline</v-icon
              >
              Camisas Sublimadas
            </v-card-title>
            <v-card-text style="color: #4a4a4a">
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
          <v-card
            class="servicio-card"
            elevation="10"
            rounded="xl"
            style="background: #ffffff; box-shadow: 0 4px 16px #e5e5e5"
          >
            <v-card-title
              class="font-weight-bold d-flex align-center"
              style="color: #1a1a1a"
            >
              <v-icon color="#F47B20" class="mr-2">mdi-hat-fedora</v-icon>
              Gorras Personalizadas
            </v-card-title>
            <v-card-text style="color: #4a4a4a">
              <p>Gorras con tu logo, frase o diseño favorito.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in gorrasImgs" :key="img">
                  <v-img
                    :src="img"
                    alt="Gorra personalizada"
                    class="rounded-lg"
                  />
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
                  <v-img
                    :src="img"
                    alt="Termo personalizado"
                    class="rounded-lg"
                  />
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
                  <v-img
                    :src="img"
                    alt="Lapicero personalizado"
                    class="rounded-lg"
                  />
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
                  <v-img
                    :src="img"
                    alt="Rompecabezas personalizado"
                    class="rounded-lg"
                  />
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
                  <v-img
                    :src="img"
                    alt="Llavero personalizado"
                    class="rounded-lg"
                  />
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

      <!-- Secciones adicionales para las carpetas faltantes -->
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="servicio-card" elevation="10" rounded="xl">
            <v-card-title class="font-weight-bold d-flex align-center">
              <v-icon color="#2F2E83" class="mr-2">mdi-printer</v-icon>
              Impresión Laser
            </v-card-title>
            <v-card-text>
              <p>Impresión láser para papelería y material corporativo.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in impresionLaserImgs" :key="img">
                  <v-img :src="img" alt="Impresión Laser" class="rounded-lg" />
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="servicio-card" elevation="10" rounded="xl">
            <v-card-title class="font-weight-bold d-flex align-center">
              <v-icon color="#F47B20" class="mr-2"
                >mdi-television-classic</v-icon
              >
              Display Publicitarios
            </v-card-title>
            <v-card-text>
              <p>
                Displays y soportes publicitarios para eventos y puntos de
                venta.
              </p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in displayImgs" :key="img">
                  <v-img
                    :src="img"
                    alt="Display Publicitario"
                    class="rounded-lg"
                  />
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
              <v-icon color="#1697F6" class="mr-2">mdi-tshirt-crew</v-icon>
              Sublimación
            </v-card-title>
            <v-card-text>
              <p>Productos sublimados: tazas, termos, vasos y más.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in sublimacionImgs" :key="img">
                  <v-img :src="img" alt="Sublimación" class="rounded-lg" />
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="servicio-card" elevation="10" rounded="xl">
            <v-card-title class="font-weight-bold d-flex align-center">
              <v-icon color="#F47B20" class="mr-2"
                >mdi-tshirt-crew-outline</v-icon
              >
              DTF y Textiles
            </v-card-title>
            <v-card-text>
              <p>
                Impresión DTF y textiles: delantales, fundas, camisetas y
                bordados.
              </p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in dtfImgs" :key="img">
                  <v-img :src="img" alt="DTF y Textiles" class="rounded-lg" />
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
              <v-icon color="#25D366" class="mr-2"
                >mdi-card-account-details</v-icon
              >
              Sellos y Carnetización
            </v-card-title>
            <v-card-text>
              <p>Servicios de carnetización, lanyards y kits empresariales.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in sellosImgs" :key="img">
                  <v-img :src="img" alt="Sellos y Carnets" class="rounded-lg" />
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="servicio-card" elevation="10" rounded="xl">
            <v-card-title class="font-weight-bold d-flex align-center">
              <v-icon color="#1697F6" class="mr-2">mdi-forklift</v-icon>
              Estructuras Metálicas
            </v-card-title>
            <v-card-text>
              <p>Estructuras y soportes metálicos para publicidad y montaje.</p>
              <v-carousel hide-delimiter-background height="200">
                <v-carousel-item v-for="img in estructurasImgs" :key="img">
                  <v-img
                    :src="img"
                    alt="Estructuras Metálicas"
                    class="rounded-lg"
                  />
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
  name: "ProductosSection",
  data() {
    return {
      estampadasImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/40- Camiseta Estampada.png"),
      ],
      sublimadasImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/39- Camiseta Sublimada.png"),
      ],
      gorrasImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/37- Gorra Sublimada.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/38- Gorra Estampada.png"),
      ],
      termosImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/26- Lata Térmica.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/28- Botellas.png"),
      ],
      lapicerosImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/33- Lapiceros.png"),
      ],
      rompecabezasImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/31- Rompecabezas.png"),
      ],
      llaverosImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/32- Llaveros.png"),
      ],
      bannersImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/2- Gran Formato/10- Impresión Lona Banner.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/2- Gran Formato/11- Vinil Traslúcido Blanco.png"),
      ],
      fundascojinImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/36- Funda de Cojín.png"),
      ],
      impresionLaserImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/1- Impresión Laser/1- Brochures y Trípticos.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/1- Impresión Laser/2- Calendario F. Tabloide.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/1- Impresión Laser/3- Calendario Santoral.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/1- Impresión Laser/4- Afiche Folcote – Calibre 12.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/1- Impresión Laser/5- Folder Tamaño Carta.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/1- Impresión Laser/6- Papel Adhesivo.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/1- Impresión Laser/7- Tarjetas de presentación.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/1- Impresión Laser/8- IDiplomas.png"),
      ],
      displayImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/3- Display Publicitarios/18- Backing Banner.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/3- Display Publicitarios/19- Banner Araña.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/3- Display Publicitarios/20- Mesa Exhibidora.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/3- Display Publicitarios/21- Roll Up Banner.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/3- Display Publicitarios/22- Exhibidores de Coroplas.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/3- Display Publicitarios/23- Exhibidores en Acrílico y PVC.png"),
      ],
      sublimacionImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/24- Taza Blanca.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/25- Taza Mágica Negra.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/27- Vaso doble nivel.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/29- Pachón Deportivo.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/30- Pachón con Botón.png"),
      ],
      dtfImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/34- Impresión DTF.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/41-  Bordados de camisas Corporativas.png"),
      ],
      sellosImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/6- Sellos Y carnetización/42-  Carnet Laminado.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/6- Sellos Y carnetización/43- Kit Empresarial 1 (Gafete, Lanyard y Carnet).png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/6- Sellos Y carnetización/44- Liston porta gafete (Lanyard).png"),
      ],
      estructurasImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/7- Estructuras Metalicas/45 - Burrito Metálico estático.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/7- Estructuras Metalicas/46- Burrito Plegable de Metal.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/7- Estructuras Metalicas/47- Paleta Publicitaria de Metal.png"),
      ],
    };
  },
};
</script>

<style scoped>
.servicio-card {
  background: linear-gradient(120deg, #f5f7fa 0%, #e3f0ff 100%);
  box-shadow: 0 6px 24px #1697f633;
  margin-bottom: 32px;
  border-radius: 24px;
  transition: box-shadow 0.2s, transform 0.2s;
}
.servicio-card:hover {
  box-shadow: 0 12px 32px #1697f6cc;
  transform: scale(1.03);
}
.v-card-title {
  font-size: 1.4rem;
  letter-spacing: 1.5px;
}
.v-card-text p {
  font-size: 1.05rem;
  color: #333;
  margin-bottom: 16px;
  line-height: 1.6;
}
.v-img.rounded-lg {
  border-radius: 16px;
}
</style>
