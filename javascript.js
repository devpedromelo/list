const btn = document.querySelector("#push");
const input = document.querySelector("input");
const tasks = document.querySelector("#tasks");


btn.addEventListener('click', () => {
    if(input.value.length == 0){
        alert("Please Enter a Task")
    }else{
        tasks.innerHTML += 
        `<div class="task">
            <span id="taskname">
                ${input.value}
            </span>
            <button class="delete">
                <span class="material-symbols-outlined">
                    delete_forever
                </span>
            </button>
        </div>`;

        const currentTask = document.querySelectorAll(".delete");
        for(var i=0; i<currentTask.length; i++){
            currentTask[i].onclick = function(){
                this.parentNode.remove();
            }
        };

        var task = document.querySelectorAll(".task")
        for(var i=0; i<task.length; i++){
            task[i].onclick = function(){
                this.classList.toggle("completed");
            }
        };
    }

    input.value = ''
});