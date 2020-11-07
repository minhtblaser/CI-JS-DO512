export function deleteTodoTask() {
    deleteBtn[toDoTask.length - 1].addEventListener("click", (e) => {
        e.target.parentElement.remove();
    });
}
export function checkboxHandle(){
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

export function addTask() { addBtn.addEventListener("click", () => {
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
}