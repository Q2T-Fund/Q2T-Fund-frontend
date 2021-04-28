import React, { useState } from "react";


// components
import HomePage from "./HomePage"
import DelegationPage from "./DelegationPage"
import StakePage from "./StakePage"
// router
import { BrowserRouter as Router } from "react-router-dom"
import { Switch, Route } from "react-router-dom"

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