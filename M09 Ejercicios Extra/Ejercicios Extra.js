/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   // var nuevo = []
   // for (let key in objeto){
   //    var otra = [key, objeto[key]]
   //    nuevo.push(otra)  
   // }
   // return nuevo
   
   // let bravo = Object.entries(objeto)
   // return bravo
   
   let pon = []
   for( let clave in objeto){
      pon.push([clave,objeto[clave]])
   }
   return pon
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let sepa = string.split("")
   let orden = sepa.sort()
   let final = {}
   for ( var letra of orden)// var letra => orden[index] con foreach seria : forEach((letra)=> {if(!final[letra]...)} )
   {
      if (!final[letra]){
         final[letra]= 1
      }else{
         final[letra] += 1
         }
      }
      return final
   }



function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayusc = []
   let minusc = []
   let separo = string.split("")
   for ( let letra of separo){
   //    if (letra===letra.toUpperCase()){
   //       mayusc.push(letra)
   //    }
   //    else { minusc.push(letra)}
      
   // }
   // return mayusc.join("")+minusc.join("")
   //opcion switch
   switch (letra) {
      case letra.toLowerCase():
         minusc.push(letra)
         break;
      case letra.toUpperCase():
         mayusc.push(letra)
      break;
      default:
         break;
      }
   }
   return mayusc.join("")+minusc.join("")
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let union = ""
   let separo = frase.split(" ")
   for ( i= 0; i<separo.length;i++){
    if (i === 0){ union += separo[i].split("").reverse().join("")}
    else { union += " " + separo[i].split("").reverse().join("")}
   }
   return union
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let ayer = numero.toString().split("").reverse().join("")
   let hoy = Number(ayer)
   if (numero===hoy) return "Es capicua"
   else return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let res = []
   let frodo = string.split("")
   for ( letra of frodo){
      if ( letra === "a" || letra === "b" || letra === "c")continue;
      else res.push(letra)
   }
   let gane = res.join("")
   return gane
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
//   return arrayOfStrings.sort(function(a,b){
//    return a.length-b.length  })

   for ( i= 0 ; i<arrayOfStrings.length; i++){
      for (j = i +1; j<arrayOfStrings.length; j++){
         if (arrayOfStrings[i].length>arrayOfStrings[j].length){
            let aux = arrayOfStrings[i]
            arrayOfStrings[i]=arrayOfStrings[j]
            arrayOfStrings[j]= aux
         }      
      }
   }
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let uno = []
   for (i=0; i<array1.length;i++){
      if ( array2.includes(array1[i])){
         uno.push(array1[i])
      }
   }
   return uno
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
