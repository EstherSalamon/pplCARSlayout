import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import withRouter from './withRouter';
import axios from 'axios';
import CarRow from './CarRow';

class DeleteCars extends React.Component {

    state = {
        thisPerson: {
            id: '',
            firstName: '',
            lastName: '',
            age: '',
            cars: []
        }
    }

    componentDidMount = async () => {
        const id = this.props.params.id;
        const { data } = await axios.get(`/api/people/getbyid?id=${id}`);
        this.setState({ thisPerson: data });
    }

    letsCancel = () => {
        this.props.navigate('/');
    }

    getRidOfAll = async () => {
        await axios.post('/api/people/farewellcars', this.state.thisPerson.id);
        this.props.navigate('/');
    }

    render() {
        return (
            <>
                <div className='container' style={{ marginTop: 180 }}>
                    <h1>Delete all cars for {this.state.thisPerson.firstName} {this.state.thisPerson.lastName}?</h1>
                    <table className='table table-striped table-hover mt-5'>
                        <thead>
                            <tr>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.thisPerson.cars.map(p => <CarRow car={p} key={p.id} />) }
                        </tbody>
                    </table>
                    <br />
                    <div className='col-md-12'>
                        <span>
                            <button className='btn btn-primary w-50' onClick={this.letsCancel}>Cancel</button>
                        </span>
                        <span>
                            <button className='btn btn-danger w-50' onClick={this.getRidOfAll}>Delete</button>
                        </span>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(DeleteCars);