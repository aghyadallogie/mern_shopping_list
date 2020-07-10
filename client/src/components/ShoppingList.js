import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

export default class ShoppingList extends Component {
    state = {
        items: [
            { id: uuidv4(), name: 'eggs' },
            { id: uuidv4(), name: 'milk' },
            { id: uuidv4(), name: 'butter' },
            { id: uuidv4(), name: 'cheese' },
        ]
    }
    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button color="dark" style={{marginBottom: '2rem'}} onClick={() => {
                    const name = prompt('Enter Item Name');
                    if (name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuidv4(), name }]
                        }));
                    }
                    }}>Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {
                            items.map(item => (
                                <CSSTransition key={item.id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button className="remove-btn" color="danger" size="sm"
                                        onClick={()=>{
                                            this.setState(state => ({
                                                items: state.items.filter(el => el.id !== item.id)
                                            }));
                                        }}
                                        >&times;</Button>
                                        {item.name}</ListGroupItem>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
    }
}


