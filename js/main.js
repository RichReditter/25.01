let ind = 0;
let sumBetweenZeros = 0;
let negativeNumbers = 0;
let arr2 = [-22.38,41.16,0,37.12,432,27.92,0,-2.97];
let roundedArray = [];
let roundedUpArray = [];
let lowest = arr2[0];
let biggest = arr2.pop();
let rounded = 0;
let roundedUp = 0;

arr2.forEach( (e) => {
    if(e < 0){
        negativeNumbers += e;
    }
    if ( e % 2 == 0){
        if ( lowest > e){
            lowest = e
        }
    }
    if(biggest < e){
        biggest = e;
    }
    if(arr2.length){
        rounded = Math.round(e)
        roundedArray.push(rounded);
    }
    if(arr2.length){
        roundedUp = Math.ceil(e)
        roundedUpArray.push(roundedUp);
    }
})


// ДВА НУЛЯ



let positiveArray = [];
arr2.map( (e) => {
    if( e > 0){
        positiveArray.push(e)
    }
})
console.log('Сумма отрицательных чисел: ',negativeNumbers)
console.log('Наименьшее четное число: ',lowest)
indMax = arr2.indexOf(biggest)
indLow = arr2.indexOf(lowest)
indSum = indMax + indLow;
console.log('Сумма номеров минимального и максимального элементов: ',indSum)
console.log('Положительные числа из массива:',positiveArray)
console.log('Округленные числа: ',roundedArray);
console.log('Округленные числа вверх: ',roundedUpArray);





let moreThan5 = 0;
let digits = 0;

let str = 'Lorem Ipsum is simply du5mmy text of the printing and typesetting industry. Lorem Ips1um has been the industrys standard du2mmy text ever since the 1s, when an unknown printer took a galley of type and scram4bled it to make a type spe6cimen book. It has survived not only five cen8turies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 9s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
let splitted = str.split(' ')
console.log('Кол-во слов в строке:', splitted.length);

let splittedE = [];
splitted.forEach( (e) => {
    if ( e.length > 4){
        moreThan5 += 1;
    }
})
let spl = str.split('')

console.log(spl)
spl.forEach( (e) =>{
    if ( Number.isInteger(+e))
    {
        digits +=+e;
    }
});
console.log('Количество слов , содержащие больше 5 букв : ', moreThan5)
console.log('Сумма чисел',digits)
console.log(spl)


smallLetter = splitted.map( (e) => {
    return e.toLowerCase()
});

console.log('Все буквы строчные: ',smallLetter)
let middleLetter;
withoutMiddleLetter = splitted.forEach( (e) => {
    if( e.length % 2 !== 0 && e.length > 2){
        middleLetter = Math.ceil(e.length / 2)
        withoutMiddleLetter = e.slice(0, middleLetter-1) + e.slice(middleLetter);
        console.log(withoutMiddleLetter)
        return withoutMiddleLetter;
    }
});
console.log(withoutMiddleLetter)








const reducer = (previousValue, currentValue) => previousValue + currentValue;
reduced = arr2.reduce(reducer)
console.log('Сумма чисел',reduced);
len = arr2.length
middleNumber = reduced / len
console.log('среднее арифметическое: ',middleNumber)
result = arr2.filter( number => number > middleNumber)

console.log('Числа больше среднего арифметрического',result)



arr3 = new Array(100);
arr3 = arr3.fill(0)
arr3 = arr3.map( n => Math.random()> 0.5 ? n : n*-1)
console.log(arr3)