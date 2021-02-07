import React, { useState } from "react";

// contract's artifacts and address here
import NoWalletDetected from './NoWalletDetected'

// pages
import HomePage from "./pages/HomePage"
import { DelegationPage } from "./pages/DelegationPage"
import StakingPage from "./pages/StakingPage"
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


    // now actual functionality

    return (
    	<>
            <Router>
                <Switch>
                    <Route exact path="/"><HomePage /></Route>
                    <Route path="/stake">
                        <LayoutProvider layouts={layouts}>
                            <StakingPage />
                        </LayoutProvider>
                    </Route>
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