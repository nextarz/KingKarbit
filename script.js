function toggleMobileMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('active');
    }
    // Animasi saat halaman pertama kali dimuat
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
    });