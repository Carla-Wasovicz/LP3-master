import getData from "./api.js";

const apiData = document.querySelector('.api-data')
const filtrarNivel = document.querySelector('.filtrar-nivel')

function rendCursos(listaDeCursos){
    listaDeCursos.forEach(async function(curso)  {
        apiData.innerHTML+=`
        <div class="card m-2">
            <section class="card-body">
                <h6 class="card-title">${curso.id}</h6>
                <p>
                    Nome do Curso: ${curso.nomeCurso}
                </p>
                <p>
                    Nível: ${curso.nivel}
                </p>
                <p>
                    Duração: ${curso.duracao}
                </p>
                <p>
                Municipio: ${curso.municipio}
            </p>
            </section>
        </div>
    `
         
    })  
}
async function listarCursos(){
    const response= await getData('cursos')
    const listaDeCursos = Array.from(response.data)
    rendCursos (listaDeCursos)

   
}
async function buscar(query){
    const response = await getData(` cursos?q=${query}`)
    const ListaDeCursos = Array.from(response.data)
    apiData.innerHTML+=""
    rendCursos(listaDeCursos)
       
}
async function listarNiveis(){
   
    const response = await getData(`niveis`)
    const filtrarNiveis = Array.from(response.data)
    filtrarNiveis.forEach(function(niveis){
        filtrarNivel.innerHTML+=`<option value="${niveis.nivel}">${niveis.nivel}</option>`
    })
}

const btnBuscar = document.querySelector('.btn-buscar')
const inputSearch = document.querySelector('input[type=search]')
btnBuscar.addEventListener('click',function(){
    buscar(inputSearch.value)
})
filtrarNivel.addEventListener('change',function(){
    buscar(filtrarNivel.value)
})



listarCursos()
listarNiveis()

  






