const form = document.querySelector("form");


form.addEventListener('submit', e => {
    e.preventDefault()
    const data = new FormData(form);
    var output = "";
        
    for(const entry of data){
        output = `${output}${entry[0]}=${entry[1]}\r`;
        console.log(entry[1]);
    }
    
    fetch("datos.html", {
        method: "POST",
        body: JSON.stringify(data)
    })
        .then(response => {
            // Manejar la respuesta del servidor
            if (!response.ok) {
                throw new Error('Error al enviar datos al servidor');
            }
        })
        .catch(error => {
            // Manejar el error
            console.error("Error al enviar datos al servidor:", error);
        });
});
