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
import { Link, Redirect } from 'react-router-dom'

import logo from '../assets/logo.png'

import '@material/react-top-app-bar/dist/top-app-bar.css'
import '@material/react-material-icon/dist/material-icon.css'
import '@material/react-linear-progress/dist/linear-progress.css';

import '@material/react-tab/dist/tab.css';
import '@material/react-tab-indicator/dist/tab-indicator.css';
import '@material/react-tab-bar/dist/tab-bar.css';
import '@material/react-tab-scroller/dist/tab-scroller.css';

class Header extends Component {

    state = {
        activeIndex: 0
    }

    handleActiveIndexUpdate = (activeIndex) => this.setState({ activeIndex })

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
                                    icon='search' />
                            </TopAppBarIcon>
                        </TopAppBarSection>
                    </TopAppBarRow>
                    {isFetching && <LinearProgress indeterminate />}
                </TopAppBar>

                <TopAppBarFixedAdjust />

                <TabBar
                    activeIndex={this.state.activeIndex}
                    handleActiveIndexUpdate={this.handleActiveIndexUpdate}
                >
                    <Tab onClick={() => this.props.history.push('/popular')}>
                        <span className='mdc-tab__text-label'>Popular</span>
                    </Tab>
                    <Tab onInteraction={(e) => console.log(e)} onClick={() => this.props.history.push('/now_playing')}>
                        <span className='mdc-tab__text-label'>Now Playing</span>
                    </Tab>
                    <Tab onInteraction={(e) => console.log(e)} onClick={() => this.props.history.push('/upcoming')}>
                        <span className='mdc-tab__text-label'>Upcoming</span>
                    </Tab>
                </TabBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fetching: state.fetching
})

export default connect(mapStateToProps)(Header)