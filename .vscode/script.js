function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar o avatar-light
    img.setAttribute("src", "./assets/Avatar-light.png.png")
    img.setAttribute(
      "alt",
      "Foto de Amanda Lopes sorrindo, com iluminação clara e fundo branco, com um óculos escuro escrito Changer nas lentes."
    )
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Amanda Lopes sorrindo, com iluminação roxa, uma camiseta preta, e uma corrente com pingente pequeno de cruz."
    )
  }
}
