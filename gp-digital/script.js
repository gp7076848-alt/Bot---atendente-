* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --preto: #050809;
  --preto2: #0b1215;
  --card: #101b1f;
  --card2: #14252a;
  --turquesa: #13ddd2;
  --turquesa2: #08aaa4;
  --branco: #ffffff;
  --cinza: #a8b5b9;
}

body {
  min-height: 100vh;
  background:
    radial-gradient(circle at top, #123137, #050809 55%);
  color: var(--branco);
  font-family: Arial, Helvetica, sans-serif;
}


/* APP */

.app {
  width: 100%;
  max-width: 520px;
  min-height: 100vh;
  margin: auto;

  background: rgba(4, 9, 11, .97);

  display: flex;
  flex-direction: column;

  box-shadow:
    0 0 80px rgba(0, 0, 0, .7);
}


/* TOPO */

.topo {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 17px;

  background: #05090b;

  border-bottom: 1px solid rgba(19, 221, 210, .2);

  position: sticky;
  top: 0;

  z-index: 10;
}


/* LOGO */

.logo {
  width: 72px;
  text-align: center;
}

.gp {
  font-size: 31px;
  font-weight: 900;
  letter-spacing: -3px;
}

.linha {
  width: 100%;
  height: 4px;

  margin: 5px 0;

  border-radius: 20px;

  background: var(--turquesa);
}

.digital {
  color: var(--turquesa);

  font-size: 8px;

  letter-spacing: 3px;
}


/* EMPRESA */

.empresa {
  flex: 1;
}

.empresa h1 {
  font-size: 18px;
  margin-bottom: 3px;
}

.empresa p {
  font-size: 11px;
  color: var(--cinza);
}


/* STATUS */

.status {
  color: #75e6a8;
  font-size: 10px;
}

.status span {
  width: 7px;
  height: 7px;

  display: inline-block;

  background: #24df78;

  border-radius: 50%;

  margin-right: 4px;

  box-shadow: 0 0 8px #24df78;
}


/* CHAT */

.chat {
  flex: 1;

  padding: 22px 15px 10px;

  overflow-y: auto;
}


/* MENSAGENS */

.mensagem {
  max-width: 86%;

  padding: 13px 15px;

  margin-bottom: 12px;

  border-radius: 17px;

  font-size: 14px;

  line-height: 1.5;

  animation: aparecer .3s ease;
}

.bot {
  background: var(--card2);

  border: 1px solid rgba(19, 221, 210, .18);

  border-bottom-left-radius: 5px;
}

.cliente {
  margin-left: auto;

  background: var(--turquesa2);

  color: #02100f;

  font-weight: 600;

  border-bottom-right-radius: 5px;
}


/* ANIMAÇÃO */

@keyframes aparecer {

  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }

}


/* DIGITANDO */

.digitando {
  display: none;

  gap: 5px;

  padding: 0 20px 10px;
}

.digitando.ativo {
  display: flex;
}

.digitando span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: var(--turquesa);

  animation: pular .8s infinite alternate;
}

.digitando span:nth-child(2) {
  animation-delay: .2s;
}

.digitando span:nth-child(3) {
  animation-delay: .4s;
}

@keyframes pular {

  from {
    transform: translateY(0);
    opacity: .3;
  }

  to {
    transform: translateY(-5px);
    opacity: 1;
  }

}


/* OPÇÕES */

.opcoes {
  display: grid;

  gap: 9px;

  padding: 10px 15px 15px;
}

.opcao {
  border: 1px solid rgba(19, 221, 210, .25);

  background: var(--card);

  color: white;

  padding: 14px;

  border-radius: 13px;

  text-align: left;

  font-size: 13px;

  cursor: pointer;

  transition: .2s;
}

.opcao:hover {
  border-color: var(--turquesa);

  background: #152a2f;

  transform: translateY(-2px);
}

.preco {
  display: block;

  margin-top: 4px;

  color: var(--turquesa);

  font-size: 11px;
}


/* WHATSAPP */

.whatsapp {
  display: block;

  padding: 15px;

  border-radius: 13px;

  background: #19cf6d;

  color: #03140b;

  text-align: center;

  text-decoration: none;

  font-weight: 800;

  transition: .2s;
}

.whatsapp:hover {
  transform: scale(1.02);
}


/* ENTRADA */

.entrada {
  display: flex;

  gap: 8px;

  padding: 10px 15px 15px;

  border-top: 1px solid rgba(255,255,255,.05);
}

.entrada input {
  flex: 1;

  min-width: 0;

  padding: 13px;

  border-radius: 13px;

  border: 1px solid rgba(19,221,210,.2);

  background: #0b1518;

  color: white;

  outline: none;
}

.entrada input:focus {
  border-color: var(--turquesa);
}

.entrada button {
  width: 48px;

  border: 0;

  border-radius: 13px;

  background: var(--turquesa);

  color: #00100f;

  font-size: 20px;

  font-weight: bold;

  cursor: pointer;
}


/* RODAPÉ */

footer {
  padding: 10px;

  text-align: center;

  color: #617277;

  font-size: 9px;

  letter-spacing: .5px;
}


/* DESKTOP */

@media (min-width: 700px) {

  body {
    padding: 20px;
  }

  .app {
    min-height: calc(100vh - 40px);

    border-radius: 22px;

    overflow: hidden;
  }

  }
