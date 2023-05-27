const listaCompras = [
    "Leche",
    "Huevo",
    "Aceite",
    "Jamon",
    "Jabon",
];
console.log(listaCompras);//Leche, Huevo, Aceite, Jamon, Jabon

listaCompras.push("Aceite Girasol");
console.log(listaCompras);//Leche, Huevo, Aceite, Jamon, Jabon, Aceite de Girasol

listaCompras.pop();
console.log(listaCompras);//Leche, Huevo, Aceite, Jamon, Jabon

const pelis = [
    {Titulo: "Rapidos y Furiosos 9", Director: "Justin Lin", Fecha: new Date("junio 24 2021")},
    {Titulo: "Scream 3", Director: "Wes Craven", Fecha: new Date("marzo 17 2000")},
    {Titulo: "Transformers 5", Director: "Michael Bay", Fecha: new Date("junio 21 2017")}
]
const filtrofecha = pelis.filter(pelicula => {
      return pelicula.Fecha >= new Date(2010, 0, 01);

})

console.log(filtrofecha);

const directorespelis = pelis.map((pelicula, index) =>{
    const directorindice = `${index + 1}. ${pelicula.Director}`;
    return directorindice;
})

console.log(directorespelis)


const titulospelis = pelis.map((title, index) =>{
  const titulodepeli = `${index + 1}. ${title.Titulo}`
  return titulodepeli
})

console.log(titulospelis);

const unirlistconcat = titulospelis.concat(directorespelis)

console.log(unirlistconcat)

const unirlist = [...directorespelis, ...titulospelis];

console.log(unirlist)