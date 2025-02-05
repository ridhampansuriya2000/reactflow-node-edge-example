import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cloneDeep from "lodash/cloneDeep";
import {resetState} from "../actions";
import {NodesState} from "./nodesSlice";
import {EdgesState} from "./edgesSlice";

interface HistoryData {
    past: { node: any[], edge: any[] }[];
    present: { node: any[], edge: any[] };
    future: { node: any[], edge: any[] }[];
}

interface HistoryState {
    history: HistoryData;
}

const initialNodesState: NodesState = {
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

const initialEdgesState: EdgesState = {
    edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-3', source: '1', target: '3' },
        { id: 'e2-4', source: '2', target: '4' },
        { id: 'e2-5', source: '2', target: '5' },
        { id: 'e3-6', source: '3', target: '6' },
        { id: 'e3-7', source: '3', target: '7' },
        { id: 'e4-8', source: '4', target: '8' },
        { id: 'e5-9', source: '5', target: '9' },
        { id: 'e5-10', source: '5', target: '10' }
    ],
};

const initialState: HistoryState = {
    history: { past: [], present: { node: initialNodesState.nodes, edge: initialEdgesState.edges }, future: [] },
};

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        setHistory(state, action: PayloadAction<HistoryData>) {
            state.history = cloneDeep(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(resetState, () => initialState);
    },
});

export const { setHistory } = historySlice.actions;
export default historySlice.reducer;
