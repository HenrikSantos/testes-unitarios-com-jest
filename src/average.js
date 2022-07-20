/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// Sem try/catch

// const average = (array) => {
//   let soma = 0;
//   if (!array.every((element) => typeof element === 'number') || array.length === 0) {
//     return undefined;
//   }
//   array.forEach((element) => {
//     soma += element;
//   });
//   return Math.round(soma / array.length);
// };

// Com try/catch
const average = (array) => {
  let soma = 0;
  try {
    if (!array.every((element) => typeof element === 'number') || array.length === 0) {
      throw new Error('array inválido!');
    }
  } catch (error) {
    return undefined;
  }
  array.forEach((element) => {
    soma += element;
  });
  const media = Math.round(soma / array.length);
  return media;
};

module.exports = average;
