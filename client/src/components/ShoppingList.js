import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

export default function ShoppingList() {

    const initialItems = {
        items: [
            { id: uuidv4(), name: 'eggs' },
            { id: uuidv4(), name: 'milk' },
            { id: uuidv4(), name: 'butter' },
            { id: uuidv4(), name: 'cheese' },
        ]
    }

    const [items, setItems] = useState(initialItems);

    return (
        <Container>
            <Button color="dark" style={{marginBottom: '2rem'}} onClick={
                () => {
                    console.log(items);                
                    const name = prompt('Enter Item Name');
                    if(name) {
                        setItems( items => ({
                            items: [...items, {id: uuidv4(), name}]
                        })
                    })
                }
            }>Add Item</Button>
        </Container>
    )
}

