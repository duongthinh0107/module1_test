let arr = [];
n = prompt("nhap so luong phan tu: ");
let i = 0;
do{
    arr[i] = +prompt(`so thu ${i+1}: ` )
    i++;
}while (i<n);

function avgOdd(){
    let sum = 0;
    let avg = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2 !== 0 && i%2===0){
            sum += arr[i];
            count++;
        }
    }
    avg = sum/count;
    return avg;
}
console.log(avgOdd());
