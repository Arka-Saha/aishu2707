let txt = document.querySelector(".txt")

arr = ["Mah", "babeyy na", "I", "love", "You na", "sosoo muchhie", "okie.", "Weee", "heheh", "ssososo maneyyy", "1 year 8 months", "dundun ehheeh", "and", "I know", "we makeeeyyy", "ish", "infinity years", "okie.", "sowwyy na", "this time", "I didn't", "makeeyyy", "muchhh special", "thingeyy", "meow ...", "I", "was", "makeeyy", "a", "different", "thing okie", "me showeeyy ya", "nexttey", "time", "eheheheh", "mwahhhhhhhhhhh"]
// arr = ['hehe']
let i = 0;
let l = arr.length;
let intv = setInterval(()=>{
    if(i==l){
        window.open("images.jpeg");
        clearInterval(intv);
    }else{
    txt.textContent = arr[i];
    i++;}

}, 1400)
