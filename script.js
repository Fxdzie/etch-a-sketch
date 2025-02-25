const container = document.querySelector(".container");

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



