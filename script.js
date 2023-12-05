function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag img
  const img = document.querySelector('#profile img')

  // substituir imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicinar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mathias Sammer sorrindo, usando camisa preta, com barba e fundo com árvores."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mathias Sammer sorrindo, usando camisa preta, com barba e fundo céu com nuvens."
    )
  }
}