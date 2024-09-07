let resultados = document.getElementById("resultados")

let cd = 0;

function limpar(){
    resultados.innerHTML = "0";
    alert("deixa eu limpar meus erros e recomeçar do zero assim😭")
}

function adicionar(x){
    if (resultados.innerHTML == "0"){
        resultados.innerHTML = x
    }else{
        resultados.innerHTML += x;
    }
    
}

let mensagens = [
        "saudades",
        "queria te ver dnv",
        "saudades",
        "sempre penso em vc",
        "matemática = para bichas",  
    ] 
let i = 0;
function calcular(){
    cd += 1;
    resultados.innerHTML = eval(resultados.innerHTML)

    if (cd == 2){
        var guardar = resultados.innerHTML
        resultados.innerHTML = mensagens[i];
        i++
        if (i == 4){
            i = 0;
        }
        cd = 0;
        setTimeout(function(){
            resultados.innerHTML = guardar;
        }, 1500)
    }
    
}

function voltar(){
    if (resultados.innerHTML.length > 1){
        resultados.innerHTML = resultados.innerHTML.substring(0, resultados.innerHTML.length -1)
    }else if(resultados.innerHTML.length <= 1){
        resultados.innerHTML = "0"
    }
}

function inserir(x){

    var ultimo = resultados.innerHTML.charAt(resultados.innerHTML.length - 1);
    var isOperator = false;
    var lastIsOperator = false;
    
    switch(x){
        case "+":
            alert("oi posso somar na sua vida")
            isOperator = true
            break;
        case "-":
            alert("vamos subtrair seu namorado que tal")
            isOperator = true
            break;
        case "*":
            alert("vamos multiplicar nossos momentos juntos!!")
            isOperator = true
            break;
        case "/":
            alert("vamos dividir nossas vidas")
            isOperator = true
            break;
        default:
            isOperator = false
            break;
    }  

    switch(ultimo){
        case "+":
            lastIsOperator = true;
            break;
        case "-":
            lastIsOperator = true;
            break;
        case "*":
            lastIsOperator = true;
            break;
        case "/":
            lastIsOperator = true;
            break;
        default:
            lastIsOperator = false;
            break;
    }        
    if(isOperator){
        if(!lastIsOperator){
            adicionar(x)
        }
    }else{
        adicionar(x)
    }
}

