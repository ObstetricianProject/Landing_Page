<script setup>
import direccion from "../assets/imgDirección.png"
import servicios from "../assets/imgServicio.png"
import whatsapp from "../assets/imgWhatsapp.png"
</script>

<template>
  <section id="atenciones" class="atenciones-section">
    <div class="contenedor-blanco">
      <h2 class="titulo">{{ $t('atenciones.titulo') }}</h2>

      <div class="grid-atenciones">

        <div class="item">
          <img :src="servicios" alt="Servicios y Modalidades" />
          <h3>{{ $t('atenciones.serviciosTitulo') }}</h3>
          <ul>
            <li>{{ $t('atenciones.servicios') }}</li>
          </ul>
        </div>

        <div class="item">
          <img :src="direccion" alt="Dirección" />
          <h3>{{ $t('atenciones.direccionTitulo') }}</h3>
          <ul>
            <li>{{ $t('atenciones.direccion') }}</li>
          </ul>
        </div>

        <div class="item">
          <img :src="whatsapp" alt="WhatsApp" />
          <h3>{{ $t('atenciones.whatsappTitulo') }}</h3>
          <ul>
            <li>{{ $t('atenciones.whatsapp') }}</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.atenciones-section {
  width: 100vw;
  background-color: white;
  padding: 8rem 0 11rem;
  font-family: 'Palanquin', sans-serif;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
}

.contenedor-blanco {
  width: 100%;
  max-width: 1440px;
  padding: 0 2rem;
}

.titulo {
  text-align: center;
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #111;
}

.grid-atenciones {
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  flex-wrap: wrap;
}

.item {
  min-width: 320px;
  max-width: 360px;
  text-align: center;
}

.item img {
  width: 110px;
  height: 110px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.item h3 {
  font-size: 32px;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #111;
}

.item ul {
  list-style: disc;
  padding-left: 1.2rem;
  text-align: left;
  font-size: 24px;
  color: #222;
}

@media (max-width: 900px) {
  .titulo {
    font-size: 48px;
  }

  .item h3 {
    font-size: 28px;
  }

  .item ul {
    font-size: 20px;
  }

  .grid-atenciones {
    justify-content: center;
    gap: 2rem;
  }
}

@media (max-width: 600px) {
  .titulo {
    font-size: 24px;
  }

  .item {
    min-width: 280px;
    max-width: 100%;
  }

  .item img {
    width: 90px;
    height: 90px;
  }

  .item h3 {
    font-size: 24px;
  }

  .item ul {
    font-size: 18px;
  }
}
</style>
