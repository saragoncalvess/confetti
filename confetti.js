const canvas = document.getElementById('canvas'); // puxando o canvas do html 
const ctx = canvas.getContext('2d'); // contexto de render ara desenhar no canvas
let x = 0; // definição de x antes da função
let y = 0; // definição de y antes da função
let quantConfetti = 50; // quantidade de conffeti a ser desenhado
const confettis = []; // guarda guarda a quantidade conffetis 


for(let i = 0; i < quantConfetti; i++){
    confettis.push({
        x: Math.floor(Math.random() * window.innerWidth),
        y: 0,
        speed: Math.random() * 15 + 3,
        color: colorRand()
    })
}
function colorRand(){
    let r = Math.floor(Math.random() * 0xFF);
    let g = Math.floor(Math.random() * 0xFF);
    let b = Math.floor(Math.random() * 0xFF);

        return `rgba(${r}, ${g}, ${b})`
        
}
colorRand();

function frame(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 4;

    ctx.beginPath();
    ctx.fillStyle = '#fff'; // Define cor de preenchumenti como branco
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Pinta o canvas inteiro de branco
    for(let i = 0; i < quantConfetti; i++){
        ctx.beginPath();
        ctx.arc(confettis[i].x, confettis[i].y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = confettis[i].color; // Define o preenchimento como uma cor cororida aleatoria
        confettis[i].y += confettis[i].speed;

        if(confettis[i].y > canvas.height){
            confettis[i].y = 0;
        }
    }
    
    ctx.font = '50px serif';
    let textMetrics = ctx.measureText('Boas Festas');
    ctx.fillText('Boas Festas', canvas.width/2 - textMetrics.width/2, canvas.height/2 + 50/2);
    console.log(textMetrics);

    requestAnimationFrame(frame);
}
frame()
