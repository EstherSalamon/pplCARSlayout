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
        const { id } = this.state.thisPerson;
        await axios.post('/api/people/farewellcars', { PersonID: id });
        this.props.navigate('/');
    }

    render() {
        return (
            <>
                <div className='container' style={{ marginTop: 180 }}>
                    {!this.state.thisPerson.cars.length ?
                        <div>
                            <h1>{this.state.thisPerson.firstName} {this.state.thisPerson.lastName} does not have any cars. Consider adding some, and then we have something to talk about.</h1>
                            <br />
                            <div className='col-md-12'>
                                <span>
                                    <a href={`/addcar/${this.state.thisPerson.id}`} className='btn btn-primary w-50' >Add a Car</a>
                                </span>
                                <span>
                                    <a href='/' className='btn btn-danger w-50' >Return Home</a>
                                </span>
                            </div>
                        </div> : 
                    <div>
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
                                {this.state.thisPerson.cars.map(p => <CarRow car={p} key={p.id} />)}
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
                        </div>}
                </div>
            </>
        )
    }
}

export default withRouter(DeleteCars);