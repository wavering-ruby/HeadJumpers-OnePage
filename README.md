# Head Jumpers - One page

# JavaScript

## Overview
This script enables character selection based on user interaction. When a user hovers over a character, the script updates the main display area with the selected character's image, name, and description. It also ensures that only one character is selected at a time and handles scrolling behavior for mobile devices.

## Features
- Detects when the user hovers over a character.
- Scrolls to the top of the page for mobile devices (screen width < 450px).
- Removes previous character selection before applying a new one.
- Updates the main display with the selected character's details (image, name, and description).

## Code Explanation

### Selecting Characters
```javascript
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        // Scroll to top for mobile devices
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
        // Remove previously selected character
        removerSelecaoDoPersonagem();

        // Add selection class to the hovered character
        personagem.classList.add('selecionado');

        // Update main display
        alterarImagemPersonagemSelecionado(personagem);
        alterarNomePersonagemSelecionado(personagem);
        alterarDescricaoPersonagem(personagem);
    });
});
```

### Function: `alterarDescricaoPersonagem`
Updates the description of the selected character.
```javascript
function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}
```

### Function: `alterarNomePersonagemSelecionado`
Updates the name of the selected character.
```javascript
function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}
```

### Function: `alterarImagemPersonagemSelecionado`
Updates the main character image based on the selected character's ID.
```javascript
function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersoGrande = document.querySelector('.personagem-grande');

    // Get character ID and update the image source
    const idPersonagem = personagem.attributes.id.value;
    imagemPersoGrande.src = `./src/img/card-${idPersonagem}.png`;
}
```

### Function: `removerSelecaoDoPersonagem`
Removes the selection class from the previously selected character.
```javascript
function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
```

## Notes
- Ensure all character elements have the `data-name` and `data-description` attributes for proper updates.
- The character images should follow the naming convention `card-{id}.png` and be stored in the `./src/img/` directory.
- If no character is selected initially, `removerSelecaoDoPersonagem()` may cause an error if `personagemSelecionado` is `null`.

