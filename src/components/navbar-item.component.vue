<script setup>
import { ref } from 'vue'
import logo from '../assets/imgLogo.png'
import LanguageSwitcher from './language-switcher.component.vue'

const menuAbierto = ref(false)

const toggleMenu = () => {
  menuAbierto.value = !menuAbierto.value
}

const cerrarMenu = () => {
  menuAbierto.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="logo">
        <img :src="logo" alt="DelSalud logo" />
      </div>

      <!-- Botón hamburguesa (solo móvil) -->
      <button class="menu-btn" @click="toggleMenu" aria-label="Abrir menú">
        ☰
      </button>

      <!-- Links (en móvil se ocultan y se muestran al abrir) -->
      <ul class="nav-links" :class="{ open: menuAbierto }">
        <li><a href="#inicio" @click="cerrarMenu">{{ $t('nav-links.inicio') }}</a></li>
        <li><a href="#nosotros" @click="cerrarMenu">{{ $t('nav-links.nosotros') }}</a></li>
        <li><a href="#servicios" @click="cerrarMenu">{{ $t('nav-links.servicios') }}</a></li>
        <li><a href="#atenciones" @click="cerrarMenu">{{ $t('nav-links.atenciones') }}</a></li>
        <li><a href="#contacto" @click="cerrarMenu">{{ $t('nav-links.contacto') }}</a></li>

        <!-- Idioma dentro del menú (solo móvil) -->
        <li class="lang-mobile">
          <LanguageSwitcher />
        </li>
      </ul>

      <!-- Idioma normal (solo desktop) -->
      <div class="lang-switcher">
        <LanguageSwitcher />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #CF1E76;
  font-family: 'Palanquin', sans-serif;
  font-size: 24px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
}

.logo img {
  height: 80px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
  justify-content: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #ffe6f1;
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #ffe6f1;
}

.nav-links a:hover::after {
  width: 100%;
}

.lang-switcher {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 100px;
}

/* Botón hamburguesa (oculto en desktop) */
.menu-btn {
  display: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 34px;
  font-weight: 700;
  cursor: pointer;
}

/* Idioma dentro del menú (solo móvil) */
.lang-mobile {
  display: none;
}

/* ---- MÓVIL ---- */
@media (max-width: 768px) {
  .navbar-content {
    flex-wrap: wrap;
  }

  .logo img {
    height: 56px;
  }

  .menu-btn {
    display: block; /* aparece el ☰ */
  }

  /* Oculta links por defecto en móvil */
  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1rem 0;
  }

  /* Muestra links cuando menuAbierto=true */
  .nav-links.open {
    display: flex;
  }

  /* Oculta el switch de idioma “normal” en móvil */
  .lang-switcher {
    display: none;
  }

  /* Muestra el idioma dentro del menú */
  .lang-mobile {
    display: block;
    padding-top: 0.5rem;
  }

  .nav-links a {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .navbar {
    font-size: 16px;
  }

  .navbar-content {
    padding: 0.5rem 1rem;
  }
}
</style>
