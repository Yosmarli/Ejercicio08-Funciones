function devuelveTrue() {
    return true
}
console.log(devuelveTrue)



function promesaAsync() {
    console.log("Hola soy una promesa");
}
setTimeout(promesaAsync, 5000); 



function* generadoraPares(index) {
    while (true) {
        index++;
        if(index % 2 == 0){
            yield index;
        }
    }
  }
  
const data = generadoraPares(1);
for(let i = 0; i<10;i++){
    console.log(data.next().value);
}