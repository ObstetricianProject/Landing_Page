<script setup>
import { ref } from 'vue'

const ACCESS_KEY = 'b8a66119-9f41-48d9-ac7a-81a96dab9415'

const nombre = ref('')
const email = ref('')
const telefono = ref('')
const consulta = ref('')

const botcheck = ref(false)

const mensajeExito = ref('')
const mostrarToast = ref(false)
const mensajeError = ref('')
const mostrarError = ref(false)
const loading = ref(false)

const validarFormulario = () => {
  const palabrasNombre = nombre.value.trim().split(/\s+/)
  if (palabrasNombre.length < 2) {
    mostrarError.value = true
    mensajeError.value = 'Por favor, ingresa al menos un nombre y un apellido.'
    return false
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
  if (!emailValido) {
    mostrarError.value = true
    mensajeError.value = 'Ingresa un correo válido.'
    return false
  }

  const telefonoValido = /^\d{9}$/.test(telefono.value)
  if (!telefonoValido) {
    mostrarError.value = true
    mensajeError.value = 'El teléfono debe tener 9 dígitos.'
    return false
  }

  const palabrasConsulta = consulta.value.trim().split(/\s+/)
  if (palabrasConsulta.length < 10) {
    mostrarError.value = true
    mensajeError.value = 'La consulta debe tener al menos 10 palabras.'
    return false
  }

  mostrarError.value = false
  return true
}

const enviarFormulario = async () => {
  if (botcheck.value) return
  if (!validarFormulario()) return

  loading.value = true

  try {
    const payload = {
      access_key: ACCESS_KEY,
      name: nombre.value,
      email: email.value,
      message: consulta.value,
      telefono: telefono.value,
      from_name: 'Consultorio Obstétrico',
      subject: `Nueva consulta de ${nombre.value}`,
      reply_to: email.value
    }

    const resp = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const data = await resp.json()

    if (data.success) {
      mensajeExito.value = `${nombre.value}, tu consulta ha sido enviada.`
      mostrarToast.value = true

      nombre.value = ''
      email.value = ''
      telefono.value = ''
      consulta.value = ''
      botcheck.value = false

      setTimeout(() => (mostrarToast.value = false), 3000)
    } else {
      throw new Error(data.message || 'No se pudo enviar el correo.')
    }
  } catch (err) {
    mostrarError.value = true
    mensajeError.value = `Error al enviar: ${err?.message || err}`
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div
      v-if="mostrarToast"
      class="toast success"
      role="status"
      aria-live="polite"
  >
    {{ mensajeExito }}
  </div>

  <div
      v-if="mostrarError"
      class="toast error"
      role="alert"
      aria-live="assertive"
  >
    {{ mensajeError }}
  </div>

  <section class="contacto-section" id="contacto">
    <h2 class="titulo">{{ $t ? $t('contacto.titulo') : 'Contáctanos' }}</h2>

    <div class="form-container">
      <h3>{{ $t ? $t('contacto.subtitulo') : 'Agenda tu consulta' }}</h3>

      <form @submit.prevent="enviarFormulario" novalidate>
        <div class="form-grid">
          <div class="columna">
            <label for="nombre">{{ $t ? $t('contacto.nombre') : 'Nombres y apellidos' }}</label>
            <input id="nombre" v-model="nombre" type="text" required autocomplete="name" />

            <label for="email">{{ $t ? $t('contacto.email') : 'Correo' }}</label>
            <input id="email" v-model="email" type="email" required autocomplete="email" />

            <label for="telefono">{{ $t ? $t('contacto.telefono') : 'Teléfono' }}</label>
            <input id="telefono" v-model="telefono" type="tel" required inputmode="numeric" maxlength="9" />
          </div>

          <div class="columna">
            <label for="consulta">{{ $t ? $t('contacto.consulta') : 'Cuéntanos tu consulta' }}</label>
            <textarea id="consulta" v-model="consulta" rows="8" required></textarea>
          </div>
        </div>

        <input type="checkbox" v-model="botcheck" style="display:none" tabindex="-1" aria-hidden="true" />

        <div class="boton">
          <button type="submit" :disabled="loading">
            {{ loading ? 'Enviando…' : ($t ? $t('contacto.boton') : 'Enviar') }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  font-size: 1rem;
  animation: fadein 0.3s, fadeout 0.3s 2.7s;
}

.toast.success {
  background-color: #28a745;
  color: white;
}

.toast.error {
  background-color: #dc3545;
  color: white;
}

@keyframes fadein {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeout {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
}

.contacto-section {
  background-color: #cf1e76;
  font-family: 'Palanquin', sans-serif;
  padding: 3rem 1rem;
  color: #fff;
  text-align: center;
  align-items: center;
  min-height: 80vh;
}

.titulo {
  font-size: 64px;
  margin-bottom: 2rem;
  font-weight: bold;
}

.form-container {
  background-color: #ecb2cc;
  border-radius: 16px;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  color: #000;
  width: 100%;
}

.form-container h3 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.form-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.columna {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  min-width: 260px;
}

label {
  font-weight: 500;
  text-align: left;
  font-size: 24px;
}

input,
textarea {
  width: 100%;
  padding: 0.6rem;
  border: none;
  border-radius: 6px;
  background-color: #f2f2f2;
  font-size: 18px;
}

.boton {
  margin-top: 1.5rem;
  text-align: center;
}

button {
  background-color: #66002f;
  color: #fff;
  padding: 0.6rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.2s;
  max-width: 200px;
  width: 100%;
}

button:hover {
  background-color: #4a0123;
}

@media (max-width: 900px) {
  .form-grid {
    flex-direction: column;
  }

  .columna {
    min-width: 100%;
  }

  .titulo {
    font-size: 48px;
  }

  .form-container {
    padding: 2rem;
  }
}

@media (max-width: 600px) {
  .contacto-section {
    padding: 2rem 1rem;
  }

  .titulo {
    font-size: 24px;
  }

  .form-container {
    padding: 1.5rem;
  }

  .form-container h3 {
    font-size: 1.3rem;
  }

  label,
  input,
  textarea,
  button {
    font-size: 1rem;
  }

  button {
    max-width: 100%;
  }
}
</style>
