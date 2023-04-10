const nombre = "Angel";
const apellido = "Hernandez";
const estudiante = nombre.concat(" ").concat(apellido);
console.log(estudiante); //imprime "Angel Hernandez"

const estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus); //imprime "ANGEL HERNANDEZ"

const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus); //imprime "angel hernandez"

const num_estudent = estudiante.length;
console.log(num_estudent);// imprime el numero de letras y espacios = 15

const oneword = estudiante.charAt(0);
console.log(oneword); // imprime la primera letra del nombre = A

const endword = apellido.substring(apellido.length - 1);
console.log(endword); //imprime la ultima letra del apellido = Z

const sin_espacios = estudiante.replace(/ /g, "");
console.log(sin_espacios); //imprime "AngelHernandez"

const verificar = estudiante;
console.log(verificar.includes("Angel")); // imprime "true"
