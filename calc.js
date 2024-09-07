let resultados = document.getElementById("resultados")

let cd = 0;

function limpar(){
    resultados.innerHTML = "0";
}

function adicionar(x){
    if (resultados.innerHTML == "0"){
        resultados.innerHTML = x
    }else{
        resultados.innerHTML += x;
    }
    
}

function calcular(){
    cd += 1;
    resultados.innerHTML = eval(resultados.innerHTML)

    if (cd == 3){
        resultados.innerHTML = "vai se foder henryk";
        cd = 0;
        setTimeout(function(){
            resultados.innerHTML = "0";
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
            isOperator = true
            break;
        case "-":
            console.log("no");
            isOperator = true
            break;
        case "*":
            console.log("no");
            isOperator = true
            break;
        case "/":
            console.log("no");
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

