import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Snackbar } from '@material/react-snackbar'
import { Grid, Cell, Row } from '@material/react-layout-grid'
import Card, { CardMedia } from '@material/react-card'

import '@material/react-snackbar/dist/snackbar.css';
import '@material/react-layout-grid/dist/layout-grid.css';

import { getPopular } from './actions'

class Popular extends Component {

    componentDidMount = () => {
        this.props.getPopular()
    }

    render() {
        const { data } = this.props.popular
        const { isFetching, message } = this.props.fetching
        return (
            <div>
                <Grid>
                    <Row>
                        {data.results && data.results.map(result =>
                            <Cell className="flex flex-center" columns={2}>
                                <img src={`https://image.tmdb.org/t/p/w300/${result.poster_path}`} />
                            </Cell>)}
                    </Row>
                </Grid>
                {isFetching && <Snackbar message={message} />}
                {message && <Snackbar message={message} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    popular: state.popular,
    fetching: state.fetching
})

const mapActionsToProps = (dispatch) => ({
    getPopular: () => dispatch(getPopular())
})

export default connect(mapStateToProps, mapActionsToProps)(Popular)