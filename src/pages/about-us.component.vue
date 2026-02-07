<script setup>
import perfil from "../assets/imgPerfil.jpg";
</script>

<template>
  <section id="nosotros" class="about-us">
    <div class="container">
      <h1 class="title">{{ $t('us.title') }}</h1>

      <div class="content">
        <div class="left">
          <img :src="perfil" alt="perfil" class="profile-img" />
          <div class="info">
            <p><strong>{{ $t('us.paragraph1') }}</strong></p>
            <p v-html="$t('us.paragraph2')"></p>
          </div>
        </div>

        <div class="right">
          <p class="quote">{{ $t('us1.subtitle1') }}</p>
          <p>{{ $t('us1.paragraph') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  width: 100%;
  background-color: white;
  padding: 8rem 0 11rem;
  font-family: 'Palanquin', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.info {
  font-size: 24px;
  line-height: 1.6;
  text-align: left;
  max-width: 540px;
  margin: 0 auto;
}


.container {
  width: 100%;
  max-width: 1440px;
  padding: 0 2rem;
}

.title {
  text-align: center;
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 3rem;
}

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
}

.left {
  flex: 1;
  min-width: 300px;
  text-align: center;
}

.profile-img {
  width: 220px;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.info {
  font-size: 24px;
  line-height: 1.6;
  text-align: left;
  max-width: 540px;
  margin: 0 auto;
}

.right {
  flex: 1;
  min-width: 300px;
  font-size: 24px;
  line-height: 1.8;
  text-align: justify;
}

.quote {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 1rem;
  font-style: italic;
}

/* Tablet */
@media (max-width: 900px) {
  .about-us {
    padding: 7rem 0 9rem;
  }

  .title {
    font-size: 48px;
  }

  .content {
    flex-direction: column;
    align-items: center;
  }

  .left, .right {
    max-width: 100%;
  }

  /* 🔥 CAMBIO CLAVE */
  .info, .right {
    font-size: 20px;
    text-align: left;
  }

  .quote {
    font-size: 28px;
    text-align: left;
  }
}

/* Celular */
@media (max-width: 600px) {
  .info, .right {
    font-size: 18px;
    line-height: 1.5;
    padding: 0 1rem;
    text-align: left;
  }
  .title {
    font-size: 24px;
  }
  .quote {
    font-size: 24px;
    text-align: left;
  }
}

</style>
