function randomNumber() {
    let randomNumber= Math.floor(1000 + Math.random() * 9000);
    return randomNumber;
}

function getPinNumber() {
  let output = document.getElementById("generatedOutput").value;
  return output
}

function getOutput() {
  let output = document.getElementById("pushedOutput").value;
  return output
}

function pushedOutput(num) {
  document.getElementById("pushedOutput").value = num;
}


let generatPins = document.getElementById('generate-btn');
generatPins.addEventListener('click',function () {
    let output = randomNumber()
    
    let pinDisplay =document.getElementById("generatedOutput");
    pinDisplay.setAttribute("value", output);

    notify("notify");
  })


let number =document.getElementsByClassName("button");
for (let i = 0; i < number.length; i++) {
    const numberButton = number[i];
    numberButton.addEventListener("click", function(){
        let output = getOutput();
        console.log(output);
        console.log(this.id);
        if(this.id == "backSpace"){
            if(output != ""){
                output = output.slice(0,output.length-1);
                pushedOutput(output);
            }else{
                alert("output is empty")
            }
        }else if(this.id == "clear"){
            if(output.length != ""){
                pushedOutput("");
            }else{
                alert("input is already empty")
            }

        }else if(this.id != ""){
            if(output == ""){
                output = this.id;
                console.log(output);
                pushedOutput(output);
            }else if( output.length <= 3){
                output = output + this.id;
                console.log(output);
                pushedOutput(output);
            }else{
                alert('not more thene 4 number')
            }
        }
    })
}

function notify(className) {
    let greenMark = document.getElementsByClassName(className);
        for (let i = 0; i < greenMark.length; i++) {
            const element = greenMark[i];
            console.log(className);
            if(className == "notify"){
                element.style.display = "none";
            }else{
                element.style.display = "block";
            }
        }
}

let submitBtn =document.getElementById("submit");
// console.log(submitBtn);
let clickCount =0;
let clickCountReverce = 2;
submitBtn.addEventListener( "click" , function(){
    clickCount +=1;
    
    console.log(clickCount);
    let pinNumber = getPinNumber();
    let inputNumber = getOutput();
    console.log(pinNumber , inputNumber);
    if (pinNumber == inputNumber) {
        // alert("match");
        notify('matched')
    }else{
        if(clickCount <= 3){
            notify('notMatched')
            pushedOutput("");
            let actionLeft = document.getElementById("action-left");
            actionLeft.style.display ="block";
            actionLeft.innerText = clickCountReverce-- + " try left";
            if(clickCount == 3){
                submitBtn.style.display = "none" ;
                alert("Secret door is permanently lock")
                actionLeft.style.display ="block";
                console.log(actionLeft.innerText);
            }
            
        }
    }
})