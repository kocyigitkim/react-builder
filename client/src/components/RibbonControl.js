import React, { Component } from 'react'
import { Tabs, Tab, Box, Grid } from '@material-ui/core';
import { Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton } from "react-bootstrap-ribbon";



export default class RibbonControl extends Component {
    state = {
        tabIndex: 0
    }
    render() {
        const state = this.state;
        const setTab = ((index) => {
            this.setState({ tabIndex: index });
        });

        const tabs = this.props.tabs;
        return (
            <div>
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    value={state.tabIndex}>
                    {tabs.map((tab, index) => {
                        return <Tab component="a" onClick={setTab.bind(this, index)} label={tab.name} tabIndex={index} key={"k" + index}></Tab>
                    })}
                </Tabs>
                <div>
                    {tabs.map((tab, index) => {
                        return <RibbonTabPanel key={"k" + index} tab={tab} index={index} value={state.tabIndex}></RibbonTabPanel>
                    })}
                </div>
            </div>
        )
    }
}

class RibbonTabPanel extends Component {
    render() {
        const { tab, children, value, index, ...other } = this.props;
        return <Box bgcolor="primary.main" role="tabpanel"
            hidden={value !== index}
            {...other}>
            <div>
                <Ribbon height="8rem">

                    {tab.items && tab.items.filter(g => g.items && g.items.length > 0).map((group, groupIndex) => {
                        return <RibbonGroup colClass="d-inline-flex mr-1" key={"k" + groupIndex} title={group.name}>
                            {group && group.items && group.items.map((item, itemIndex) => {
                                return RenderItem(item, itemIndex);
                            })}
                        </RibbonGroup>;
                    })}
                </Ribbon>
            </div>
        </Box>;
    }
}

function RenderItem(item, index) {
    switch (item.type) {
        case "button": {
            return <RibbonGroupItem key={"i" + index} colClass="d-inline-flex p-1">
                <RibbonButton onClick={item.click} {...item.props}>{item.name}</RibbonButton>
            </RibbonGroupItem>;
        }
    }
    return <></>;
}