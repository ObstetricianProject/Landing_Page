<script setup>
import controlesPrenatales from "../assets/imgControlesPrenatales.jpg"
import psicoprofilaxisObstetrica from "../assets/imgPsicoprofilaxisObstetrica.jpg"
import pruebasEmbarazo from "../assets/imgPruebasEmbarazo.jpg"
import tamizajes from "../assets/imgTamizajes.jpg"
import tomaPapanicolau from "../assets/imgTomaPapanicolaou.jpg"
import examenMama from "../assets/imgExamenMamas.jpg"
import planificacionFamiliar from "../assets/imgPlanificacionFamiliar.jpg"
import consejeriaSaludSexual from "../assets/imgConsejeriaSaludSexual.jpg"


const servicios = [
  { img: controlesPrenatales },
  { img: psicoprofilaxisObstetrica },
  { img: pruebasEmbarazo },
  { img: tamizajes },
  { img: tomaPapanicolau },
  { img: examenMama },
  { img: planificacionFamiliar },
  { img: consejeriaSaludSexual },
]
</script>

<template>
  <section id="servicios" class="servicios-section">
    <h2 class="titulo">{{ $t('services.title') }}</h2>
    <div class="grid-servicios">
      <div
          v-for="(servicio, index) in servicios"
          :key="index"
          class="card-servicio"
      >
        <img :src="servicio.img" alt="servicio" />
        <p>{{ $t(`services.items[${index}]`) }}</p>
      </div>
    </div>
  </section>
</template>


<style scoped>
.servicios-section {
  font-family: 'Palanquin', sans-serif;
  background-color: #cf1e76;
  padding: 3rem 1rem;
  text-align: center;
  color: white;
  min-height: 100vh;
  align-items: center;
}

.titulo {
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 2rem;
}

.grid-servicios {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.card-servicio {
  background-color: white;
  color: black;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 320px;
  text-align: center;
  transition: transform 0.3s ease;
}

.card-servicio:hover {
  transform: translateY(-5px);
}

.card-servicio img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 0.8rem;
}

.card-servicio p {
  font-size: 24px;
  font-weight: 500;
}
@media (max-width: 900px) {
  .grid-servicios {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .titulo {
    font-size: 48px;
  }

  .card-servicio p {
    font-size: 20px;
  }
}

@media (max-width: 600px) {
  .grid-servicios {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .titulo {
    font-size: 24px;
  }

  .card-servicio img {
    height: 100px;
  }

  .card-servicio p {
    font-size: 18px;
  }
}

</style>
