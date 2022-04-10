import React, { Component } from "react";

class Utils extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

	componentDidMount() {
		localStorage.removeItem("daily");
	}

    render() {
        return (
			<p>Your Daily Data has been reset. You may return to the <a href="/">home page</a> now</p>
        );
    }
}

export default Utils;