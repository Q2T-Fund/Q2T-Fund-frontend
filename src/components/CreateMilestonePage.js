import React, { useState } from 'react';
import { VerticalSidebar } from "./layouts/BaseLayout";
import { Sidebar } from 'semantic-ui-react';
import "./css/CreateMilestonePage.css";
import QRModal from './common/QRModal';
import { createMilestone } from '../api/community';
import { pushJSONDocumentInTextileHub } from './utils/common-functions';

const CreateMilestonePage = () => {
    const [state] = useState({
        animation: 'push',
        direction: 'left',
        dimmed: false,
        visible: true,
    })


    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    const publishOnClick = async (milestone) => {
        // const swString = localStorage.getItem('skillWallet');
        // const skillWallet = JSON.parse(swString);
        console.log(milestone);
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const skills = [];
        let posValue = 0;
        const commitment = document.getElementById('commitment').value;
        const isOpenSourceSelected = document.getElementById('Open-Source & DeFi').checked;
        const isLocalProjectsSelected = document.getElementById('Local Projects & DAOs').checked;
        const isArtSelected = document.getElementById('Art, Events & NFTs').checked;


        let image;
        if (isOpenSourceSelected) {
            posValue = 24;
            skills.push('DeFi');
            image = 'https://hub.textile.io/ipfs/bafkreiaks3kjggtxqaj3ixk6ce2difaxj5r6lbemx5kcqdkdtub5vwv5mi';
        }
        else if (isArtSelected) {
            posValue = 12;
            skills.push('Art');
            image = 'https://hub.textile.io/ipfs/bafkreigxry2ojoqmfs5wo5ijyzkdsmsyb7yfcjokiegkkhokca2wiltsdu';
        }
        else if (isLocalProjectsSelected) {
            posValue = 6;
            skills.push('Local Project');
            image = 'https://hub.textile.io/ipfs/bafkreibaxbmskevzm6wk7gzmuahvzjghmal2lanlbjabnzn7i5posmehem';
        }
        const credits = posValue * (commitment / 10)



        const url = await pushJSONDocumentInTextileHub({
            title,
            description, 
            image,
            props: {
                skills, 
                commitment,
                credits, 
            }
        });
        console.log(url);
        const projectId = 0;
        const res = await createMilestone(projectId, url, credits, 3);
    }
    const modalText = [
        'Scan with your ',
        <a href="https://distributed.town" className="underline text-blue-600 hover:text-blue-400 visited:text-purple-400" >SkillWallet App</a>,
        ' to Publish this Milestone.'];

    return (
        <Sidebar.Pushable>
            <VerticalSidebar
                animation={state.animation}
                direction={state.direction}
                visible={state.visible}
            />
            <Sidebar.Pusher dimmed={state.dimmed && state.visible}>
                <form style={{ marginTop: "2rem" }}>

                    <h1>Create New Milestone</h1>

                    <div style={{ display: "flex", flexDirection: "column", padding: "2rem", borderRadius: "0.75rem", backgroundColor: "white" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <label style={{ fontWeight: "700" }} htmlFor="title">
                                    Milestone Title
                        </label>
                                <p>Hint: a short, clear title will catch contributors’ attention. Just be honest please.</p>
                            </div>

                            <input
                                style={{ borderWidth: "2px", borderRadius: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem" }}
                                id="title" name={"title"} />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <label style={{ fontWeight: "700" }} htmlFor="description">
                                    Milestone Description
                        </label>
                                <p>Hint: be as detailed as possible, and be nice - there are real people on the other side :)</p>
                            </div>
                            <textarea style={{ borderWidth: "2", borderRadius: "0.5rem", padding: "1rem", height: "200px" }} id="description" name={"description"} />
                        </div>

                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h3 style={{ fontWeight: "700" }}>Skills needed</h3>
                                <p>
                                    Hint: For a multidisciplinary Project, you can create
                        <br />
                        multiple Milestones with Skills from different Templates!
                        </p>
                                <div style={{ padding: "1.5rem", borderRadius: "0.5rem", backgroundColor: "white" }} outlined>
                                    <div>
                                        <div style={{ paddingLeft: "1.5rem" }}>
                                            {['Open-Source & DeFi', 'Art, Events & NFTs', 'Local Projects & DAOs'].map(skill => (
                                                <label key={skill} style={{ display: "flex", placeItems: "center" }}>
                                                    <input
                                                        id={skill}
                                                        type="checkbox"
                                                        step="1"
                                                    />
                                                    <div style={{ display: "flex", flexDirection: "column", paddingLeft: "0.5rem" }}>
                                                        <p>{skill}</p>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h3 style={{ fontWeight: "700" }}>Commitment</h3>
                                <p>
                                    Hint: the effort needed for this task. It will influence the Credits set as a value for this Milestone!
                        </p>
                                <input id="commitment" name="commitment" type="range" step="10" value={1234} />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h3 style={{ fontWeight: "700" }}>Budget needed</h3>
                                <p>Hint: the amount of Credits will appear automagically!</p>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <input style={{ borderWidth: "2px", borderRadius: "0.5rem", padding: "1rem" }}
                                        id="credits" name={"fundsNeeded"} />
                                    <h4 style={{ textAlign: "right" }}>Credits</h4>
                                </div>
                            </div>
                        </div>

                        <button type="button" onClick={publishOnClick}
                            style={{ padding: "1rem", borderRadius: "0.5rem", borderWidth: "2px", }}>
                            {/* <div style={{display: "flex", alignItems: "center", justifyContent: "center" }}>
                    </div> */}
                    Scan QR-Code & Publish this Milestone!
                </button>
                    </div>
                </form>
                {showModal ? <QRModal toggleModal={toggleModal} key={'createmilestone'} modalText={modalText} /> : null}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
}

export default CreateMilestonePage;