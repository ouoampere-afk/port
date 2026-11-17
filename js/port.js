const port = document.querySelector(".port");
console.log(port);
fetch("./js/port.json")
  .then((response) => response.text())
  .then((text) => {
    console.log(text);
    
    const data = JSON.parse(text);
    console.log(data)
    for (const one of data) {
        const div= document.createElement("div")    
        const img= document.createElement("img")
        const ul= document.createElement("ul")
        
        img.src = one.image
        img.alt = "pic"
        img.height = "200"
        img.style.borderRadius= "20px"

        
        div.append(img);

        for (const liss of one.text) {
            const lis = document.createElement("li")
            lis.textContent= liss
            lis.style.fontSize = "20px"
            ul.append(lis)
            div.append(ul)
        }

        port.append(div)
     }

    // <div>
    //         <img src="https://tcas70.s3.ap-southeast-1.amazonaws.com/folio/1100704085469/6a914aa1df22dae082737149/6ac7a63121cd32de0f0ef99f-activityFiles0_1a0689de6f05db05f.jpg?AWSAccessKeyId=AKIAUD5IGFZRJAK4ENV3&Expires=1794904898&Signature=OHLQ44XgYOqm8DOGdEqOhgccga8%3D" alt="pic" height="200px">
    //         <ul>
    //             <li>CS camp</li>
    //             <li>java</li>
    //         </ul>
    // </div>
});