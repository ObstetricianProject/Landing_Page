import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config'
import SelectButton from 'primevue/selectbutton'

import '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './style.css'


import es from './locales/es.json'
import en from './locales/en.json'

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    messages: { es, en }
})

const app = createApp(App)
app.use(i18n)
app.use(PrimeVue)
app.component('pv-select-button', SelectButton)
app.mount('#app')
