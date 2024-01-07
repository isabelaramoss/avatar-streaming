document.addEventListener('DOMContentLoaded', function(){
  const heroSection = document.querySelector('.hero');
  const alturaHero = heroSection.clientHeight;

  window.addEventListener('scroll', function(){
    const posicaoAtual = window.scrollY

    if(posicaoAtual < alturaHero){
      ocultaElementosHeader();
    } else{
      exibeElementosHeader();
    }
  })

  const questions = document.querySelectorAll('[data-faq-question]');
  for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener('click', abreOuFechaResposta);
  }
})

function exibeElementosHeader(){
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}

function ocultaElementosHeader(){
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}


function abreOuFechaResposta(elemento){
  const classe = 'faq__questions__item--is-open';
  const elementoPai = elemento.target.parentNode;

  elementoPai.classList.toggle(classe);
}

