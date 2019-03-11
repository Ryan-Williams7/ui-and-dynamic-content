const userInput = document.getElementById("user-input");
const btn = document.getElementById("trigger-click");
const displayData = document.getElementById("display-data");
const err = document.querySelector(".error");


function addItem() {
    err.textContent = null;

    userInput.value = userInput.value.trim();

    if (userInput.value !== ""){
        let listItem = document.createElement("li");

        listItem.textContent = userInput.value;

        displayData.appendChild(listItem);
        } else {
            err.textContent = "Nothing Entered.";
        }
    
    document.getElementById('user-input').value=null;
    
    document.getElementById('user-input').focus();
}
 
btn.addEventListener("click", addItem);
