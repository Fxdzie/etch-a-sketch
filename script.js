const container = document.querySelector(".container");
const layoutButton = document.querySelector(".layout-change");

const layout = (numSide)=>{
    for(let i = 0; i < numSide; i++){
        container.appendChild(document.createElement("div"));
    }

    const rows = document.querySelectorAll(".container > div");
    rows.forEach((row)=>{
        for(let i=0;i<numSide;i++){
            const temp = document.createElement("div");
            temp.addEventListener("mouseover",()=>{temp.style.backgroundColor="pink"})
            row.appendChild(temp);
        }
    });
}

layout(16);
layoutButton.addEventListener("click",()=>{
    let num = prompt("How many squares per side would you like? (Max: 100)");
    while(num > 100){
        num = prompt("Oops, too many too handle. Try lower.");
    }
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    layout(num);
});



