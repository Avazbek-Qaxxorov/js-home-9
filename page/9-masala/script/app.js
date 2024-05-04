let num = [4, 8, 3, 9, 2, 5];
function result(array) {

    let sum = 0;

    for (let i = 0; i < num.length; i++) {

      sum += num[i];
    }
    return sum;
  }
  document.write(result(num));