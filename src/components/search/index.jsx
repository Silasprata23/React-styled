import ListSearch from "../list_search/index.jsx";
import styled   from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 33px;
    align-items: center;
    width: 436px;
    height: 892px;
    background: #FF5875;
    padding: 88px;
`

export default function Search (){
    return (
        <Card>
            <ListSearch title={'Cars'} subtitle={'New & Used Cars'}/>
            <ListSearch title={'Model'} subtitle={'Mercedes Benz'}/>
            <ListSearch title={'Type'} subtitle={'AMG CLA COUPE '}/>
            <ListSearch title={'Price'} subtitle={'Any Type'}/>
            <ListSearch title={'Near by'} subtitle={'100 Miles'}/>
            <ListSearch title={'Zip Code'} subtitle={'zip code'}/>

            <button>Search</button>
        </Card>
    )
}