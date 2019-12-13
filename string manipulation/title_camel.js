const newTitle = "These Words Should Go In Pairs"
const newCamel = text => {
    text = text.toLowerCase();
    text = text.split(' ');
    let newtxt = [];
    let count =0;
    text.forEach( txt => {
        if(count%2 == 0){
            newtxt.push(" ");
        }
        newtxt.push(txt.charAt(0).toUpperCase() + txt.slice(1));
        count++;
    });
    newtxt = newtxt.join('');
    let newtxt1 = newtxt.split(" ");
    let ls=[];
    newtxt1.forEach(txt1 =>{
        ls.push(txt1.charAt(0).toLowerCase() + txt1.slice(1));
    })
    console.log(ls.join(' '));
}
newCamel(newTitle)
