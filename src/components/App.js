import React, { useState } from "react";

// contract's artifacts and address here
import NoWalletDetected from './error-messages/NoWalletDetected'

// components
import HomePage from "./HomePage"
import DelegationPage from "./DelegationPage"
import StakePage from "./StakePage"
import StakePage2 from "./StakePage2"
// router
import { BrowserRouter as Router } from "react-router-dom"
import { Switch, Link, Route } from "react-router-dom"

// layouts
import { LayoutProvider } from "react-page-layout"
import BaseLayout from './layouts/BaseLayout'

const layouts = {
    'base': BaseLayout
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
                    <Route path="/stake2"><StakePage2 /></Route>
                    <Route path="/delegate">
                        <LayoutProvider layouts={layouts}>
                            <DelegationPage />
                        </LayoutProvider>
                    </Route>
                </Switch>

            </Router>
        </>
    	)



}

export default App;