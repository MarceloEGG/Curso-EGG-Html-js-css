
        function crearLibro() {
            const libro = {
                isbn: parseInt(document.getElementById("ISBN").value,
                titulo: document.getElementById("titulo").value,
                autor: document.getElementById("autor").value,
                numDePag: parseInt(document.getElementById("numDpag").value),
            };

            console.log(libro);
        }

        function mostrarLibro() {
            const libro = {
                isbn: parseInt(document.getElementById("ISBN").value),
                titulo: document.getElementById("titulo").value,
                autor: document.getElementById("autor").value,
                numDePag: parseInt(document.getElementById("numDpag").value),
            };

            document.getElementById("isbnSpan").textContent = libro.isbn;
            document.getElementById("tituloSpan").textContent = libro.titulo;
            document.getElementById("autorSpan").textContent = libro.autor;
            document.getElementById("numDpagSpan").textContent = libro.numDePag;
        }


       
    

