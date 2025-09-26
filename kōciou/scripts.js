(function heroSlideshow(){
  const imgs = document.querySelectorAll('.hero-img');
  let i = 0;
  function next(){
    imgs[i].classList.remove('active');
    i = (i+1) % imgs.length;
    imgs[i].classList.add('active');
  }
  if (imgs.length > 1) setInterval(next, 4000);
})();

(function typing(){
  const phrases = [
    "Delicious coffee • Cozy reading • Quiet study",
    "Desserts that melt • Books that inspire",
    "VIP lounge • Study rooms • PC gaming"
  ];
  let pIndex = 0, charIndex = 0;
  const typedEl = document.getElementById('typed');
  const speed = 45;
  function type(){
    if(!typedEl) return;
    const phrase = phrases[pIndex];
    typedEl.textContent = phrase.slice(0, charIndex);
    charIndex++;
    if(charIndex > phrase.length){
      setTimeout(()=>{ charIndex=0; pIndex = (pIndex+1)%phrases.length; }, 1200);
    }
    setTimeout(type, speed);
  }
  type();
})();

function onScrollFade(){
  document.querySelectorAll('.fade-in').forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight - 80){
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', onScrollFade);
window.addEventListener('load', onScrollFade);

function scrollToSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth'});
}

function openLightbox(img){
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  if (lb && lbImg) {
    lbImg.src = img.src;
    lb.style.display = 'flex';
  }
}
function closeLightbox(){ 
  const lb = document.getElementById('lightbox');
  if (lb) lb.style.display='none';
}

function openVIP(){ 
  const vip = document.getElementById('vipModal');
  if (vip) vip.style.display='flex';
}
function closeVIP(){ 
  const vip = document.getElementById('vipModal');
  if (vip) vip.style.display='none';
}

const cards = [
  { img: "ye.jpeg", text: "Espresso: rich & bold." },
  { img: "ye.jpeg", text: "Latte: smooth with milk foam." },
  { img: "ye.jpeg", text: "Mocha: chocolate & coffee." },
  { img: "ye.jpeg", text: "Light Novels: stories to sip with." },
  { img: "ye.jpeg", text: "Manga: enjoy with a cappuccino." }
];
let cardIndex = 0;
const flashEl = document.getElementById('flashcard');
const backText = document.getElementById('backText');
function showCard(n){
  if(!flashEl) return;
  const frontImg = flashEl.querySelector('.front img');
  if (frontImg) frontImg.src = cards[n].img;
  if (backText) backText.textContent = cards[n].text;
  flashEl.classList.remove('flipped');
}
function nextCard(){ cardIndex = (cardIndex+1) % cards.length; showCard(cardIndex) }
function prevCard(){ cardIndex = (cardIndex-1 + cards.length) % cards.length; showCard(cardIndex) }
function flipCard(){ if(flashEl) flashEl.classList.toggle('flipped') }
window.addEventListener('DOMContentLoaded', ()=> showCard(cardIndex));

window.addEventListener('scroll', ()=>{
  const hero = document.querySelector('.hero-slideshow');
  let scrollY = window.scrollY;
  if(hero){
    hero.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});

document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('click', function(e){
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    let x = e.clientX - this.getBoundingClientRect().left;
    let y = e.clientY - this.getBoundingClientRect().top;
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    setTimeout(()=>{ ripple.remove() }, 600);
  });
});

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => loader.style.display = 'none', 900);
  }
});

setTimeout(() => {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
}, 5000);
