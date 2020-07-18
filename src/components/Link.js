import React from "react";

const Link = ({ active, onClick, children }) => (
    <span
        onClick={onClick}
        style={{
            color: active ? "black" : "blue",
            cursor: active ? "default" : "pointer"
        }}
    >
        {children}
    </span>
);

export default Link;