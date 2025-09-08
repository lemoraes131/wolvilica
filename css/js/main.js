// main.js - interatividade básica: menu, carrossel, submissão de formulário
document.addEventListener('DOMContentLoaded', ()=>{
  // Atualiza anos no footer
  const y = new Date().getFullYear();
  const el = document.getElementById('year'); if(el) el.innerText = y;

  // Menu mobile toggle
  const btn = document.getElementById('menuToggle');
  if(btn){
    btn.addEventListener('click', ()=>{
      const nav = document.querySelector('.main-nav');
      if(!nav) return;
      nav.style.display = (nav.style.display==='flex')? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '0.6rem';
      nav.style.background = 'transparent';
      nav.style.position = 'absolute';
      nav.style.right = '1rem';
      nav.style.top = '64px';
      nav.style.padding = '1rem';
      nav.style.borderRadius = '10px';
    });
  }

  // Simple carousel
  const track = document.querySelector('.carousel-track');
  if(track){
    const prev = document.querySelector('.carousel-btn.prev');
    const next = document.querySelector('.carousel-btn.next');
    let index = 0;
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width + 12; // gap consider

    function moveTo(i){
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(${-index * slideWidth}px)`;
    }
    prev && prev.addEventListener('click', ()=> moveTo(index-1));
    next && next.addEventListener('click', ()=> moveTo(index+1));

    // Autoplay
    let autoplay = setInterval(()=> moveTo(index+1), 4000);
    track.addEventListener('mouseenter', ()=> clearInterval(autoplay));
    track.addEventListener('mouseleave', ()=> autoplay = setInterval(()=> moveTo(index+1), 4000));
  }

});

// Contact form mock submit (client-side only)
function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name||!email||!message) return alert('Preencha todos os campos.');
  alert('Obrigado, '+name+"! Sua mensagem foi recebida (exemplo). Para envio real, conecte um serviço de formulário).")
  e.target.reset();
  return false;
}

Em seg., 8 de set. de 2025, 10:30 AM, LETÍCIA MORAES <leticiafrancine13062007@gmail.com> escreveu:
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Sobre — Cachorros Fofos</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <div class="container nav-row">
      <a class="logo" href="index.html">🐶 Cachorros Fofos</a>
      <nav class="main-nav">
        <a href="index.html">Home</a>
        <a href="about.html">Sobre</a>
        <a href="curiosidades.html">Curiosidades</a>
        <a href="contato.html">Contato</a>
      </nav>
    </div>
  </header>

  <main class="container page-content">
    <h1>Sobre este site</h1>
    <p>Este site nasceu para reunir imagens e pequenas curiosidades que celebrem a fofura dos cães. Ideal para amantes de pets que querem sorrir e aprender algo novo.</p>

    <section>
      <h2>Propósito</h2>
      <ul>
        <li>Divertir e inspirar quem visita.</li>
        <li>Indicar imagens livres de direitos autorais para uso pessoal.</li>
        <li>Informar com curiosidades curtas e verificadas.</li>
      </ul>
    </section>

  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© <span id="year2"></span> Cachorros Fofos</p>
    </div>
  </footer>
  <script>document.getElementById('year2').innerText = new Date().getFullYear();</script>
</body>
</html>
