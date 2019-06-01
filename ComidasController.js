const comidas = {
    pratosFavoritos: []
}

const getAll = () => {
    return comidas
}




const add = (comida) => {
    comida.id = Math.random().toString(36).substr(-8)
    getAll().pratosFavoritos.push(comida)

}


const remove = (id) => {
    let comidasQueFicaram = getAll() 
    {
            comidasQueFicaram.pratosFavoritos.filter((comida) => {

        })


   return comida !== id

  }



module.exports = {
    getAll,
    add,
    remove

}


