function saludar() {
    var saludo = 'Holaaa';
    console.log(saludo);

    if (saludo === 'Holaaa') {
        console.log(`Te estan saludando ${saludo}!`);
    }
}

saludar();

console.log(saludo); //Esta linea mostrara error ya que la variable solo tiene un alcance dentro de la funcion