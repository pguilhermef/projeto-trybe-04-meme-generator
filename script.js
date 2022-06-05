// Pegar valor do input e escrevê-lo
let inputText = document.querySelector('#text-input');
let memeText = document.querySelector('#meme-text');

inputText.addEventListener('input', function() {
  memeText.innerText = inputText.value;
});


//Adicionar a foto selecionada
//https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
//https://medium.com/@filipelinhares/elemento-input-type-file-a186e68b4271
let inputImage = document.querySelector('#meme-insert');
let memeImage = document.querySelector('#meme-image');

inputImage.addEventListener('input', ({ target }) => {
  memeImage.src = URL.createObjectURL(target.files[0]);
});

//Adiciona função aos botões
let boardBtn = document.querySelector('#board-btn');
let memeContainerImage = document.querySelector('#meme-image-container');
let containerMemes = document.querySelector('#container-memes');

boardBtn.addEventListener('click', ({ target }) => {
  let newBorders = window.getComputedStyle(target);
  memeContainerImage.style.border = newBorders.border;
});

containerMemes.onclick = ({ target }) => {
  memeImage.src = target.src;
};
