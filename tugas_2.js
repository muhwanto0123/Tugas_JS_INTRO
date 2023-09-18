const mtk = 80;
const bahasaIndonesia = 90;
const english = 70;
const IPA = 90;

let count = ((mtk + bahasaIndonesia + english + IPA)/4)
let integers = Math.ceil(count) //method
console.log(`Rata-Rata = ${integers}`)

for (let i = integers;i <= 100;i++){
    if(i <= 59){
        console.log("Grade = E")
        break
    }else if(i <= 69){
        console.log("Grade = D")
        break
    }else if(i <= 79){
        console.log("Grade = C")
        break
    }else if(i <= 89){
        console.log("Grade = B")
        break
    }else{
        console.log("Grade = A")
        break
    }
}

