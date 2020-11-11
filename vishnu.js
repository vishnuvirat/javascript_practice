//FIZZ BUZZ PROGRAMME
/*for (i = 1; i <= 100; i++) {
    if (i % 15 === 0)
        console.log("FizzBuzz");
    else if (i % 3 === 0)
        console.log("Fizz");
    else if (i % 5 === 0)
        console.log("Buzz");
    else
        console.log(i);
        
}
*/

/* Looping a triangle
for (i = "#"; i.length <= 7; i = i + "#"){
    console.log(i);

}
*/


// process.stdout.write("##")
// process.stdout.write("##")

// chess board 
// for (i = " "; i.length <= 8;) {
//     console.log(i)
//     console.log("#")
//     break
// }

// for (let i = 1; i <= 7; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("#");
//     }
//     console.log();
// }


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j != i; j++) {
//         process.stdout.write("#");
//     }
//     console.log();
// }

// let n = 9;
// for (let i = n; i >= 0 ; i -= 2) {
//     console.log(i);
// }


// let n = 8;
// let result = 1;
// for (let i = 1; i <= n;  i++){
//     console.log(result);
//     result = result * 10;

// }


// let n = 4;
// for (let i = 1; i <= n;  i++){
//     console.log(i*i);
// }


// for (let i = 5; i > 0; i--) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("#");
//     }
//     console.log();
// }


for (let i = 5; i > 0; i--) {
    for (let j = 1; j < i; j++) {
        process.stdout.write(" ");

    }
    for (let k = 5; k <= i; k--);
    process.stdout.write("#");
    console.log();
}

// let n = 10;
// for (let i = 1; i <= n; i++) {
//     console.log((n - i) + 1);
// }

// first problem cracked!!
let a = 1;
let b = 10;
for (i = a+1; a < b; a++) {
    console.log(a);
}


