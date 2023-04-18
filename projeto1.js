
const Notas 1
=[6,5,5.57,8,9,10,4.5,3,10,];
let index = 0;
while(index < notas 1.length){
console.log ('nota atual:',notas 1 [index]);
index ++;
}

// while
const notas2
=[6,5,5.5,7,8,9,10,4.5,3,10];
    let i = 0;

do{
console.log('nota atual:',notas2[i]);
i++;
}while(i < notas2.length);

//do-while

const notas3
=[6,55.5,7,8,9,10,4.5,3,10];
for (let i= 0; i < notas3.length;i++){
    console.log("A nota é:"+notas3[i]);};

    //usando for

const notas
=[6,5,5.5,7,8,9,10,4.5,3,10];
notas.forEach((nota)= > {
console.log("A nota é:" + nota)
});
//usando foreach
console.log ("tabuada do numero 2")
var n = 2
var i = 0;
while(i<=10){
console.log(n +"x" + i +"="+ (n*i));
i = i + 1;
}
//tabuada

const valores =[10.50,11.83,16.90,120,50];

for( let i = 0; i < valores.length;i++){
console.log("valor da array"+ valores [i]);
console.log("Seu número inteiro é:"+Math.trunc(valores[i]))
console.log("Seu quadrado é:"+ Math.pow(valores[i],2))
console.log("Sua raiz quadrada é:"+ Math.sqrt(valores[i]))
console.log("Arredondado para cima,ele fica assim:"+Math.ceil(valores[i]))
console.log("Arredondado para baixo, ele fica assim:"+ Math.floor(valores [i]))
}



