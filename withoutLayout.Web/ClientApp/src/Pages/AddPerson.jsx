import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import withRouter from './withRouter';
import axios from 'axios';

class AddPerson extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        age: ''
    }

    weClickedAdd = async () => {

        const { firstName, lastName, age } = this.state;
        await axios.post('/api/people/add', { firstName, lastName, age });
        this.props.navigate('/')
    }

    typingHasAccured = () => {
        const property = e.target.name;
        this.setState({ property: e.target.value });
        //didnt check if this version works. what must i do to use immer?
    }

    weTypedFN = e => {
        this.setState({ firstName: e.target.value })
    }

    weTypedLN = e => {
        this.setState({ lastName: e.target.value })
    }

    weTypedA = e => {
        this.setState({ age: e.target.value })
    }

    render() {
        return (
            <div className='container' style={{ marginTop: 180 }}>
                <div className='row'>
                    <div className='col-md-4 offset-4'>
                        <input type='text' placeholder='First Name' name='firstName' className='form-control w-100' onKeyUp={this.weTypedFN}></input>
                        <input type='text' placeholder='Last Name' name='lastName' className='form-control w-100 mt-2' onKeyUp={this.weTypedLN}></input>
                        <input type='text' placeholder='Age' name='age' className='form-control w-100 mt-2' onKeyUp={this.weTypedA}></input>
                        <button className='btn btn-outline-primary w-100 mt-2' onClick={this.weClickedAdd}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddPerson);