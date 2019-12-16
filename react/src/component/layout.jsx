import React from "react";
import StudentGrid from "./student_grid";

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <StudentGrid />
            </div>
        )
    }
}