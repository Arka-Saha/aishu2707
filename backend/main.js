const next_btn = document.getElementById('btn');
let count = 0;
const img_boi = document.getElementsByClassName('img-boi')[0];
const img_girl = document.getElementsByClassName('img-girl')[0];


const bois = [
    "businessprop-3.jpeg",
    "crashland-1.webp",
    "herprivate-1.jpeg",
    "kingtheland-1.jpeg",
    "lovenextdoor-1.webp",
    "mydemon-1.jpeg",
    "plankton-1.jpeg",
    "tears-2.avif",
    "watermelon-2.webp",
    "whenifly-2.webp"
]

const girls = [
    "businessprop-4.jpeg",
    "crashland-2.jpeg",
    "herprivate-2.png",
    "kingtheland-2.webp",
    "lovenextdoor-2.jpeg",
    "mydemon-2.jpeg",
    "plankton-2.jpeg",
    "tears-1.jpeg",
    "watermelon-1.jpeg",
    "whenifly-1.webp"
]


next_btn.onclick= ()=>
{
    // next_btn.disabled = true;
    setTimeout(()=>
    {next_btn.focus()}, 500);
    console.log(bois[count], girls[count])
    img_boi.src = `imgs/${bois[count]}`
    img_girl.src = `imgs/${girls[count]}`
    img_boi.alt = `imgs/${bois[count]}`
    img_girl.alt = `imgs/${girls[count]}`
    
    count+=1
    if (count ===11){alert('hehe')}
}
