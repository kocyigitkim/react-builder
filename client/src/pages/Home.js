import React, { Component } from 'react'
import SplitPane from 'react-split-pane';
import AppEditor from '../components/AppEditor';
import AppSolutionExplorer from '../components/AppSolutionExplorer';
import AppToolbox from '../components/AppToolbox';
import RibbonControl from '../components/RibbonControl'

export default class HomePage extends Component {
    render() {
        const tabs = [
            {
                name: "General",
                items: [
                    {
                        name: "Main Group",
                        items: [
                            {
                                type: "button",
                                click: () => { alert("Hello world :)") },
                                name: "Button"
                            },
                            {
                                type: "button",
                                click: () => { alert("Hello world :)") },
                                name: "Button"
                            },
                            {
                                type: "button",
                                click: () => { alert("Hello world :)") },
                                name: "Button"
                            }
                            ,
                            {
                                type: "button",
                                click: () => { alert("Hello world :)") },
                                name: "Button"
                            }
                            ,
                            {
                                type: "button",
                                click: () => { alert("Hello world :)") },
                                name: "Button"
                            }
                            ,
                            {
                                type: "button",
                                click: () => { alert("Hello world :)") },
                                name: "Button"
                            }
                            ,
                            {
                                type: "button",
                                click: () => { alert("Hello world :)") },
                                name: "Button"
                            }
                            ,
                            {
                                type: "button",
                                click: () => { alert("Hello world :)") },
                                name: "Button"
                            }
                            ,
                            {
                                type: "button",
                                click: () => { alert("Hello world :)") },
                                name: "Button"
                            }

                        ]
                    },
                    {
                        name: "Main Group 2",
                        items: [
                            {
                                type: "button",
                                click: () => { alert("Hello world 3 :)") },
                                name: "Button 3"
                            }
                        ]
                    }
                ]
            },
            {
                name: "General 2",
                items: [
                    {
                        name: "Main Group 2",
                        items: [
                            {
                                type: "button",
                                click: () => { alert("Hello world 2 :)") },
                                name: "Button 2"
                            }
                        ]
                    }
                ]
            }
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <RibbonControl tabs={tabs}></RibbonControl>
                <div style={{ flex: 1, position: 'relative' }}>
                    <SplitPane {...SaveLayout("toolboxLayoutSize")} minSize={200} primary="first">
                        <AppToolbox></AppToolbox>
                        <SplitPane  {...SaveLayout("solutionExplorerLayoutSize")} minSize={200} primary="second">
                            <AppEditor></AppEditor>
                            <AppSolutionExplorer></AppSolutionExplorer>
                        </SplitPane>
                    </SplitPane>
                </div>
            </div>
        )
    }
}

function SaveLayout(layoutName, defaultSize = 200) {
    layoutName = 'app:react-editor:layout:' + layoutName;
    return {
        defaultSize: parseFloat(localStorage.getItem(layoutName), defaultSize),
        onChange: (size) => localStorage.setItem(layoutName, size)
    };
}