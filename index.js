//Información de fechas

const fechaNumero = document.getElementById("fechaNumero");
const fechaTexto = document.getElementById("fechaTexto");
const fechaMes = document.getElementById("fechaMes");
const fechaAnio = document.getElementById("fechaAnio");

//Container de Tareas

const tareasContainer = document.getElementById("tareasContainer");

//Función para setear fechas
const setFecha = () => {
    const fecha = new Date();
    fechaNumero.textContent = fecha.toLocaleString('es', { day: 'numeric' });
    fechaTexto.textContent = fecha.toLocaleString('es', { weekday: 'long' });
    fechaMes.textContent = fecha.toLocaleString('es', { month: 'short' });
    fechaAnio.textContent = fecha.toLocaleString('es', { year: 'numeric' });
};

//preventDefault para que el form no haga un submit y nos lleve a otro página, con esto lo evitamos
const agregarNuevaTarea = event => {
    event.preventDefault();
    const { value } = event.target.pruebaTarea;
    if (!value) return;
    const tarea = document.createElement('div');
    tarea.classList.add('tarea', 'bordeRedondeado');
    tarea.addEventListener('click', cambioEstadoTareas)
    tarea.textContent = value;
    tareasContainer.prepend(tarea);
    event.target.reset();

};
const cambioEstadoTareas = event => {
    event.target.classList.toggle("done");
}

//Ordenar tareas

const ordenarTareas = () => {
    const hecho = [];
    const porHacer = [];
    tareasContainer.childNodes.forEach( t => {
        t.classList.contains('done') ? hecho.push(t) : 
        porHacer.push(t)
    })
    return [...porHacer, ...hecho];
}

const tareasOrdenadas = () => {
    ordenarTareas().forEach(t => tareasContainer.appendChild(t));
}

setFecha();