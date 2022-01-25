import ListItem from "./ListItem";

const List = ( {data, filters} ) => {
    return (
        <>
        <ul>
            <ListItem data={data} filters={filters} />
        </ul>
        </>
    )
}

export default List;