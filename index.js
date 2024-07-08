// 1º
// let numero = Number(prompt("Digite um numero: "));
// let inicial = numero;
// let aux = 0;
// for (let i = numero; i > 1; i--){
//     let result = i - 1;
//     aux = numero += result
// }
// document.write(`O resultado é ${aux}`); 

// 2º
// let numero = Number(prompt("Digite um numero: "));
// for(let i = 1; i <= numero; i++){
//     if(i % 2 == 0){
//       document.write(`${i}, `); 
//     }
// }

// 3º
// let numero = Number(prompt("Digite um numero: "));
// let inicial = numero;
// let aux = 0;
// for (let i = numero; i > 1; i--){
//     let result = i - 1;
//     aux = numero *= result
// }
// document.write(`O fatorial de ${inicial} é ${aux}`);

// 4º
// let numero = Number(prompt("Digite um numero: "));
// let count = 0;
// for(let i = numero; i > 0; i--){
//     if(numero % i == 0){
//         count++;
//     }
// }
// if(count == 2){
//     document.write(`${numero} é primo`);
// }else{
//     document.write(`${numero} não é primo`);
// }

// 5º
let numero = Number(prompt("Digite um numero: "));
let valor = 0;
let proximo = 1;
let anterior = 0;

for(let i = 1;i <= numero; i++){
    // valor += proximo;
    valor = valor + proximo;
    anterior = proximo;
    proximo = valor + anterior;
    document.write(`A soma do fibonacci: ${anterior} + ${valor} = ${proximo}<br>`);
}


// 6º

// 7º
// let numero = Number(prompt("Digite um numero: "));
// for (let i = 1; i <= 10; i++){
//     document.write(`${numero} x ${i} = ${ numero * i }<br>`)
// }

// 8º
// let palavra = prompt("Digite uma palavra: ").replace(' ','');
// let j = palavra.length - 1;
// let teste = true;

// for(let i = 0; i < palavra.length/2; i++){
//     if(palavra[i] != palavra[j--]){
//        teste = false;
//     }
// }
// document.write(`${teste ? 'É palindromo' : 'Não é palidromo'}`);


// for(let i = palavra.length - 1; i >= 0; i--){
//     console.log(palavra[i])
// }


// 9º
// let numero = prompt("Digite um numero: ");
// let i = 0;
// let teste = true;
// let count = 0;
// while(teste ){
//     if(numero[i]){
//         count++;
//     }else{
//         teste = false;
//     }
//     i++;
// }
// document.write(`${numero} numero tem ${count} dígitos`);

// let numero = Number(prompt("Digite um numero: "));
// let i = 1;
// let count = 0;
// while (numero >= i) {
//   i *= 10;
//   count++;
// }
//  document.write(`${numero} numero tem ${count} dígitos`);

// 10º