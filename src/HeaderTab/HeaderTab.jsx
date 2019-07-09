import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Tab from '@material/react-tab'
import TabBar from '@material/react-tab-bar'

class HeaderTab extends Component {

    state = {
        activeIndex: 0,
    }

    handleActiveIndexUpdate = (activeIndex) => {
        this.setState({ activeIndex })
        console.log(activeIndex)
    }

    render() {
        return (
            <TabBar
                activeIndex={this.state.activeIndex}
                handleActiveIndexUpdate={this.handleActiveIndexUpdate}
            >
                <Tab onClick={() => this.props.history.push('/popular')}>
                    <span className='mdc-tab__text-label'>Popular</span>
                </Tab>
                <Tab onClick={() => this.props.history.push('/now_playing')}>
                    <span className='mdc-tab__text-label'>Now Playing</span>
                </Tab>
                <Tab onClick={() => this.props.history.push('/upcoming')}>
                    <span className='mdc-tab__text-label'>Upcoming</span>
                </Tab>
            </TabBar>
        )
    }
}

// const mapStateToProps = (state) => {
//     activeIndex: state.activeIndex
// }

// const mapActionsToProps = (dispatch) => {

// }

export default withRouter(HeaderTab)