const word = "hamlet";
let count =0;
for(let i= 0;i<word.length;i++){
    if(word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u'){
        break;
    }
    count++;
}
const pigLatin = text => {
    console.log(text.substring(count) + text.substring(0,count) + 'ay');
}
pigLatin(word);