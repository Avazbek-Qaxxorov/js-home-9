function sumEvenOdd(num) {

    let juftson = 0;

    let toqson = 0;

    for (let number of num) {

        if (number % 2 === 0) {

            juftson += number;

        } 
        else {

            toqson += number;

        }
    }

    return [juftson, toqson];
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = sumEvenOdd(num);

document.write("Juft sonlar yig'indisi:", sum[0]);

document.write("Toq sonlar yig'indisi", sum[1]); 
