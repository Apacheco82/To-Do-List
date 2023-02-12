
let tarea = ""
let listaDeTareas = []

/*
crea un objeto nuevo con dos keys, 
se le pasa tarea como param 
isReady = false siempre
y la fecha
*/

const crearTarea = (tarea) => { 
  return {
  titulo : tarea,
  isReady : false,
  date : new Date()
}
}

/*esto le dice a cualquier input del formulario 
que coja los cambios*/

const form = document.querySelector("#formulario")

const imprimirLista = () => {

  const listaHtml = document.querySelector("#lista")
  let print = ""

  listaDeTareas.forEach(e => { //para recorrer la listaDeTareas y pintar cada e por separado

    // console.log(e.titulo) por ejemplo, para ver el titulo de cada tarea

   print += ` 
   <div class="card m-3" style="max-width: 18rem;">
      <div class="card-header bg-warning">${e.titulo}</div>
      <div class="card-body">
      <h5 class="card-title"></h5> 
      <p class="card-text">${e.date}</p>

    </div>
    </div>
    `
  });

  listaHtml.innerHTML = print //se guarda en una variable
}

/*
en formulario añadimos un eventlistener 
que crea una funcion arrow que se activa al hacer cambio (change) en el
form, recibe como param event SIEMPRE
*/

form.addEventListener("change", (event) => {

 /* console.log(event) 
 para saber las propiedades de evento
 (es un parametro de addEventListener, que es un objeto)
 */

 /*
 para devolver el valor dentro del input, 
 porque target es hacia donde apuntamos 
 y se guarda en value
 */
 tarea = event.target.value


})

form.addEventListener("submit", (event) =>{
  event.preventDefault() //para evitar que se recargue la pag al darle enviar
  crearTarea(tarea) //la funcion para crear una tarea que crea el objeto 

  /*se puede crear una variable con crearTarea(tarea) para llamar a la funcion
  y luego pushearla al array de lista de tareas
  ejemplo: let tareaFinal = crearTarea(tarea)
  y abajo sería listaDeTareas.push(tareafinal)*/

  listaDeTareas.push(crearTarea(tarea)) //para meter la funcion que crea los objetos
  imprimirLista() //para imprimir la lista en html

})

window.onload = () => {
  imprimirLista()
}




