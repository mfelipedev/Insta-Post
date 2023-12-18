const View = {
  render({ minutes, seconds }) {
    document.body.innerHTML = `
      <div class="ip">
        <h1>INSTA POST V1.0.1</h1>     
        <p>PRÓXIMO POST EM:</p>
        <span>${minutes}:${seconds}</span>
        <br>
        <button class="btnx" id="fecharBotao" onclick="fecharJanela()">Fechar</button>
      </div>
    `;

    function fecharJanela() {
      window.close();
    }

    document.getElementById('fecharBotao').addEventListener('click', fecharJanela);
  }
};

export { View };
