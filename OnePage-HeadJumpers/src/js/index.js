//Pegar os personagens no JS para poder verificar quando o usuário passa o mouse em cima

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        //Para acessos no celular
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
        //Verificr se já existe um persoangem selecioado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        //Pegar elemento do personagem grande para adicionar informações necessárias
        alterarImagemPersonagemSelecionado(personagem);

        //Alterar o nome do personagem grande
        alterarNomepersonagemSelecionado(personagem);
   
        //Alterar a descrição do personagem
        alterarDescricaoPersonagem(personagem);
    });
});

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomepersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersoGrande = document.querySelector('.personagem-grande');

    //Alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    //console.log("ID do personagem:", idPersonagem) // Debug para ver o id do personagem
    imagemPersoGrande.src = `./src/img/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
