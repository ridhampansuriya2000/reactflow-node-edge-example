import React from "react";

const ColorSelectorNode = ({ data }: { data: { color: string; fontSize: number; label: string } }) => {
    return (
        <div
            style={{
                backgroundColor: data.color,
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: `${data.fontSize}px`,
            }}
        >
            {data.label}
        </div>
    );
};

export default ColorSelectorNode;