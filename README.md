# HTML

## Overview
This HTML file represents the character selection page for *Head Jumpers*. It allows users to choose a character from a list, displaying detailed information about the selected character, including an image, name, and description.

## Structure
The document consists of:
- A header containing the game logo.
- A main section divided into:
  - A character selection list.
  - A display area for the selected character's details.
- A script reference to handle interactions.

## Code Breakdown

### Header
The header contains the game logo.
```html
<header class="cabecalho">
    <img class="logo" src="./src/img/logo_headjumpers_fire.png" width="100px" height="100px" alt="Logo Head Jumpers">
</header>
```

### Main Content
The main section is divided into two parts:

#### Character Selection
A list of selectable characters with unique IDs and data attributes for dynamic updates.
```html
<section class="personagens">
    <h1 class="titulo">Select a Character</h1>
    <ul class="lista-de-personagens">
        <li class="personagem selecionado" id="acir" data-name="Acir, the Jungle Shaman" data-description="A shaman who utilizes his bond with spirits. He can shoot spiritual arrows and summon totems to enhance his physical abilities.">
            <img src="./src/img/card-acir.jpg" alt="Acir">
        </li>
        <li class="personagem" id="bruna" data-name="Bruna, the Ember Sorceress" data-description="A sorceress corrupted by dark magic. She can summon a dark bear to tear apart nearby enemies and use fire to repel foes.">
            <img src="./src/img/card-bruna.jpg" alt="Bruna">
        </li>
        <li class="personagem" id="erick" data-name="Erick, the Fierce Viking" data-description="A Viking obsessed with combat and training his body. He can throw axes to injure enemies and use his shield to deflect projectiles and charge at foes.">
            <img src="./src/img/card-erick.jpg" alt="Erick">
        </li>
    </ul>
</section>
```

#### Selected Character Display
Displays the currently selected character's image, name, and description.
```html
<section class="personagem-selecionado">
    <img class="personagem-grande" src="./src/img/card-acir.png" alt="Selected Character">
    <div class="informacoes-personagem">
        <h2 class="nome-personagem" id="nome-personagem">Acir, the Jungle Shaman</h2>
        <p class="descricao-personagem" id="descricao-personagem">Since childhood, he has had a connection with the spiritual world. He can shoot spiritual arrows and summon totems to enhance his physical attributes.</p>
    </div>
</section>
```

### Script Reference
Includes an external JavaScript file (`index.js`) to manage interactions.
```html
<script src="./src/js/index.js"></script>
```

## Notes
- The character list (`<ul class="lista-de-personagens">`) should include more characters with corresponding `data-name` and `data-description` attributes.
- Character images should be stored in `./src/img/` following the naming convention `card-{id}.jpg`.
- The script `index.js` is responsible for handling character selection interactions.

---

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

---
