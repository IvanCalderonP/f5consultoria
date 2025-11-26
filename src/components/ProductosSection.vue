<template>
  <section id="servicios">
    <v-container>
      <h1
        class="mb-8 font-weight-bold"
        style="
          color: #ffffff;
          letter-spacing: 3px;
          text-shadow: 0 2px 12px #00000044;
        "
      >
        Servicios y Productos
      </h1>
      <h2 class="mb-4 mt-8" style="color: #ffffff; letter-spacing: 2px">
        Impresión Laser
      </h2>
      <v-row>
        <v-col cols="12">
          <p style="color: rgba(255, 255, 255, 0.85); margin-top: 0">
            <strong>Incluye:</strong> {{ impresionLaserTitles.join(", ") }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(img, idx) in impresionLaserImgs"
          :key="'imp-item-' + idx"
        >
          <v-card
            class="servicio-card"
            elevation="8"
            rounded="lg"
            @click="
              openDialog(
                img,
                impresionLaserTitles[idx],
                'Descripción breve del producto o servicio.'
              )
            "
          >
            <v-row class="align-center pa-3">
              <v-col cols="4">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      :src="img"
                      height="110"
                      contain
                      class="rounded-lg"
                    />
                  </template>
                  <span>{{ impresionLaserTitles[idx] }}</span>
                </v-tooltip>
              </v-col>
              <v-col cols="8">
                <div class="subtitle-1" style="font-weight: 700">
                  {{ impresionLaserTitles[idx] }}
                </div>
                <div style="font-size: 1rem; color: rgba(255, 255, 255, 0.85)">
                  Descripción breve del producto o servicio.
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <h2 class="mb-4 mt-8" style="color: #ffffff; letter-spacing: 2px">
        Display Publicitarios
      </h2>
      <v-row>
        <v-col cols="12">
          <p style="color: rgba(255, 255, 255, 0.85); margin-top: 0">
            <strong>Incluye:</strong> {{ displayTitles.join(", ") }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(img, idx) in displayImgs"
          :key="'disp-' + idx"
        >
          <v-card
            class="servicio-card"
            elevation="8"
            rounded="lg"
            @click="
              openDialog(
                img,
                displayTitles[idx],
                'Soportes y displays personalizados para puntos de venta y eventos.'
              )
            "
          >
            <v-row class="align-center pa-3">
              <v-col cols="4">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      :src="img"
                      height="110"
                      contain
                      class="rounded-lg"
                    />
                  </template>
                  <span>{{ displayTitles[idx] }}</span>
                </v-tooltip>
              </v-col>
              <v-col cols="8">
                <div class="subtitle-1" style="font-weight: 700">
                  {{ displayTitles[idx] }}
                </div>
                <div style="font-size: 1rem; color: rgba(255, 255, 255, 0.85)">
                  Soportes y displays personalizados para puntos de venta y
                  eventos.
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Categoría: Sublimados -->
      <h2 class="mb-4 mt-8" style="color: #ffffff; letter-spacing: 2px">
        Sublimados
      </h2>
      <v-row>
        <v-col cols="12">
          <p style="color: rgba(255, 255, 255, 0.85); margin-top: 0">
            <strong>Incluye:</strong> {{ sublimacionGalleryTitles.join(", ") }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(img, idx) in sublimacionGalleryImgs"
          :key="'sub-card-' + idx"
        >
          <v-card
            class="servicio-card"
            elevation="8"
            rounded="lg"
            @click="
              openDialog(
                img,
                sublimacionGalleryTitles[idx],
                'Productos personalizados por sublimación.'
              )
            "
          >
            <v-row class="align-center pa-3">
              <v-col cols="4">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      :src="img"
                      height="110"
                      contain
                      class="rounded-lg"
                    />
                  </template>
                  <span>{{ sublimacionGalleryTitles[idx] }}</span>
                </v-tooltip>
              </v-col>
              <v-col cols="8">
                <div class="subtitle-1" style="font-weight: 700">
                  {{ sublimacionGalleryTitles[idx] }}
                </div>
                <div style="font-size: 1rem; color: rgba(255, 255, 255, 0.85)">
                  Productos personalizados por sublimación.
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Gran Formato / Banners -->
      <h2 class="mb-4 mt-8" style="color: #ffffff; letter-spacing: 2px">
        Gran Formato
      </h2>

      <v-row>
        <v-col cols="12">
          <p style="color: rgba(255, 255, 255, 0.85); margin-top: 0">
            <strong>Incluye:</strong> {{ bannersTitles.join(", ") }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(img, idx) in bannersImgs"
          :key="'banner-' + idx"
        >
          <v-card
            class="servicio-card"
            elevation="8"
            rounded="lg"
            @click="
              openDialog(
                img,
                bannersTitles[idx],
                'Impresión gran formato y aplicaciones.'
              )
            "
          >
            <v-row class="align-center pa-3">
              <v-col cols="4">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      :src="img"
                      height="110"
                      contain
                      class="rounded-lg"
                    />
                  </template>
                  <span>{{ bannersTitles[idx] }}</span>
                </v-tooltip>
              </v-col>
              <v-col cols="8">
                <div class="subtitle-1" style="font-weight: 700">
                  {{ bannersTitles[idx] }}
                </div>
                <div style="font-size: 1rem; color: rgba(255, 255, 255, 0.85)">
                  Impresión gran formato y aplicaciones.
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Sección: DTF y Textiles -->
      <h2 class="mb-4 mt-8" style="color: #ffffff; letter-spacing: 2px">
        DTF y Textiles
      </h2>
      <v-row>
        <v-col cols="12">
          <p style="color: rgba(255, 255, 255, 0.85); margin-top: 0">
            <strong>Incluye:</strong> {{ dtfSectionTitles.join(", ") }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(img, idx) in dtfSectionImgs"
          :key="'dtf-' + idx"
        >
          <v-card
            class="servicio-card"
            elevation="8"
            rounded="lg"
            @click="
              openDialog(
                img,
                dtfSectionTitles[idx],
                'Textiles, estampados y bordados personalizados.'
              )
            "
          >
            <v-row class="align-center pa-3">
              <v-col cols="4">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      :src="img"
                      height="110"
                      contain
                      class="rounded-lg"
                    />
                  </template>
                  <span>{{ dtfSectionTitles[idx] }}</span>
                </v-tooltip>
              </v-col>
              <v-col cols="8">
                <div class="subtitle-1" style="font-weight: 700">
                  {{ dtfSectionTitles[idx] }}
                </div>
                <div style="font-size: 1rem; color: rgba(255, 255, 255, 0.85)">
                  Textiles, estampados y bordados personalizados.
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Sección: Sellos y Carnetización -->
      <h2 class="mb-4 mt-8" style="color: #ffffff; letter-spacing: 2px">
        Sellos y Carnetización
      </h2>
      <v-row>
        <v-col cols="12">
          <p style="color: rgba(255, 255, 255, 0.85); margin-top: 0">
            <strong>Incluye:</strong> {{ sellosTitles.join(", ") }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(img, idx) in sellosImgs"
          :key="'sell-' + idx"
        >
          <v-card
            class="servicio-card"
            elevation="8"
            rounded="lg"
            @click="
              openDialog(
                img,
                sellosTitles[idx],
                'Carnets, lanyards y sellos personalizados.'
              )
            "
          >
            <v-row class="align-center pa-3">
              <v-col cols="4">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      :src="img"
                      height="110"
                      contain
                      class="rounded-lg"
                    />
                  </template>
                  <span>{{ sellosTitles[idx] }}</span>
                </v-tooltip>
              </v-col>
              <v-col cols="8">
                <div class="subtitle-1" style="font-weight: 700">
                  {{ sellosTitles[idx] }}
                </div>
                <div style="font-size: 1rem; color: rgba(255, 255, 255, 0.85)">
                  Carnets, lanyards y sellos personalizados.
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Sección: Estructuras Metálicas -->
      <h2 class="mb-4 mt-8" style="color: #ffffff; letter-spacing: 2px">
        Estructuras Metálicas
      </h2>
      <v-row>
        <v-col cols="12">
          <p style="color: rgba(255, 255, 255, 0.85); margin-top: 0">
            <strong>Incluye:</strong> {{ estructurasTitles.join(", ") }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(img, idx) in estructurasImgs"
          :key="'estr-' + idx"
        >
          <v-card
            class="servicio-card"
            elevation="8"
            rounded="lg"
            @click="
              openDialog(
                img,
                estructurasTitles[idx],
                'Estructuras y soportes metálicos para publicidad y montaje.'
              )
            "
          >
            <v-row class="align-center pa-3">
              <v-col cols="4">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      :src="img"
                      height="110"
                      contain
                      class="rounded-lg"
                    />
                  </template>
                  <span>{{ estructurasTitles[idx] }}</span>
                </v-tooltip>
              </v-col>
              <v-col cols="8">
                <div class="subtitle-1" style="font-weight: 700">
                  {{ estructurasTitles[idx] }}
                </div>
                <div style="font-size: 1rem; color: rgba(255, 255, 255, 0.85)">
                  Estructuras y soportes metálicos para publicidad y montaje.
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Dialog para vista ampliada -->
    <v-dialog v-model="dialog" max-width="720">
      <v-card>
        <v-img :src="dialogItem.img" height="360" cover />
        <v-card-title class="font-weight-bold">{{
          dialogItem.title
        }}</v-card-title>
        <v-card-text style="color: #444">{{ dialogItem.desc }}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text color="#2f2e83" @click="closeDialog">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
export default {
  name: "ProductosSection",
  data() {
    return {
      dialog: false,
      dialogItem: { img: "", title: "", desc: "" },
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
        require("@/assets/FOTOGRAFIA - PAGINA F5/2- Gran Formato/9- Dummies.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/2- Gran Formato/10- Impresión Lona Banner.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/2- Gran Formato/11- Vinil Traslúcido Blanco.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/2- Gran Formato/12- Vinil adhesivo.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/2- Gran Formato/13- Stickers troquelado.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/2- Gran Formato/14- Vinil en trovicel.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/2- Gran Formato/15- Señalética de Seguridad Industrial.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/2- Gran Formato/16- Vinil de color troquelado.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/2- Gran Formato/17- Vinil sobre Acrílico.png"),
      ],
      bannersTitles: [
        "Dummies (forma de PVC)",
        "Impresión Lona Banner",
        "Vinil Traslúcido Blanco (impresión)",
        "Vinil Adhesivo (brillante/mate)",
        "Stickers troquelado",
        "Vinil en trovicel (PVC)",
        "Señalética de Seguridad Industrial (PVC)",
        "Vinil de color troquelado",
        "Vinil sobre Acrílico",
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
      impresionLaserTitles: [
        "Brochures y Trípticos",
        "Calendario F. Tabloide",
        "Calendario Santoral",
        "Afiche Folcote - Calibre 12",
        "Folder Tamaño Carta",
        "Papel Adhesivo",
        "Tarjetas de presentación",
        "Diplomas / ID",
      ],
      displayImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/3- Display Publicitarios/18- Backing Banner.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/3- Display Publicitarios/19- Banner Araña.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/3- Display Publicitarios/20- Mesa Exhibidora.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/3- Display Publicitarios/21- Roll Up Banner.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/3- Display Publicitarios/22- Exhibidores de Coroplas.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/3- Display Publicitarios/23- Exhibidores en Acrílico y PVC.png"),
      ],
      displayTitles: [
        "Backing Banner",
        "Banner Araña",
        "Mesa Exhibidora",
        "Roll Up Banner",
        "Exhibidores de Coroplas",
        "Exhibidores en Acrílico y PVC (personalizados)",
      ],
      sublimacionImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/24- Taza Blanca.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/25- Taza Mágica Negra.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/27- Vaso doble nivel.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/29- Pachón Deportivo.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/30- Pachón con Botón.png"),
      ],
      sublimacionGalleryImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/24- Taza Blanca.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/25- Taza Mágica Negra.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/26- Lata Térmica.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/27- Vaso doble nivel.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/28- Botellas.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/29- Pachón Deportivo.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/30- Pachón con Botón.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/31- Rompecabezas.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/32- Llaveros.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/4- Sublimación/33- Lapiceros.png"),
      ],
      sublimacionGalleryTitles: [
        "Taza Blanca - Normal / Grande (11 oz - 15 oz)",
        "Taza Mágica Negra (11 oz) - brillo / sin brillo",
        "Lata Térmica (tapadera gris)",
        "Vaso doble nivel 20 oz",
        "Botellas personalizadas",
        "Pachón Deportivo (Aluminio)",
        "Pachón con Botón",
        "Rompecabezas (252 pz / A4 / 38x52cm - 500 pz / corazón 20x20cm)",
        "Llaveros personalizados",
        "Lapiceros personalizados",
      ],
      dtfImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/34- Impresión DTF.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/41-  Bordados de camisas Corporativas.png"),
      ],
      delantalImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/35- Delantal Poliester.png"),
      ],
      dtfSectionImgs: [
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/34- Impresión DTF.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/35- Delantal Poliester.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/36- Funda de Cojín.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/37- Gorra Sublimada.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/38- Gorra Estampada.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/39- Camiseta Sublimada.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/40- Camiseta Estampada.png"),
        require("@/assets/FOTOGRAFIA - PAGINA F5/5- DTF y Textiles/41-  Bordados de camisas Corporativas.png"),
      ],
      dtfSectionTitles: [
        "Impresión DTF metro lineal 1x0.58",
        "Delantal Polyester",
        "Funda de Cojín",
        "Gorra Sublimada",
        "Gorra Estampada",
        "Camiseta Sublimada",
        "Camiseta Estampada",
        "Bordados de camisas Corporativas",
      ],
      sellosTitles: [
        "Carnet Laminado",
        "Kit Empresarial 1 (Gafete, Lanyard y Carnet)",
        "Liston porta gafete (Lanyard)",
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
      estructurasTitles: [
        "Burrito Metálico estático",
        "Burrito Plegable de Metal",
        "Paleta Publicitaria de Metal",
      ],
    };
  },
  methods: {
    openDialog(img, title, desc) {
      this.dialogItem = { img, title, desc };
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.dialogItem = { img: "", title: "", desc: "" };
    },
  },
};
</script>

<style scoped>
.servicio-card {
  background: linear-gradient(120deg, #2b2546 0%, #352a5a 100%);
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.45);
  margin-bottom: 32px;
  border-radius: 24px;
  transition: box-shadow 0.2s, transform 0.2s;
  color: #ffffff;
}
.servicio-card:hover {
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.55);
  transform: scale(1.03);
}
.servicio-card .subtitle-1 {
  font-size: 1.15rem;
  letter-spacing: 0.3px;
  color: #ff8800;
  font-weight: 700;
}
.servicio-card .descripcion {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.88);
}
.v-img.rounded-lg {
  border-radius: 16px;
}
/* For slightly larger thumbnails inside cards */
.servicio-card .v-image,
.servicio-card .v-img {
  height: 110px !important;
}

/* Force section headers to the previous light color */
h1#servicios-title,
h1,
h2 {
  color: #ffffff !important;
}

.v-card-title {
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  color: #222;
}

/* Dialog text color */
.v-card-text {
  color: #444;
}
</style>
