const nums = ['2', '4', '25', '10', '3'];
let newnum =[];
const paddedNum = text => {
    for(let i=0;i<text.length;i++){
        if(text[i]<10){
            newnum.push('0'+text[i]);
        }else{
            newnum.push(text[i]);
        }
    }
}
paddedNum(nums);
console.log(newnum);