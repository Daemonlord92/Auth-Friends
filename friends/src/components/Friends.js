import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";


class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log(res)
            })
            .catch(err =>
                console.error("mjm: Friends.js: getData: err.message: ", err.message)
            )
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Friends;