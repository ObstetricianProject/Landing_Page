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

      <div class="mobile-actions">
        <a href="/login" class="login-btn login-mobile-top" @click="cerrarMenu">
          Iniciar sesión
        </a>

        <button class="menu-btn" @click="toggleMenu" aria-label="Abrir menú">
          ☰
        </button>
      </div>

      <ul class="nav-links" :class="{ open: menuAbierto }">
        <li><a href="#inicio" @click="cerrarMenu">{{ $t('nav-links.inicio') }}</a></li>
        <li><a href="#nosotros" @click="cerrarMenu">{{ $t('nav-links.nosotros') }}</a></li>
        <li><a href="#servicios" @click="cerrarMenu">{{ $t('nav-links.servicios') }}</a></li>
        <li><a href="#atenciones" @click="cerrarMenu">{{ $t('nav-links.atenciones') }}</a></li>
        <li><a href="#contacto" @click="cerrarMenu">{{ $t('nav-links.contacto') }}</a></li>

        <li class="lang-mobile">
          <LanguageSwitcher />
        </li>
      </ul>

      <div class="lang-switcher">
        <LanguageSwitcher />
      </div>

      <a href="/login" class="login-btn login-desktop">
        Iniciar sesión
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #CF1E76;
  font-family: 'Palanquin', sans-serif;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1.5rem;
}

.logo img {
  height: 80px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0 auto;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.login-btn {
  background-color: #7B0038;
  color: white;
  padding: 0.6rem 1.4rem;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
}

.login-btn:hover {
  background-color: #5e002a;
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 34px;
  color: white;
  cursor: pointer;
}

.mobile-actions {
  display: none;
}

.lang-mobile {
  display: none;
}

@media (max-width: 768px) {
  .navbar-content {
    flex-wrap: wrap;
    align-items: center;
  }

  .logo img {
    height: 52px;
  }

  .lang-switcher,
  .login-desktop {
    display: none;
  }

  .mobile-actions {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-left: auto;
  }

  .menu-btn {
    display: block;
  }

  .login-mobile-top {
    font-size: 14px;
    padding: 0.45rem 0.9rem;
    border-radius: 8px;
  }

  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
    margin: 0.8rem 0 0;
    padding: 1rem;
    background-color: #CF1E76;
    border-radius: 14px;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    font-size: 18px;
    padding: 0.6rem 0.8rem;
    border-radius: 10px;
    display: block;
  }

  .lang-mobile {
    display: block;
    margin-top: 0.4rem;
  }
}
</style>
