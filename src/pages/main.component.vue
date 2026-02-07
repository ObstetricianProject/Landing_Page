<script setup>
import embarazada  from '../assets/imgMujer.png'
import consultorio from '../assets/imgMain.jpg'

function irAlLink() {
  window.open(
      'https://api.whatsapp.com/send?phone=51940514005&text=Hola%2C%20deseo%20solicitar%20una%20cita.%20%C2%BFMe%20podr%C3%ADan%20brindar%20informaci%C3%B3n%2C%20por%20favor%3F',
      '_blank'
  )
}
</script>

<template>
  <section id="inicio" class="main-container">
    <div class="info-section">
      <h2>{{ $t('main.title') }}</h2>
      <p>{{ $t('main.subtitle') }}</p>
      <img :src="embarazada" alt="MujerEmbarazada" class="embarazada-img" />
      <button class="btn" @click="irAlLink">{{ $t('main.button') }}</button>
    </div>
    <div class="image-section">
      <img :src="consultorio" alt="Consultorio" class="consultorio-img" />
    </div>
  </section>
</template>

<style scoped>
.main-container {
  font-family: 'Palanquin', sans-serif;
  width: 100%;
  margin: 0;
  position: relative;
  left: auto;
  right: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #CF1E76;
  color: white;
  padding: 2rem 1rem;
  min-height: 100vh;
}

.info-section {
  flex: 1;
  max-width: 50%;
}

.info-section h2 {
  font-size: 48px;
  margin-bottom: 0.5rem;
  margin-left: 23%;
}

.info-section p {
  font-size: 32px;
  margin-bottom: 1rem;
  margin-left: 23%;
}

.embarazada-img {
  width: 160px;
  margin-bottom: 1rem;
  margin-left: 42%;
}

.btn {
  background-color: #7B0038;
  color: white;
  font-size: 24px;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.consultorio-img {
  max-width: 70%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
@media (max-width: 900px) {
  .main-container {
    flex-direction: column;
    padding: 6rem 1rem 2rem; /* deja espacio por el navbar fijo */
    text-align: center;
    gap: 1.5rem;
  }

  .image-section {
    max-width: 100%;
    width: 100%;
  }

  .info-section {
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .info-section h2,
  .info-section p {
    margin-left: 0;
  }

  .embarazada-img {
    margin: 0 auto 1rem;
    width: 130px;
  }

  .btn {
    width: 70%;
    max-width: 260px;
    margin: 0 auto;
    display: block;
  }

  .consultorio-img {
    max-width: 74%;
  }
}

@media (max-width: 600px) {
  .info-section h2 { font-size: 24px; }
  .info-section p { font-size: 16px; }

  .embarazada-img { width: 100px; }

  .btn {
    font-size: 16px;
    padding: 0.8rem 1.2rem;
    width: 80%;
    max-width: 240px;
  }

  .consultorio-img {
    max-width: 92%;
  }
}


</style>
