const accordionContent = document.querySelectorAll(".accordion");

accordionContent.forEach((item,index )=> {
    let header = item.querySelector(".accordion_header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".accordion_collapse");
        if(item.classList.contains(open)){
            description.style.height = `${description.scrollHeight}px`;
            // description.style.height = "100px";
            item.querySelectorAll(".accordion_header button").classList.replace("fa-angle-down", "fa-angle-up");
        }else{
            // description.style.height = "0px";
            description.style.background = "red";
        }
        console.log(description);
    })
    
});
