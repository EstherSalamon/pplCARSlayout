import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import withRouter from './withRouter';
import axios from 'axios';

class AddCar extends React.Component {

    state = {
        car: {
            make: '',
            model: '',
            year: '',
            personID: ''
        }
    }

    couldWePleaseAddACar = async () => {
        const { make, model, year } = this.state;
        const { id } = this.props.params.id;

        if (id === 0) {
            this.props.navigate('/');
        }

        await axios.post('api/people/addcar', { make, model, year, id });
        this.props.navigate('/');
    }

    typingInMake = e => {
        this.setState({ make: e.target.value });
    }

    typingInModel = e => {
        this.setState({ model: e.target.value });
    }

    typingInAge = e => {
        this.setState({ age: e.target.value });
    }

    render() {
        return (
            <div className='container' style={{ marginTop: 180 }}>
                <div className='row'>
                    <div className='col-md-4 offset-4'>
                        <input type='text' placeholder='Make' name='make' className='form-control w-100'></input>
                        <input type='text' placeholder='Model' name='model' className='form-control w-100 mt-2'></input>
                        <input type='text' placeholder='Year' name='year' className='form-control w-100 mt-2'></input>
                        <button className='btn btn-outline-primary w-100 mt-2' onClick={this.couldWePleaseAddACar}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddCar);