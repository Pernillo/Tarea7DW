/* Devuelve los parametros para las funciones, recibiendo como parametro el nuemro de ejercicio */
const parametrosDeFunciones = (numeroEjercicio) => {
  switch (numeroEjercicio) {


    case 1: {
      return [1, 2, 3, 4, 5];
    }

    case 2: {
      //se devuelven dos parametros para la funcion en forma de array
      return [
        [
          { category: "cosmeticos", price: 12 },
          { category: "cosmeticos", price: 12 },
          { category: "cosmeticos", price: 10 },
          { category: "otro", price: 34 },
          { category: "otro", price: 29 },
        ],
        "cosmeticos",
      ];
    }

    case 3: {
      return "quezadilla de jutiapa";
    }

    case 4: {
      return [10, 20, 30, 20, 20, 40, 60];
    }

    case 5: {
      //se devuelven dos parametros para la funcion en forma de array
      return [[3, 34, 4, 12, 5, 2], 9];
    }
    
    case 6: {
        return ["Diana", "Monica", "Maria", "Breny"];
      }
    default:
      break;
  }
};

//funcion para escribir el html en la pagina
const escribirHtml = (html) => {
  //se leccionamos el div app que indicamos en el body de nuestra pagina
  let app = document.getElementById("app");
  //incrustar html en la pagina
  app.innerHTML = html;
};

//funciones que resuleven los ejercicos
const Ejercicio1 = (arr = []) => {
  const alCudrado = arr.map((numero) => Math.pow(numero, 2));
  console.log({ alCudrado });
  //usamos .join para sustituir la coma que devuelve el array
  const html = 
   `<ul>
    ${alCudrado.map((numero) => `<li>${numero}</li>`).join("")}
    </ul>`;

  escribirHtml(html);
};

const Ejercicio2 = (arrObj = [], categoryName) => {
  const totalCategory = arrObj.reduce((acc, item) => {
    if (item.category === categoryName) {
      acc = acc + item.price;
    }
    return acc;
  }, 0);

  const html = `<h3>El total de la categoria ${categoryName} es ${totalCategory}</h3>`;
  escribirHtml(html);
  console.log(totalCategory);
};

const Ejercicio3 = (oracion = "") => {
  const oracionArray = oracion.split(" ");
  console.log(oracionArray);
  const transformacion = oracionArray.map((palabra) =>
    palabra.length > 2 //si la palabara tiene mas de dos letras se transforma
      ? palabra.charAt(0).toUpperCase() + palabra.slice(1)
      : palabra
  );
  const resultado = transformacion.join(" ");
  console.log(resultado);
  const html = `<h3>${resultado}</h3>`;
  escribirHtml(html);
};

const Ejercicio4 = (arr = []) => {
  //suma de valor anterior acc mas el valor que se itera actualmente val
  const suma = arr.reduce((acc, val) => (acc += val));
  const promedio = suma / arr.length;
  console.log(promedio);
  const html = `<h3> El promedio de este arreglo es: ${promedio}</h3>`;
  escribirHtml(html);
};

const Ejercicio5 = (arr = [], valorEsperado) => {
  const par = arr.reduce((acc, valor) => {
    const valorEncontrado = arr.find((val) => valor + val == valorEsperado);
    if (valorEncontrado && acc.length < 2) {//se delimita a que solo encuentre un par, si se borra la condicion encontrara todos los pares
      acc.push(valorEncontrado);
    }
    return acc;
  }, []);
  const html = `<h3> El par que suman ${valorEsperado} son: ${par}</h3>`;
  escribirHtml(html);
};  

const Ejercicio6 = (arr = []) => {
  //en el ejercico omitimos foreach porque tenaimos algo mas practico!
  const htmlTodos =
     `<ol>
     ${arr.map((nombre) => `<li>${nombre}</li>`).join("")}
     </ol>`;

  //eliminando a Monica por medio de un filtro
  const sinMonica = arr.filter((nombre) => nombre !== "Monica");
  const htmlSinMonica = `<ol>
   ${sinMonica.map((nombre) => `<li>${nombre}</li>`).join("")}
   </ol>`;

  //removiendo a Breny
  //sebusca el index de Breny
  const indexBreny = sinMonica.findIndex((el) => el == "Breny");
  sinMonica.splice(indexBreny, 1); // se remuve por medio del index
  const htmlSinMonica_Breny = 
  `<ol>
  ${sinMonica.map((nombre) => `<li>${nombre}</li>`).join("")}
  </ol>`;
  
  //se agreag a jose al principio
  sinMonica.unshift("Jose");
  const htmlConJose = 
  `<ol>
  ${sinMonica.map((nombre) => `<li>${nombre}</li>`).join("")}
  </ol>`;

  //agrgar mi nombre
  sinMonica.push("Yancarlos");
  const htmlConYanca = 
  `<ol>
  ${sinMonica.map((nombre) => `<li>${nombre}</li>`).join("")}
  </ol>`;

  // se obtiene diana
  const diana = sinMonica[1];
  const htmlSoloDiana = `<h3>Se obtuvo el nombre de: ${diana}</h3>`;

  //nueva compia del arreglo
  const nuevoArr = [...arr].slice(1, 3);
  const htmlNuevoArr = 
  `<ol>
  ${nuevoArr.map((nombre) => `<li>${nombre}</li>`).join("")}
  </ol>`;

  //indice de monica
  const indexMonica = nuevoArr.findIndex((nombre) => nombre == "Monica");
  const htmlIndexMonica = `<h3>El indice de Monica es: ${indexMonica}</h3>`;

  //imprimir todos los resultados en el DOM
  escribirHtml(
    htmlTodos +
      htmlSinMonica +
      htmlSinMonica_Breny +
      htmlConJose +
      htmlConYanca +
      htmlSoloDiana +
      htmlNuevoArr +
      htmlIndexMonica
  );
};
  