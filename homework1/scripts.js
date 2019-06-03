
/** 
 * Реализовать такие методы работы над массивами
 */

/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */

function difference(arr, itemsToExclude) {
  var diffArr = [];
  arr.forEach(function (elem) {
      if (itemsToExclude.indexOf(elem) == -1) {
          diffArr.push(elem);
      }
  });
  return diffArr;
}
var arr = [2, 1, 5];
var itemsToExclude = [2, 3];

console.log ( difference(arr, itemsToExclude) );



// => [1, 5]

/**
 * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
 */
function groupBy(array, value) {
  var trueValue = {};
  var objkeys, idx;
  for (i = 0; i <= array.length-1; i++) {
    objkeys = Object.keys(array[i]);
    idx = objkeys.indexOf(value);
    if ( idx != -1 ) {
        if (Object.keys(trueValue).length != 0) {
          if (Object.keys(trueValue).indexOf(array[i][objkeys[idx]]) != -1) {
            trueValue[array[i][objkeys[idx]]].push(array[i]);
          } else {
            trueValue[array[i][objkeys[idx]]] = [];
            trueValue[array[i][objkeys[idx]]].push(array[i]);
          }
        } else {
          trueValue[array[i][objkeys[idx]]] = [];
          trueValue[array[i][objkeys[idx]]].push(array[i]);
        }
   } 
}
return trueValue;
}

var array = [{ gender: 'male', name: 'Max'},
             { gender: 'male', name: 'Fred'},
             { gender: 'female', name: 'Jane'}];
var value = 'gender';

console.log( groupBy(array, value) );

// groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}], 'gender'); 
/**
 * => {
 *  male: [{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}],
 *  female: [{ gender: 'female', name: 'Jane'}]
 * }
 */

/**
 *  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение 
 */
function flatten(array) {
  var ret = [];

  for (i in array) {
    if (typeof(array[i]) === 'number') {
      ret.push(array[i]);
    } 
    else {
      for (j in array[i]) {
        ret.push(array[i][j]);
      }
    }
  }
  return ret;
}
var array = [1, [2, [3, [4]], 5]];

console.log(flatten(array));


// flatten([1, [2, [3, [4]], 5]]);
// // => [1, 2, [3, [4]], 5]

// flatten([1, 2, 3, 4, 5]);
// // => [1, 2, 3, 4, 5]

// flatten([1, [2, 3], 4, 5]);
// // => [1, 2, 3, 4, 5]

/**
 * метод должен убрать все повторяющиеся элементы из массива
 */
function uniq(array) {
  // TODO
  var un = [];
  array.forEach(function (elem, i) {
      if(array.indexOf(elem) === i) {
          un.push(elem) ;
      }
  });
  return un;
}
var array = [2, 1, 2];

console.log( uniq(array) )
// => [2, 1]

/**
 * 
 * метод должен собирать элементы массива в группы с заданным размером
 */
function chunk(array, size) {
    var newArr = [];
    var l = Math.ceil( array.length / size);
    for (i = 0; i < l; i++) {
        newArr.push(array.slice( i * size, ( i + 1 ) * size));
    } 
    return newArr;
}
var array = ['a', 'b', 'c', 'd'];
var size = 2 ;

console.log ( chunk(array, size) );

// chunk(['a', 'b', 'c', 'd'], 2);
// // => [['a', 'b'], ['c', 'd']]
 
// chunk(['a', 'b', 'c', 'd'], 3);
// // => [['a', 'b', 'c'], ['d']]




































