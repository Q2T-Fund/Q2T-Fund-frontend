import React, { useState } from "react";

// contract's artifacts and address here
import NoWalletDetected from './error-messages/NoWalletDetected'

// components
import HomePage from "./HomePage"
import DelegationPage from "./DelegationPage"
import StakePage from "./StakePage"
import ManagePage from './ManagePage';
import MilestonesPage from './MilestonesPage';
import CreateMilestonePage from './CreateMilestonePage';
// router
import { BrowserRouter as Router } from "react-router-dom"
import { Switch, Link, Route } from "react-router-dom"

// layouts
import { LayoutProvider } from "react-page-layout"
import BaseLayout from './layouts/BaseLayout'
import MilestonesLayout from './layouts/MilestonesLayout'

const layouts = {
    'base': BaseLayout
}
const milestonesLayout = {
    'milestones': MilestonesLayout
}

const App = () => {

    // TO DO: use ConnectWallet.js to update the state of the app
    // in this fashion:
    // const { address } = state
    // instead of being sourced from the useState function
    const [address, setAddress] = useState(undefined)

    return (
    	<>
                <Router>
                <Switch>
                    <Route exact path="/"><HomePage /></Route>
                    <Route path="/stake"><StakePage /></Route>
                    <Route path="/delegate">
                        <LayoutProvider layouts={layouts}>
                            <DelegationPage />
                        </LayoutProvider>
                    </Route>
                    <Route path="/manage">
                        <LayoutProvider layouts={layouts}>
                            <ManagePage />
                        </LayoutProvider>
                    </Route>
                    <Route path="/milestones">
                        <LayoutProvider layouts={milestonesLayout}>
                            <MilestonesPage />
                        </LayoutProvider>
                    </Route>
                    <Route path="/create-milestone"><CreateMilestonePage /></Route>
                </Switch>

            </Router>
        </>
    	)



}

export default App;