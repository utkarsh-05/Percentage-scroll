var value = document.getElementById('zero');
window.scrollBy(0,1000000);
var maxi= window.pageYOffset;
window.scrollBy(0,-100000);
// console.log("maxi is "); 
// console.log('hello');
document.addEventListener('scroll',function(){
    // console.log('scrolled ');
    console.log(maxi);
    var cur = window.pageYOffset;
    var per = (cur/maxi)*100;
    per = Math.floor(per);
    value.innerHTML = per + "";
    console.log
})