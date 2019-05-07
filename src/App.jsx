import React, { Fragment } from 'react'
import {
    TopAppBar,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
    TopAppBarActionItem,
    TopAppBarFixedAdjust
} from '@rmwc/top-app-bar'

import '@material/top-app-bar/dist/mdc.top-app-bar.css';

const App = () => (
    <div>
        <TopAppBar>
            <TopAppBarRow>
                <TopAppBarSection alignStart>
                    <TopAppBarTitle>Filmy</TopAppBarTitle>
                </TopAppBarSection>
                <TopAppBarSection alignStart>
                    <TopAppBarActionItem icon="Search" />
                </TopAppBarSection>
                <TopAppBarSection alignEnd>
                    <TopAppBarActionItem icon="favourite" />
                    <TopAppBarActionItem icon="favourite" />
                    <TopAppBarActionItem icon="favourite" />
                </TopAppBarSection>
            </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
    </div>
)

export default App;