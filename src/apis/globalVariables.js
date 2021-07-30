
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


    const Arr = [];

function name() {  
  let count = 0;  
  while (count<50){
    count++;
    const randomVerbs = [verbs[Math.floor(Math.random() * 50)]]
    const randomAdj = [adjectives[ Math.floor(Math.random() * 50)]]
    const productName = randomVerbs.concat(randomAdj).join(' ')
    Arr.push(productName);
  }
  return Arr
} 

const productNames = name()
const savedProduct = [productNames.slice(0,50)]


    
export { savedProduct };