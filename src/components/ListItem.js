const ListItem = ( {data, filters} ) => {
    return (
        data
        .filter(eachData => {
            return eachData.name.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase())
        })
        .map((eachData, index) => {
            return(
            <li key={index}>
                <img src={eachData.image === '' ? 'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter' : eachData.image} alt={`Imagen de ${eachData.name}`} />
                <p>{eachData.name}</p>
                <p>{eachData.species}</p>
            </li>
            )
        })
    )
}

//Cambiar el placeholder de la imagen y hacer esa función fuera del html
export default ListItem;