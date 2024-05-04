function unique(strings) {

    let uniqueStrings = [];

    strings.forEach(function(string) {

        let lowercaseString = string.toLowerCase();
        
        let uniqueChars = new Set(lowercaseString);

        if (uniqueChars.size === lowercaseString.length) {

            uniqueStrings.push(string);

        }
    });

    return uniqueStrings;
}

let strings = ["salom", "assalomualeykum", "siz", "o'zingiz", "qilayotgan", "ishingizdan", "zavqlanyapsizmi"];
console.log(onlyUniqueCharacters(strings));
