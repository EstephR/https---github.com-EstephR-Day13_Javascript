var temp = Math.floor(Math.random() * 31 - 5);

if (temp <= 10) {

    document.write("The weather is cold " + temp);
} else {
    document.write("The weather is moderate " + temp)
}
console.log(temp);