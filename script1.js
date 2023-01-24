window.onscroll = function(){
    scroll();
};

function scroll(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        console.log("scroll");
        // document.getElementsByClassName("scroll_header")= "0";
    }else{
        // document.getElementsByClassName("scroll_header").style.top = "-60px";
    }
}
// window.addEventListener("scroll", () => {

//     const scrolled = window.scrollY;

//     console.log(scrolled);
// })