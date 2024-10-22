var no_btn = document.getElementsByClassName("no")[0];
var yes = document.getElementsByClassName("yes")[0];
const width = window.screen.width;
const height = window.screen.height;
const min = 5;
const no_counter = 0;
// console.log(width, height);

no_btn.onclick = () =>{
    const rand_height = Math.floor(Math.random() * (height - min + 1)) + min;
    const rand_width = Math.floor(Math.random() * (width - min + 1)) + min;
    no_btn.style.top = `${rand_width/2}px`;
    no_btn.style.left = `${rand_height/2}px`;

}

yes.onclick= ()=>
{
    alert("YYAYAYYAYYIEIEI MWAHH MUEHEHEH");
}

// console.log(`height is ${height}, widht is ${width}`);
