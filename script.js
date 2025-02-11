// Contoh: Tambahkan animasi fade-in apabila halaman dimuatkan
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.feature, .testimonial');
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 200); // Delay setiap elemen
  });
});