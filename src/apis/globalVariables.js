
     const verbs = ["Armário", "Navio", "Mala", "Base", "Hidroavião", "Revista", "Carretel", "Minissaia", "Tamborim",
    "Andador", "Geladeira", "Estátua", "Rolo", "Crachá", "Peneira", "Bafômetro", "Desentupidor",
    "Guarda-chuva", "Espanador", "Escudo", "Raquete", "Vaso sanitário", "Lancheira", "Cofre",
    "Helióstato", "Medalha", "Foguete", "Lata", "Sintetizador", "Grampo", "Bucha", "Catraca",
    "Alfinete", "Caneca", "Fita", "Moeda", "Gel", "Maquete", "Interfone", "Gaveta", "Helicóptero",
    "Vela de cera", "Quimono", "Bambolê", "Necessaire", "Machado", "Tecido", "Vareta de freio",
    "Obra de arte", "Canga"];



    const adjectives = ["prepotente", "valioso", "legítimo", "desleixado", "Natural", "inteligente", "disciplinado",
    "louvável", "amargurado", "honesto", "odioso", "vergonhoso", "horroroso", "magnífico", "gordo",
    "romântico", "sublime", "mesquinho", "injusto", "medroso", "otário", "quente", "intenso", "Sábio",
    "zeloso", "desapegado", "faceiro", "companheiro", "empenhado", "espantoso", "traidor",
    "perfeccionista", "Qualificado", "feio", "tolerante", "orgulhoso", "ignorante", "lutador", "desejado",
    "exigente", "nostálgico", "próspero", "compreensivo", "excelente", "estourado", "malvado",
    "windsurfista", "verdadeiro", "melhor", "terno"]; 

    function criarUnico() {
        let random = []
        let sugestao = Math.ceil(Math.random() * 50); // Escolher um numero ao acaso
        while (verbs.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
            sugestao = Math.floor(Math.random() * 50);
        }
        random.push(verbs); // adicionar este numero à array de numeros sorteados para futura referência
        console.log(random)
        return random; // devolver o numero único
        
    }



export { verbs, adjectives, criarUnico };