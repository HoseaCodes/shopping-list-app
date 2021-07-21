import React from 'react'
import { Button } from 'react-bootstrap';



const ButtonFilter = (props) => {
    return (
        <>

            <Button variant={'outline-secondary'} onClick={() => props.updateItemsShow("All")}>All</Button>
            <Button variant={'outline-secondary'} onClick={() => props.updateItemsShow("Food")}>Food</Button>
            <Button variant={'outline-secondary'} onClick={() => props.updateItemsShow("Drinks")}>Drinks</Button>
            <Button variant={'outline-secondary'} onClick={() => props.updateItemsShow("Misc")}>Misc</Button>

        </>

    )
}


export default ButtonFilter;