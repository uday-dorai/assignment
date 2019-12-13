const camelCase = "the simplestThings in LIFE are alwaysThe best"
const titleCase = text => {
text= text.split(' ');
let newtxt =[];
let newtxt1 =[];
text.forEach(str1 =>{
    let count =0;
    if(str1[0] == str1[0].toLowerCase()){
        for(let i=0;i<str1.length;i++){
            if(str1[i] == str1[i].toUpperCase()){
                newtxt1.push(str1.substring(0,i));
                newtxt1.push(str1.substring(i,str1.length));
                break;
            }
            count++;
        }
        if(count == str1.length){
            newtxt1.push(str1);
        }
    }else{
        newtxt1.push(str1);
    }
});
//console.log(newtxt1);

newtxt1.forEach(str => {
    newtxt.push(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
});
console.log('\n'+newtxt.join(' ')+'\n');
}
titleCase(camelCase)