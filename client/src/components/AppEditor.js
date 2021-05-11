import React, { Component } from 'react'
import 'react-sortable-tree/style.css';
import SortableTree from 'react-sortable-tree';

export default class AppEditor extends Component {
    state = {
        treeData: [
            { title: 'Chicken', children: [{ title: 'Egg' }] },
            { title: 'Fish', children: [{ title: 'fingerline' }] },
        ],
    };
    constructor(props) {
        super(props);
    }

    render() {
        const state = this.state;
        const setState = this.setState;

        return (
            <div style={{ height: '100%' }}>
                <RenderSortableTree state={state} setState={setState} />
            </div>
        );
    }
}
function RenderSortableTree({ state, setState }) {

    return <SortableTree
        treeData={[state.treeData]}
        onChange={treeData => setState({ treeData })} />;

}

