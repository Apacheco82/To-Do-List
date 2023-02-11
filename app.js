
let todo = ""



const formToDo = document.querySelector("#formTodo")

console.log(formToDo)


const toDoList = [{
  title: "",
  descripcion : "",
  isReady: false,
  date : new Date()
}]

formToDo.addEventListener("change", (event) => {
  console.log(event.target.value)

})





