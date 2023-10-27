let a=document.getElementById("progress");
let b=document.getElementById("bar");
let c=document.getElementById("loading");

let barwidth=0;

const download=()=>{
        barwidth++;
        b.style.width=`${barwidth}%`

        setTimeout(()=>{
            c.innerHTML= (barwidth===100)? `${barwidth}% completed` :`${barwidth}% progress` 
        },1000)
}
download()

setTimeout(()=>{
let inter=setInterval(()=>{
        if(barwidth===100){
            clearInterval(inter);
        }
        else{
            download()
        }
},200)


},2000)
