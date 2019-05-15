import React, { Component } from 'react'
import TopAppBar, {
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarIcon,
    TopAppBarTitle,
    TopAppBarFixedAdjust
} from '@material/react-top-app-bar'
import LinearProgress from '@material/react-linear-progress'
import { connect } from 'react-redux'

import logo from '../assets/logo.png'

import '@material/react-top-app-bar/dist/top-app-bar.css'
import '@material/react-material-icon/dist/material-icon.css'
import '@material/react-linear-progress/dist/linear-progress.css';

class Header extends Component {
    render() {
        const { isFetching } = this.props.fetching
        return (
            <div>
                <TopAppBar>
                    <TopAppBarRow>
                        <TopAppBarSection align='start'>
                            <TopAppBarIcon navIcon tabIndex={0}>
                                <img src={logo} />
                            </TopAppBarIcon>
                            <TopAppBarTitle>Filmy</TopAppBarTitle>
                        </TopAppBarSection>
                        <TopAppBarSection align='end'>
                            <TopAppBarIcon actionItem tabIndex={0}>
                                <MaterialIcon
                                    hasRipple
                                    icon='search'
                                    onClick={() => console.log('Search')} />
                            </TopAppBarIcon>
                        </TopAppBarSection>
                    </TopAppBarRow>
                    {isFetching && <LinearProgress indeterminate />}
                </TopAppBar>

                <TopAppBarFixedAdjust />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fetching: state.fetching
})

export default connect(mapStateToProps)(Header)