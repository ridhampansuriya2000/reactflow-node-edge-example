import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cloneDeep from "lodash/cloneDeep";
import {resetState} from "../actions";

interface Edge {
    id: string;
    source: string;
    target: string;
}

export interface EdgesState {
    edges: Edge[];
}

const initialState: EdgesState = {
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

const edgesSlice = createSlice({
    name: "edges",
    initialState,
    reducers: {
        setEdges(state, action: PayloadAction<Edge[]>) {
            state.edges = cloneDeep(action.payload);
        },
        addEdge(state, action: PayloadAction<Edge>) {
            state.edges.push(cloneDeep(action.payload));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(resetState, () => initialState);
    },
});

export const { setEdges, addEdge } = edgesSlice.actions;
export default edgesSlice.reducer;
