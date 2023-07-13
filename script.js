function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, add a img light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    //se tiver sem light mode, manter a img normal
    img.setAttribute('src', './assets/avatar.png')
  }

  if (html.classList.contains('light')) {
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, com óculos escuros e fundo mesclado azul e rosa.")
  } else {
    img.setAttribute(
      "alt",
      "Foto de Maik Brito sorrindo, usando óculos e camisa preta e fundo amarelo.")
  }
} 
