import React from "react";
import ErrorBoundary from "./src/components/ErrorBoundary";
import UpdateNode from "./src/components/UpdateNode";

function App() {
    return (
        <ErrorBoundary>
            <UpdateNode />
        </ErrorBoundary>
    );
}

export default App;
