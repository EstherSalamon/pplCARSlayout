import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import withRouter from './withRouter';
import axios from 'axios';

class DeleteCars extends React.Component {

    state = {
        thisPerson: {
            id: '',
            firstName: '',
            lastName: '',
            age: ''
        },
        cars:[]
    }

    componentDidMount = async () => {
        //const response = axios.get(`/api/people/getthisone?id=${this.props.params.id}`);
        //this.setState({ thisPerson: response.data });
        const id = this.props.params.id;
        const { data } = await axios.get(`/api/people/getbyid?id=${id}`);
        this.setState({ thisPerson: data });
    }

    render() {
        return (
            <>
                <div className='container' style={{ marginTop: 180 }}>
                    <h1>Delete all cars for {this.state.thisPerson.lastName} {this.state.thisPerson.firstName}</h1>
                    <table className='table table-striped table-hover mt-5'>
                        <thead>
                            <tr>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default withRouter(DeleteCars);