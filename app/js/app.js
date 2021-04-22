const apiData = document.querySelector('.api-data')
const filtrarNivel = document.querySelector('.filtrar-nivel')

async function listarCursos(){
    const url = 'http://localhost:3000/cursos'
    const response = await axios.get(url)
    const ListaDeCursos = Array.from(response.data)

    ListaDeCursos.forEach(async function(curso)  {
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
async function buscar(query){
    const url =  `http://localhost:3000/cursos?q=${query}`
    const response = await axios.get(url)
    const ListaDeCursos = Array.from(response.data)
   
    ListaDeCursos.forEach(function(curso)  {
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
async function ListarNiveis(){
    const url =`http://localhost:3000/niveis`
    const response = await axios.get(url)
    const ListarNiveis = Array.from(response.data)
    ListarNiveis.forEach(function(niveis){
        filtrarNivel.innerHTML+=`<option value="${niveis.nivel}">${niveis.nivel}</option>`
    })
}

const btnBuscar = document.querySelector('.btn-buscar')
const inputSearch = document.querySelector('input[type=search]')
btnBuscar.addEventListener('click',function(){
    search(inputSearch.value)
})
filtrarNivel.addEventListener('change',function(){
    search(filtrarNivel.value)
})


listarCursos()
ListarNiveis()

  






