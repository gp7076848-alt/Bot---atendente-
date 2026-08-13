let etapa = 0;
let dados = {};

function adicionarMensagem(texto, classe) {
    const mensagens = document.getElementById("mensagens");

    const div = document.createElement("div");
    div.className = classe;
    div.innerHTML = texto;

    mensagens.appendChild(div);
    mensagens.scrollTop = mensagens.scrollHeight;
}

function enviar() {
    const entrada = document.getElementById("entrada");
    const texto = entrada.value.trim();

    if (texto === "") return;

    adicionarMensagem(texto, "usuario");
    entrada.value = "";

    switch (etapa) {

        case 0:
            dados.nome = texto;

            adicionarMensagem(
                `Prazer, ${dados.nome}!<br><br>
                Qual é a sua cidade?`,
                "bot"
            );

            etapa++;
            break;

        case 1:
            dados.cidade = texto;

            adicionarMensagem(
                `Escolha o material:<br><br>
                1️⃣ Mármore<br>
                2️⃣ Granito<br>
                3️⃣ Quartzo<br>
                4️⃣ Porcelanato`,
                "bot"
            );

            etapa++;
            break;

        case 2:

            if (texto === "1") {
                dados.material = "Mármore";
            } else if (texto === "2") {
                dados.material = "Granito";
            } else if (texto === "3") {
                dados.material = "Quartzo";
            } else if (texto === "4") {
                dados.material = "Porcelanato";
            } else {
                dados.material = texto;
            }

            adicionarMensagem(
                "Quais são as medidas do projeto?",
                "bot"
            );

            etapa++;
            break;

        case 3:

            dados.medidas = texto;

            mostrarResumo();

            etapa++;
            break;
    }
}

function mostrarResumo() {

    adicionarMensagem(
        `<b>Resumo do atendimento</b><br><br>
        👤 Nome: ${dados.nome}<br>
        📍 Cidade: ${dados.cidade}<br>
        🪨 Material: ${dados.material}<br>
        📏 Medidas: ${dados.medidas}<br><br>

        ✅ Obrigado! Escolha um atendente para enviar o pedido pelo WhatsApp.`,
        "bot"
    );

    adicionarMensagem(
        `<button onclick="enviarWhatsApp('matheus')">
            📲 Falar com Matheus
        </button>

        <br><br>

        <button onclick="enviarWhatsApp('stephany')">
            📲 Falar com Stephany
        </button>`,
        "bot"
    );
}

function enviarWhatsApp(atendente) {

    let numero;
    let nomeAtendente;

    if (atendente === "matheus") {
        numero = "5511986520805";
        nomeAtendente = "Matheus";
    } else {
        numero = "5511960180793";
        nomeAtendente = "Stephany";
    }

    const textoMensagem =
        `Olá ${nomeAtendente}! Tenho um projeto e gostaria de fazer um orçamento.\n\n` +
        `👤 Nome: ${dados.nome}\n` +
        `📍 Cidade: ${dados.cidade}\n` +
        `🪨 Material: ${dados.material}\n` +
        `📏 Medidas: ${dados.medidas}`;

    const mensagem = encodeURIComponent(textoMensagem);

    const link = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(link, "_blank");
}