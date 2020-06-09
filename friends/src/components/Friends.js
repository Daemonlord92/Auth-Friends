import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import FriendForm from './FriendForm';


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
                console.log(res.data, "MJM: axiosWithAuth, Pulling Data")
                this.setState({
                    friends: res.data
                })
                console.log(this.state.friends, "MJM: axiosWithAuth Setting Data")
            })
            .catch(err =>
                console.error("mjm: Friends.js: getData: err.message: ", err.message)
            )
    }

    addFriend = newFriend => {
        axiosWithAuth()
            .post("/friends", newFriend)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                {
                    this.state.friends.map(friend => {
                        return(
                         <div key={friend.id}>
                             <p>{friend.name}</p>
                             <p>{friend.email}</p>
                         </div>
                        )
                    })
                }
                <FriendForm addFriend={this.state.friends.addFriend} />
            </div>
        )
    }
}

export default Friends;