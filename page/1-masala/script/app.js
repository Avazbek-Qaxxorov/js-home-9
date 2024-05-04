// let word = prompt("Istalgan so'z kiriting: ");

// function split(word) {
//     let word2 = ""
//     for (let i = 0; i < word.length; i++) {
//         word2 += word[i] + " ";
//     }
//     return word2
// }
// let result = split(word)
// document.write("word2:"  + result);

let soz = prompt("Istalgan so'z kiriting:  ");

function split(soz){

    let empty = ""

    for (let i = 0; i < soz.length; i++) {

        empty += soz[i]

        document.write(empty + " ");

    }

    return empty;
    
}

let result = split(soz);

 document.write("<br> soz: " + result);