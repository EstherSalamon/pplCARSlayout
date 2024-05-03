import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: '',
            cars: []
        },
        car: {
            make: '',
            model: '',
            year: ''
        }
    }

    componentDidMount = () => {
        this.refreshPeople();
    }

    refreshPeople = async () => {
        const response = await axios.get('/api/people/getpeople');
        this.setState({ people: response.data });
    }

    render() {
        return (
            <div className='container' style={{ marginTop: 80 }}>
                <div className='col-md-3 offset-8'>
                    <div className='row'>
                        <Link to='/AddPerson'>
                            <button className='btn btn-outline-success'>Add Person</button>
                        </Link>
                    </div>
                </div>
                <table className='table table-striped table-hover table-bordered mt-3'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Cars</th>
                            <th>Add Car</th>
                            <th>Delete cars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!this.state.people.length && this.state.people.map(p => <TableRow person={p} key={p.id}></TableRow>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;