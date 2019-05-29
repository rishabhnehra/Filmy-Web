import React, { Component } from 'react'
import TopAppBar, {
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarIcon,
    TopAppBarTitle,
    TopAppBarFixedAdjust
} from '@material/react-top-app-bar'
import Tab from '@material/react-tab'
import TabBar from '@material/react-tab-bar'
import MaterialIcon from '@material/react-material-icon'
import LinearProgress from '@material/react-linear-progress'
import { connect } from 'react-redux'

import logo from '../assets/logo.png'

import '@material/react-top-app-bar/dist/top-app-bar.css'
import '@material/react-material-icon/dist/material-icon.css'
import '@material/react-linear-progress/dist/linear-progress.css';

import '@material/react-tab/dist/tab.css';
import '@material/react-tab-indicator/dist/tab-indicator.css';
import '@material/react-tab-bar/dist/tab-bar.css';
import '@material/react-tab-scroller/dist/tab-scroller.css';

class Header extends Component {

    componentDidMount = () => {
        // this.props.history.push('/popular')
    }

    render() {
        const { isFetching } = this.props.fetching
        return (
            <div>
                <TopAppBar>
                    <TopAppBarRow>
                        <TopAppBarSection align='start'>
                            <TopAppBarIcon navIcon tabIndex={0}>
                                <img src={logo} alt="Filmy logo" />
                            </TopAppBarIcon>
                            <TopAppBarTitle>Filmy</TopAppBarTitle>
                        </TopAppBarSection>
                        <TopAppBarSection align='end'>
                            <TopAppBarIcon actionItem tabIndex={0}>
                                <MaterialIcon
                                    hasRipple
                                    icon='search' />
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