function adicionarJogo() {
  var getCampoJogo = document.getElementById("jogo").value;
  if (getCampoJogo.endsWith(".png") || getCampoJogo.endsWith(".jpg")) {
    listarJogos(getCampoJogo);
  } else {
    console.error("Endereço da imagem está incorreto");
  }
  document.getElementById("jogo").value = "";
}

function listarJogos(jogo) {
  var setCampoJogo = "<img src=" + jogo + ">";
  var listaJogos = document.getElementById("listaJogos");
  listaJogos.innerHTML = listaJogos.innerHTML + setCampoJogo;
}