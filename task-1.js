let a = "i am in the easycode";
let newa = ""


for (let i = 0; i < a.length; i++) {
    if(a[i-1] === ' ' || a[i] === a[0] ){
        newa += a[i].toUpperCase()
    } else{
        newa += a[i]
    }
}


console.log(newa);
//I Am In The Easycode


