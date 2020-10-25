let inputData = document.getElementById("input-data");
let addBtn = document.getElementById("add-btn");
let footer = document.getElementById("footer");
let toDoTask = document.getElementsByClassName("to-do-task");
let checkbox = document.getElementsByClassName("checkbox");
let taskContent = document.getElementsByClassName("task-content");
let deleteBtn = document.getElementsByClassName("delete-btn");
let noThing = document.getElementById("nothing");

function deleteTodoTask() {
        deleteBtn[toDoTask.length - 1].addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });
}
function checkboxHandle(){
    let flag = true;
    checkbox[checkbox.length - 1].addEventListener('click', (e) =>{
        if(flag){
            e.target.parentElement.children[1].style.cssText = "text-decoration: line-through; color: grey";
            flag = !flag;
        }else{
            e.target.parentElement.children[1].style.cssText = "text-decoration: none; color: black";
            flag = !flag;
        }
        
    })
}
addBtn.addEventListener("click", () => {
    footer.insertAdjacentHTML("afterend", `
    <div class="checkboxs">
        <label class="to-do-task"><input style = 'margin: 0 20px;' type="checkbox" value="" class="checkbox"><input type="text" value="${inputData.value}" class = "to-do-tasks"><button class="delete-btn">Delete</button></label>
    </div>
    `);
    inputData.value = "";
    noThing.style.display = "none";
    deleteTodoTask();
    checkboxHandle();
});
inputData.addEventListener("keyup", function(event) {
    if (event.keyCode === 15) {
    event.preventDefault();
    addBtn.click();
}
});
