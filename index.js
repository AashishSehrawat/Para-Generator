const generateWord = (n)=>{
    let text="";
    const letters = "qwertyuioplkjhgfdsazxcvbnm";
    for(let i=0; i<n; i++){
        const random = Math.floor(Math.random()*(letters.length-1));
        text += letters[random];
    }
    return text;
}

const input = document.getElementById("noOfWords");
const container = document.querySelector(".container");

const generatePara = ()=>{
    let noOfWords = Number(input.value);

    const para = document.createElement("p");

    let data ="";
    for(let i=0; i<noOfWords; i++){
        const random = Math.floor(Math.random()*15);
        data += generateWord(random);
        data += " ";
    }

    para.innerText = data;
    para.setAttribute("class","paras");
    container.append(para);
}