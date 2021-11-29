
///    THEMES    ///
if(localStorage.getItem('theme') == 'light'){
    setTheme('light')
}else if(localStorage.getItem('theme') == 'dark'){
    setTheme('dark')
}else{
    setTheme('light')
}

function switchThemes(){
    if( localStorage.getItem("theme") == 'light'){
        setTheme('dark')
    }else{
        setTheme('light')
    }
}

document.getElementsByClassName("themeIcon")[0].addEventListener('click', switchThemes)

function setTheme(theme){
    document.body.className = `${theme}Theme`;
    localStorage.setItem('theme', theme);
}



///    BRAINS    ///
function markUndone(todoId){
    const toMarkUndoneTodo = document.getElementById(todoId);
    const leftTodos = document.getElementsByClassName("left-todos")[0];
    toMarkUndoneTodo.remove();

    toMarkUndoneTodo.firstElementChild.setAttribute( "onClick", `javascript: markDone('todo${leftTodos.childElementCount+1}');` );
    toMarkUndoneTodo.lastElementChild.setAttribute( "onClick", `javascript: deleteTodo('todo${leftTodos.childElementCount+1}');` );
    toMarkUndoneTodo.id = `todo${leftTodos.childElementCount+1}`;
    leftTodos.innerHTML += toMarkUndoneTodo.outerHTML;
    
    const itemsLeftText = document.getElementById("itemsLeft");
    itemsLeftText.innerHTML = leftTodos.childElementCount;

    saveTodo()
}

function markDone(todoId){
    const toMarkDoneTodo = document.getElementById(todoId);
    const leftTodos = document.getElementsByClassName("left-todos")[0];
    const doneTodos = document.getElementsByClassName("done-todos")[0];
    toMarkDoneTodo.remove();

    toMarkDoneTodo.firstElementChild.setAttribute( "onClick", `javascript: markUndone('doneTodo${doneTodos.childElementCount+1}');` );
    toMarkDoneTodo.lastElementChild.setAttribute( "onClick", `javascript: deleteTodo('doneTodo${doneTodos.childElementCount+1}');` );
    toMarkDoneTodo.id = `doneTodo${doneTodos.childElementCount+1}`;
    doneTodos.innerHTML += toMarkDoneTodo.outerHTML;
    
    const itemsLeftText = document.getElementById("itemsLeft");
    itemsLeftText.innerHTML = leftTodos.childElementCount;

    saveTodo()
}

function deleteTodo(todoId){
    const toRemoveTodo = document.getElementById(todoId);
    toRemoveTodo.remove();
    console.log(toRemoveTodo.outerHTML);
    const leftTodos = document.getElementsByClassName("left-todos")[0];
    const itemsLeftText = document.getElementById("itemsLeft");
    itemsLeftText.innerHTML = leftTodos.childElementCount;

    saveTodo()
}


const todoInput = document.getElementById("newTodoInput");
todoInput.addEventListener("keydown", function (e) {
    
    if (e.code === "Enter") {
        if (!todoInput.value.trim() == ''){
            console.log('worked');
            createTodo(todoInput.value);
            todoInput.value = '';
        }
    }
});
// runs after everything is loaded
const doneTodos = document.getElementsByClassName("done-todos")[0];
const leftTodos = document.getElementsByClassName("left-todos")[0];
var strLeftTodos = JSON.parse(localStorage.getItem("allTodos"))[1]; 
var strDoneTodos = JSON.parse(localStorage.getItem("allTodos"))[0];
for(child of strLeftTodos){
    leftTodos.innerHTML += child;
}
for(child of strDoneTodos){
    doneTodos.innerHTML += child;
}

const itemsLeftText = document.getElementById("itemsLeft");
itemsLeftText.innerHTML = leftTodos.childElementCount;


function createTodo(todo){
    const leftTodos = document.getElementsByClassName("left-todos")[0];
    
    var newTodo = `
    <div  id="todo${leftTodos.childElementCount+1}" class="todo">
        <div onclick="markDone('todo${leftTodos.childElementCount+1}')" class="checkbox-field"></div>
        <input type="text" value="${todo}">
        <img class="cross-image" onclick="deleteTodo('todo${leftTodos.childElementCount+1}')" src="images/icon-cross.svg" alt="crossIcon">
    </div>`;

    leftTodos.innerHTML += newTodo;
    
    const itemsLeftText = document.getElementById("itemsLeft");
    itemsLeftText.innerHTML = leftTodos.childElementCount;

    saveTodo()

}

function saveTodo(){ 
    var allTodoHTMLs = [
        [], //done todos
        []  //left todos 
    ];
    const allTodos = document.getElementsByClassName("todo");
    
    for(i=1; i < allTodos.length; i++){
        if(allTodos[i].id.includes("doneTodo")){
            allTodoHTMLs[0].push(allTodos[i].outerHTML);
        }else{
            allTodoHTMLs[1].push(allTodos[i].outerHTML);
        }
    }
    localStorage.setItem("allTodos", JSON.stringify(allTodoHTMLs));
    // console.log("saved))");
}

function clearCompleted(){
    const doneTodos = document.getElementsByClassName("done-todos")[0];
    for(i=0; i < doneTodos.childNodes.length; i++){
        if(doneTodos.childNodes[i].nodeName == 'DIV'){
            console.log(doneTodos.childNodes[i]);
            doneTodos.childNodes[i].remove();
        }
        console.log(doneTodos.childNodes[i]);
    }
    saveTodo();
}

function showSort(type, element){
    const sortingCont = document.getElementsByClassName("sorting")[0];
    const leftTodos = document.getElementsByClassName("left-todos")[0];
    const doneTodos = document.getElementsByClassName("done-todos")[0];

    for(child of sortingCont.children){
        child.style.color = 'hsl(236, 9%, 61%) ';
        // child.style.cssText = ':hover{color: hsl(235, 19%, 35%)}';
    }
    if(type == 'all'){
        element.style.color = 'hsl(220, 98%, 61%)';
        leftTodos.style.display = 'block';
        doneTodos.style.display = 'block';
    }else if(type == 'active'){
        element.style.color = 'hsl(220, 98%, 61%)';
        leftTodos.style.display = 'block';
        doneTodos.style.display = 'none';
        
    }else if(type == 'completed'){
        element.style.color = 'hsl(220, 98%, 61%)';
        leftTodos.style.display = 'none';
        doneTodos.style.display = 'block';

    }
}