const container = document.querySelector(".container");
const defaultLayout = document.createElement("div");

const layout = (numSide)=>{
    for(let i = 0; i < numSide; i++){
        container.appendChild(document.createElement("div"));
        // for(let j =0 ;j <numSide; i++){
            
        // }
    }

    const rows = document.querySelectorAll(".container > div");
    rows.forEach((row)=>{
        for(let i=0;i<numSide;i++){
            row.appendChild(document.createElement("div"));
        }
    });
}

layout(64);