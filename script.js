// Lista de fotos com legendas
const photos = [
  {src: "/foto1.jpg", caption: "Cada momento com você é único 💕"},
  {src: "/foto4.jpg", caption: "No teu abraço encontro o meu lar ❤️"},
  {src: "/foto2.jpg", caption: "Minha melhor escolha de todas 💜"},
  {src: "/foto4.jpg", caption: "Nosso amor é infinito, como as estrelas ✨"}
];

// Pega a div da galeria
const gallery = document.getElementById("gallery");

// Cria os cards
photos.forEach(photo => {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.caption;

  const caption = document.createElement("div");
  caption.classList.add("caption");
  caption.textContent = photo.caption;

  card.appendChild(img);
  card.appendChild(caption);
  gallery.appendChild(card);
});
