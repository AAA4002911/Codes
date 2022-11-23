// write code for Welcome component here
import React from "react";

export default function GreetingMessage(props) {
    return (
        <div>
            <h1>Hey {props.name}!</h1>
            <h2>Welcome to 10x Academy</h2>
        </div>
    )
}