import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPerson } from './actions';
import { Snackbar } from '@material/react-snackbar'
import '@material/react-snackbar/dist/snackbar.css';

class Person extends Component {

    componentDidMount() {
        const { id } = this.props.match.params.id
        this.props.getPerson(id)
    }

    render() {
        const { person } = this.props
        const { isFetching, message } = this.props.fetching
        return(
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} />
                <h3>{person.name}</h3>
                <p>{person.birthday}</p>
                <p>{person.biography}</p>
                {isFetching && <Snackbar message={message} />}
                {message && <Snackbar message={message}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    person: state.person,
    fetching: state.fetching
})

const mapActionToProps = (dispatch) => ({
    getPerson: (id) => dispatch(getPerson(id))
})

export default connect(mapStateToProps, mapActionToProps)(Person)