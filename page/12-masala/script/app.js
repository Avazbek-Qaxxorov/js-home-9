function findIndex(array, string) {

    return array.indexOf(string);

}

let arr = ["apple", "peach", "pear", "mango", "orange"];

let string = "pear";

let index = findIndex(arr, string);

document.write("Index of", string + ":", index); 