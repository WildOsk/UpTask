export const actualizarAvance = () => {
    //seleccionare las tareas existentes
    const tareas = document.querySelectorAll('li.tarea');
    
    if(tareas.length){
        //seleccionar las tareas completadas
        const tareasCompletas = document.querySelectorAll('i.completo');

        //calcular avance
        const avance = Math.round((tareasCompletas.length / tareas.length) * 100);
        
        //mostrar avances
        const porcentaje = document.querySelector('#porcentaje');
        porcentaje.style.width = avance + "%";

        if(avance === 100){
            alert('completaste el proyecto');
        }
    }
}