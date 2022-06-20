function getPrime(i){
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

var start = new Date().getTime();

getPrime(47)
var end = new Date().getTime();
var time = end - start;
console.log('Execution time taken to check each no is prime or not in front of each no checked : ' + time);



var start1 = new Date().getTime();

getPrime(97)
var end1 = new Date().getTime();
var time2 = end1 - start1;
console.log('Execution time taken to check each no is prime or not in front of each no found prime : ' + time);

var avg = (time+time2)/2
console.log("Average of 2b and 2c "+ avg)