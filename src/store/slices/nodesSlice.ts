import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {resetState} from "../actions";
import cloneDeep from "lodash/cloneDeep";

interface NodesData {
    id: string;
    type?: string;
    position: NodePosition;
    data: NodeData;
    measured: NodeMeasured;
    selected?: boolean;
    dragging?: boolean;
    style?:{ width: number, height: number }
}

export interface NodesState {
    nodes: NodesData[];
}

interface NodePosition {
    x: number;
    y: number;
}

interface NodeData {
    label: string;
    color: string;
    fontSize: number;
}

interface NodeMeasured {
    width: number;
    height: number;
}


const initialState: NodesState = {
    nodes: [
        {
            id: "1",
            type: "ResizableNodeSelected",
            position: { x: 330.829, y: 50 },
            data: { label: "Node 1", color: "#FFFFFF", fontSize: 14 },
            measured: { width: 150, height: 35 },
            style:{ width: 150, height: 35 }
        },
        {
            id: "2",
            type: "ResizableNodeSelected",
            position: { x: 150, y: 150 },
            data: { label: "Node 2", color: "#FFFFFF", fontSize: 14 },
            measured: { width: 150, height: 35 },
            style:{ width: 150, height: 35 }
        },
        {
            id: "3",
            type: "ResizableNodeSelected",
            position: { x: 488.271, y: 150 },
            data: { label: "Node 3", color: "#FFFFFF", fontSize: 14 },
            measured: { width: 150, height: 35 },
            style:{ width: 150, height: 35 }
        },
        {
            id: "4",
            type: "ResizableNodeSelected",
            position: { x: 45.215, y: 242.749 },
            data: { label: "Node 4", color: "#FFFFFF", fontSize: 14 },
            measured: { width: 150, height: 35 },
            style:{ width: 150, height: 35 }
        },
        {
            id: "5",
            type: "ResizableNodeSelected",
            position: { x: 239.992, y: 240.723 },
            data: { label: "Node 5", color: "#FFFFFF", fontSize: 14 },
            measured: { width: 150, height: 35 },
            style:{ width: 150, height: 35 }
        },
        {
            id: "6",
            type: "ResizableNodeSelected",
            position: { x: 407.284, y: 240.432 },
            data: { label: "Node 6", color: "#FFFFFF", fontSize: 14 },
            measured: { width: 150, height: 35 },
            style:{ width: 150, height: 35 }
        },
        {
            id: "7",
            type: "ResizableNodeSelected",
            position: { x: 612.031, y: 239.917 },
            data: { label: "Node 7", color: "#FFFFFF", fontSize: 14 },
            measured: { width: 150, height: 35 },
            style:{ width: 150, height: 35 }
        },
        {
            id: "8",
            type: "ResizableNodeSelected",
            position: { x: -2.319, y: 354.834 },
            data: { label: "Node 8", color: "#FFFFFF", fontSize: 14 },
            measured: { width: 150, height: 35 },
            style:{ width: 150, height: 35 }
        },
        {
            id: "9",
            type: "ResizableNodeSelected",
            position: { x: 180, y: 350 },
            data: { label: "Node 9", color: "#FFFFFF", fontSize: 14 },
            measured: { width: 150, height: 35 },
            style:{ width: 150, height: 35 }
        },
        {
            id: "10",
            type: "ResizableNodeSelected",
            position: { x: 337.995, y: 415.913 },
            data: { label: "Node 10", color: "#FFFFFF", fontSize: 14 },
            measured: { width: 150, height: 35 },
            style:{ width: 150, height: 35 },
        }
    ],
};

const nodesSlice = createSlice({
    name: "nodes",
    initialState,
    reducers: {
        setNodes(state, action: PayloadAction<NodesData[]>) {
            state.nodes = cloneDeep(action.payload);
        },
        updateNode(state, action: PayloadAction<{ id: string; label?: string; color?: string; fontSize?: number }>) {
            const { id, label, color, fontSize } = action.payload;
            const node = state.nodes.find((n) => n.id === id);
            if (node) {
                if (label !== undefined) node.data.label = label;
                if (color !== undefined) node.data.color = color;
                if (fontSize !== undefined) node.data.fontSize = fontSize;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(resetState, () => initialState);
    },
});

export const { setNodes, updateNode } = nodesSlice.actions;
export default nodesSlice.reducer;
