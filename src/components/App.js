import React, { useState } from "react";

// contract's artifacts and address here
import NoWalletDetected from './NoWalletDetected'
import HomePage from "./HomePage"
import DelegationPage from "./DelegationPage"
import StakePage from "./StakePage"


import { BrowserRouter as Router } from "react-router-dom"
import { Switch, Link, Route } from "react-router-dom"
import SidebarExampleTransitions from "./SidebarExample";
import { LayoutProvider } from "react-page-layout";
import BaseLayout from './BaseLayout'
import DummyPage from "./DummyPage";

const layouts = {
    'base': BaseLayout
}

const App = () => {

    // TO DO: use ConnectWallet.js to update the state of the app
    // in this fashion:
    // const { address } = state
    // instead of being sourced from the useState function
    const [address, setAddress] = useState(undefined)

    if (window.ethereum === undefined) {
        return (<NoWalletDetected />)
    }

    if (!address) {
        return (


            <Router>
                <Switch>
                    <Route exact path="/"><HomePage /></Route>
                    <Route path="/stake"><StakePage /></Route>
                    <Route path="/delegate"><DelegationPage /></Route>
                    <Route path="/projects-supported">
                        <LayoutProvider layouts={layouts}>
                            <DummyPage />
                        </LayoutProvider>
                    </Route>
                </Switch>

            </Router>

            //<ConnectWallet connectWallet={() => _connectWallet()}/>
            //<HomePage />
            //<DelegationPage />
            
            // resolved merging confilct, reason: Router implementation maybe?
          
        )
    }

    // now actual functionality

    return (<>
        <h2>welcome {address}</h2>
        <p>lot's to be done here! :)</p>
    </>)



}

export default App;