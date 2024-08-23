//  1. Prompdan daxil olan ədədin faktorialini tapin

// var num = + prompt("eded daxil edin")
// var factorial = 1; 
// var counter = 0;

// for ( var i = 1; i <=num; i++) {
//    counter = counter + 1;
//    factorial = factorial * counter
// }

// console.log(factorial);




// 2. Arrayin içərisindəkiləri kiçikdən böyüyə göstərin

// var numbers = [ 54, 15, 67, 36, 87, 32, 12];

// function Sorting(a, b) {
//    return a - b;
// }

// numbers.sort(Sorting)
// console.log(numbers);





// 3. Arraydaki sadə ədədləri göstərin

// var arr = [ 6, 12, 4, 7, 19, 20, 8, 9];
// var counter = 0; 

// for ( var i = 0; i < arr.length; i++) {
//    for ( var j = 0; j < arr.length; j++) {

//       if ( arr[i] % j === 0) {
//          counter = counter + 1;
//       }
//    }

//    if ( counter <= 2) {
//       console.log("sade ededler:" , arr[i]);
      
//    }
//    counter = 0;
// }





// 4. Input ile daxil olan stringdə olan saitleri ve onlarin sayini tapin

// var sentence = prompt("please enter a sentence")

// var saitler = "aeiouAEIOU"

// var counter = 0; 

// for ( var i = 0; i <= sentence.length; i++) {
//    if ( saitler.includes(sentence[i])) {
//       counter = counter + 1
//    } 
// }

// console.log(counter);




// 5. Promptdan n sayda ədəd daxil olacaq daxil olunan ədədlər arasinda ən böyüyü tapin

// const n = 4
// var arr = []
// for ( let i = 1; i <= n; i++) {
//    var number = prompt ("eded daxil edin")
//    arr.push(number)
// }

// var en_boyuk = 0;

// for ( let j = 0; j <= arr.length - 1; j++) {

//    if ( arr[j] > en_boyuk) {
//       en_boyuk = arr[j]
//    }
// }

// console.log(en_boyuk);





// 8. Her hansi verilen array sonu 9 bitən ədəd varmi? Varsa True, yoxsa False ekrana cixardin

// function Sonu9labiten(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 10 === 9) {
//             return true;
//         }
//     }
//     return false;
// }

// let numbers = [24, 49, 55, 77, 89, 12, 99]; 
// let result = Sonu9labiten(numbers);

// console.log(result); 





// 9. Daxil etdiyimiz array-de neçə cüt element var. Bunu tapan funksiya yazin

// function countEvenNumbers(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             count++;
//         }
//     }
//     return count
// }

// let numbers = [22, 27, 68, 77, 45, 88, 89]; 
// let evenCount = countEvenNumbers(numbers);

// console.log("cüt elementlərin sayı: " , evenCount);




// 10. Array içerisində 0-9 kimi rəqəmlər var,1 catmir onu tapin

// let arr = [0, 1, 2, 3, 4, 6, 7, 8, 9]

// for ( let i = 0; i < arr.length; i++) {
//    if ( arr[i] !== 5){
      
//    } 
// }
// console.log("5 reqemi yoxdur");





// 11. Prompt ile daxil olunan stringin ilk hərfini böyüyə çevir

// let input = prompt("Cumle daxil edin");

//     let result = input.charAt(0).toUpperCase() + input.slice(1);
//     console.log(result)




// 12. Array-da for-la ədədləri 5 vahid artirmaq

// let numbers = [5, 10, 15, 20, 25]; 

// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] += 5;
// }

// console.log(numbers);




// 13)n = 7
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7

let n = 7; 

for (let i = 1; i <= n; i++) {
    let column = "";
    for (let k = 1; k <= i; k++) {
        column += k + " ";
    }
    console.log(column); 
}





// 14. a = 4, b = 5
// * * * *
// *     *
// *     *
// *     *
// * * * *


// let string = ''
// for ( var i = 0; i < 4; i++) {

//    for ( var j = 0; j < 5; j++ ){
//     if ( i == 0 ||  j == 0 || i == 3 || j == 4) {
//       string += '*'
//     }
//     else {
//       string += ''
//     }   
//    }

//    string += '\n'
// }

// console.log(string)



// 15. Data types neçə dənədir və hansılardır?

// Data types ( number, boolean, string, null, undefined).
// Umumi tipler 2 yere bolunur:
// 1) referance
// 2) non-referance
// REFERANCE olanlara object, non-primitive de deyilir. Amma hamisi gunun sonunda object olur. Referance tipler complex olanlardir. Arraylar, objectler, funksiyalr 
// NON-REFERANCE  olanlara primitive de deyilir. Bunlara undefined, null, number, boolean, string, simvollar, bigint daxildir.



// 16. Let ve const fərqi nələrdir?

// Let ve const block scope gedir.
// Let-in deyerini yeniden teyin etmek olur.
// Const-un deyerini yeniden teyin etmek olmur.



// 17. Hansı method arrayı string’e çevirir?

// toString ve join bir arrayi stringe cevirir.



// 18. forEach ve map arasindaki ferq ? 

// forEach- O, yeni massiv yaratmır və heç nə qaytarmır.
// Ilk növbədə massiv elementləri üzərində təkrarlamaq və hər bir massiv elementi üçün bir dəfə verilmiş funksiyanı yerinə yetirmək üçün istifadə olunur

// map- orijinal massivin hər bir elementinə təqdim edilmiş funksiyanı tətbiq etməklə yeni massiv yaratmaqdır.
// Hər bir elementə funksiyanın tətbiqinin nəticələri ilə yeni massiv qaytarır.



// 19. O(log n) nece teying olunur ? 

// Bu tip alqoritm verilenleri yariya bolur.
// Buna gore de alqoritmin murekkebliyini daha da artirir.
// n boyudukce emeliyyatlarin sayi artigi ucun algoritmde artir.
