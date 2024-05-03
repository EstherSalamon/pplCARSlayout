import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import withRouter from './withRouter';

class AddCar extends React.Component {

    render() {
        return (
            <div className='container' style={{ marginTop: 180 }}>
                <h1>this guy's id is: {this.props.params.id}</h1>
                <div className='row'>
                    <div className='col-md-4 offset-4'>
                        <input type='text' placeholder='Make' name='make' className='form-control w-100'></input>
                        <input type='text' placeholder='Model' name='model' className='form-control w-100 mt-2'></input>
                        <input type='text' placeholder='Year' name='year' className='form-control w-100 mt-2'></input>
                        <button className='btn btn-outline-primary w-100 mt-2'>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddCar);