const btn = document.querySelector("#push");
const input = document.querySelector(" input");
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
    }
})