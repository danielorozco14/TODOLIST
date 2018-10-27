window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {


            let element = document.createElement("li");
            //CREANDO BOTONES
            var botonMarcar = document.createElement("button");
            var botonEliminar = document.createElement("button");
            //COLOCANDO TEXTO A LOS BOTONES
            botonMarcar.innerText = "Marcar";
            botonEliminar.innerText = "Borrar";
            //AGREGA LOS BOTONES AL DOCUMENTO
            element.innerText = task;
            element.appendChild(botonMarcar);
            element.appendChild(botonEliminar);

            //ELIMINA LA LISTA
            botonEliminar.addEventListener("click", () => {
                let parent = element.parentNode;
                if (parent) {
                    parent.removeChild(element);
                }
            });

            // Añadir un boton para marcar de finalizado
            botonMarcar.addEventListener("click", () => {
                element.style.textDecoration = "line-through";
            });
           
            // Añadir un boton para marcar de finalizado
            botonMarcar.addEventListener("click", () => {
                element.style.textDecoration = "line-through";
            });
            // Elmine de la lista

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}