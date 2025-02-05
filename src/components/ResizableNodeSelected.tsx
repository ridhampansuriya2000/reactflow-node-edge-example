import React, { memo } from "react";
import { Handle, Position, NodeResizer } from "@xyflow/react";

interface ResizableNodeProps {
    data: { label: string };
    selected?: boolean;
    onResizeEnd?: () => void;
}

const ResizableNodeSelected = ({ data, selected = false, onResizeEnd }: ResizableNodeProps) => {
    return (
        <div >
            <NodeResizer color="#ff0071" isVisible={selected} onResizeEnd={onResizeEnd} />

            <Handle type="target" position={Position.Top} />

            <div style={{ padding: 10, textAlign: "center" }}>{data.label}</div>

            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};

export default memo(ResizableNodeSelected);
