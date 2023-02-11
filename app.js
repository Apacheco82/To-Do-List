window.onload = () => {
  document.querySelector("#button").addEventListener("click",() => {
    document.querySelector("#excuse").innerHTML = generadorExcusa()
  })
}


function generadorExcusa() {
  let who = [
    "Mi gato",
    "Su abuela",
    "El loro del vecino",
    "Pikachu",
    "El repartidor de Amazon",
    "Tu prima la del pueblo",
    "El profesor"
  ];
  let what = ["se lo comió", "lo rompió", "explotó", "escupió"];
  let when = [
    "después de clase",
    "justo a tiempo",
    "cuando había terminado",
    "mientras comía",
    "cuando me estaba duchando",
    "cuando iba a finalizar"
  ];
  let primer = Math.floor(Math.random() * who.length);
  let segundo = Math.floor(Math.random() * what.length);
  let tercer = Math.floor(Math.random() * when.length);



  let output = `${who[primer]} ${what[segundo]} ${when[tercer]}`

 return output
};
