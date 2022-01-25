import Character from "./Character";

const CharacterList = ( {data, filters, getSpecies} ) => {
    return (
        <>
        <ul>
            <Character data={data} filters={filters} />
        </ul>
        </>
    )
}

export default CharacterList;