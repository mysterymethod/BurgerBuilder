import React, { Component } from 'react';
import axios from 'axios';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true});

        const  order = {
            ingredients: this.props.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Sunoy Chandra',
                address: {
                    street: 'Greater Kailash',
                    zipCode: '102351',
                    country: 'Brazil' 
                },
                email: 'test@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            });
    }

    render () {

        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="Your name" />
            <input className={classes.Input} type="email" name="Email" placeholder="Your name" />
            <input className={classes.Input} type="text" name="street" placeholder="Street" />
            <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />

            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>);

        if (this.state.loading) {
            form = <Spinner />;
        }



        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact data</h4>

                {form}
            </div>
        );
    }
}

export default ContactData;