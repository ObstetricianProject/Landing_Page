<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="copyright">
        {{ $t('footer.copyright') }}
      </p>
      <div class="social-icons">
        <a href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noopener">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/51940514005" target="_blank" aria-label="WhatsApp" rel="noopener">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noopener">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://tiktok.com" target="_blank" aria-label="TikTok" rel="noopener">
          <i class="fab fa-tiktok"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #CF1E76;
  color: #000;
  padding: 1rem 2rem;
  font-family: 'Palanquin', sans-serif;
  font-size: 18px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-icons a {
  color: black;
  font-size: 1.8rem;
  margin-left: 1rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ffffff;
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .social-icons {
    margin-top: 0.5rem;
  }
}
</style>
