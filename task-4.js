let string = "JavaScript is a pretty good language";
let newstring = "";

for (let i = 0; i < string.length; i++) {
    if (string[i - 1] === ' ' || string[i] === string[0]) {
        newstring += string[i].toUpperCase()
    } else if (string[i] !== " ") {
        newstring += string[i]
    }
}
console.log(newstring)