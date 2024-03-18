function fazerPergunta() {

    var resposta = prompt("a Thaís é uma tremenda gostosa? Responda sim ou não.");

    resposta = resposta.toLowerCase();


    if (resposta === "sim") {
        alert("ta certíssima");
    } else if (resposta === "não") {
        alert("clbc animal");
        fazerPergunta();
    } else {

        alert("sim ou não, responde direito porra");
        fazerPergunta();
    }
}

fazerPergunta();
