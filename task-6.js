let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (let a in list) {
    if (typeof list[a] === "string") {
        list[a] = list[a].toUpperCase();
    }
}
console.log(list);