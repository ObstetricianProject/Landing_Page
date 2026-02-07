<script setup>
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'

const { locale } = useI18n()

const selectedLocale = computed({
  get: () => locale.value,
  set: (val) => { locale.value = val }
})

const languages = ref([
  { label: 'ES', value: 'es' },
  { label: 'EN', value: 'en' }
])
</script>

<template>
  <pv-select-button
      v-model="selectedLocale"
      :options="languages"
      optionLabel="label"
      optionValue="value"
      :multiple="false"
      class="lang-button"
  />
</template>

<style scoped>
.lang-button {
  display: inline-flex;
  background-color: #CF1E76;
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 0 0 2px #CF1E76;
  cursor: pointer;
  font-size: 20px;
}

:deep(.p-button) {
  background-color: #CF1E76 !important;
  color: white !important;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 0 !important;
  text-transform: uppercase;
  border: none;
  transition: all 0.2s ease-in-out;
}

:deep(.p-button.p-highlight) {
  background-color: white !important;
  color: #CF1E76 !important;
  font-weight: 700;
}

:deep(.p-button:not(.p-highlight):hover) {
  background-color: #CF1E76 !important;
  color: white !important;
}

:deep(.p-selectbutton .p-button:not(:last-child)) {
  border-right: 1px solid #CF1E76;
}
</style>
