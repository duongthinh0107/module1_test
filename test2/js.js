function perfectCouple(){
    let a = +prompt('Number 1: ');
    let b = +prompt('Number 2: ');
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 1; i <= a/2;i++){
        if(a % i === 0){
            sum1 += i;
        }
    }
    for (let j = 1; j <= b/2 ; j++) {
        if(b % j === 0){
            sum2 += j;
        }
    }
    return sum1 === b && sum2 === a;
}
console.log(perfectCouple());