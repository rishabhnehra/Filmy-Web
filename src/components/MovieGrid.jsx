import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Grid, Cell, Row } from '@material/react-layout-grid'

import '@material/react-layout-grid/dist/layout-grid.css';

const MovieGrid = ({ data, history }) => {
    return (
        <Grid>
            <Row>
                {data.results && data.results.map(result =>
                    <Cell key={result.id} onClick={() => history.push(`/movie/${result.id}`)} className="flex flex-center" columns={2}>
                        <img src={`https://image.tmdb.org/t/p/w300/${result.poster_path}`} alt={result.title} />
                    </Cell>)}
            </Row>
        </Grid>
    )
}

MovieGrid.propTypes = {
    data: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
}

export default withRouter(MovieGrid)
