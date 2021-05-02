import React, { useState } from 'react';
import { VerticalSidebar } from "./layouts/BaseLayout";
import { Sidebar } from 'semantic-ui-react';
import "./css/CreateMilestonePage.css";


const CreateMilestonePage = () => {
    const [state, setState] = useState({
        animation: 'push',
        direction: 'left',
        dimmed: false,
        visible: true,
      })

    return (
        <Sidebar.Pushable>
        <VerticalSidebar
          animation={state.animation}
          direction={state.direction}
          visible={state.visible}
        />
        <Sidebar.Pusher dimmed={state.dimmed && state.visible}>
            <form
            style={{marginTop: "2rem"}}>
            <h1>Create New Milestone</h1>
            <div style={{display: "flex", flexDirection: "column", padding: "2rem", borderRadius: "0.75rem", backgroundColor: "white"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", 	justifyContent: "space-between" }}>
                    <label style={{fontWeight: "700"}} htmlFor="title">
                    Milestone Title
                    </label>
                    <p>
                    Hint: a short, clear title will catch contributors’ attention.
                    Just be honest please.
                    </p>
                </div>
                <input
                    style={{borderWidth: "2px", borderRadius: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem" }}
                    id="title" name={"title"}/>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", 	justifyContent: "space-between" }}>
                    <label style={{fontWeight: "700"}} htmlFor="description">
                    Milestone Description
                    </label>
                    <p >
                    Hint: be as detailed as possible, and be nice - there are real people on the other side :)
                    </p>
                </div>
                <input style={{borderWidth: "2", borderRadius: "0.5rem", padding: "1rem", height: "200px" }} id="description" name={"description"}/>
                </div>
                <div style={{display: "flex", flexDirection: "column" }}>
                <div style={{display: "flex", flexDirection: "column"}}> 
                    <h1 style={{fontWeight: "700"}}>Skills needed</h1>
                    <h2>
                    Hint: FOr a multidisciplinary Project, you can create
                    <br />
                    multiple Milestones with Skills from different Templates!
                    </h2>
                    <div style={{padding: "1.5rem", borderRadius: "0.5rem", backgroundColor: "white"}} outlined>
                    <div>
                        <div style={{fontWeight: "700"}}>subcategory</div>
                            <div style={{paddingLeft: "1.5rem"}}>
                                {['Open-Source & DeFi', 'Art, Events & NFTs', 'Local Projects & DAOs'].map(skill => (
                                <label key={skill} style={{display: "flex", placeItems: "center"}}>
                                    <input
                                    type="checkbox"
                                    step="1"
                                    />
                                    <div style={{display: "flex", flexDirection: "column", paddingLeft: "0.5rem"}}>
                                    <p>{skill}</p>
                                    </div>
                                </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h1 style={{fontWeight: "700"}}>Commitment</h1>
                    <h2>
                    Hint: the effort needed for this task. It will influence the Credits set as a value for this Milestone!
                    </h2>
                    <input
                    id="commitment"
                    name="commitment"
                    type="range"
                    step="10"
                    value={1234}
                    />
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h1 style={{fontWeight: "700"}}>Budget needed</h1>
                    <h2>
                    Hint: the amount of Credits will appear automagically!
                    </h2>
                    <div style={{display: "flex",  flexDirection: "column"}}>
                    <input style={{borderWidth: "2px", borderRadius: "0.5rem", padding: "1rem"}}
                    id="description" name={"fundsNeeded"}/>
                    <h2 style={{textAlign: "right"}}>DiTo</h2>
                    </div>
                </div>
                </div>
                <button type="button" disabled={false}
                    style={{padding: "1rem", borderRadius: "0.5rem", borderWidth: "2px",  }}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center" }}>
                    </div>
                    Scan QR-Code & Publish this Milestone!
                </button>
            </div>
            </form>  
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
}

export default CreateMilestonePage;