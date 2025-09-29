// fungsi scroll ke section dengan offset tinggi navbar
function scrollToSection(section) {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const sectionTop = section.offsetTop - navbarHeight;
  window.scrollTo({ top: sectionTop, behavior: 'smooth' });
}

// Ambil elemen menu dan section
const menuBeranda = document.getElementById('menu-beranda');
const menuSatwa = document.getElementById('menu-satwa');
const menuFasilitas = document.getElementById('menu-fasilitas');
const sectionBeranda = document.getElementById('beranda');
const sectionSatwa = document.getElementById('satwa');
const sectionFasilitas = document.getElementById('fasilitas');

// Event listener menu
menuBeranda.addEventListener('click', () => scrollToSection(sectionBeranda));
menuSatwa.addEventListener('click', () => scrollToSection(sectionSatwa));
menuFasilitas.addEventListener('click', () => scrollToSection(sectionFasilitas));

// Tombol “Ke Ketentuan”
const btnKetentuan = document.getElementById('btn-ketentuan');
const sectionKetentuan = document.getElementById('ketentuan');
btnKetentuan.addEventListener('click', () => scrollToSection(sectionKetentuan));

// Interaksi tombol satwa
const satwaButtons = document.querySelectorAll('.satwa-btn');
satwaButtons.forEach(button => {
  button.addEventListener('click', () => {
    const namaSatwa = button.textContent.trim();
    let infoBox = document.getElementById('infoSatwa');
    if (!infoBox) {
      infoBox = document.createElement('p');
      infoBox.id = 'infoSatwa';
      infoBox.style.fontWeight = 'bold';
      const satwaSection = document.getElementById('satwa');
      satwaSection.insertBefore(infoBox, satwaSection.querySelector('.list-satwa'));
    }
    infoBox.textContent = `Kamu memilih satwa: ${namaSatwa}`;
  });
});
