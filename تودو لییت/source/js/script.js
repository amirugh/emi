let deliteIcone = document.getElementsByClassName("delete")
let newTodo = document.getElementById("New-todo")
let newUl = document.querySelector("ul")
let unSubmit1 = document.querySelector(".add")
let listGroup = document.getElementsByClassName("list-group")

unSubmit1.addEventListener("submit",function(event){
    event.preventDefault()
})
function showTodo(newtodoValue){
    let newLi = document.createElement("li")
    newLi.className = "list-group-item d-flex justify-content-between align-items-center"
    let newspan = document.createElement("span")
    newspan.innerHTML= newtodoValue  
    let newitag = document.createElement("i")
    newitag.className = "fa fa-trash-o delete"   
    newitag.addEventListener("click",function(event){
        event.target.parentNode.remove()
    })
    newLi.append(newspan , newitag)
    newUl.append(newLi)

    newTodo.value = ""

}
newTodo.addEventListener("keydown",function(key){

    let newtodoValue = newTodo.value
if(newTodo){
      if(key.key==="Enter"){
        showTodo(newtodoValue)
    }
}

})