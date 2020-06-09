import React, { useState } from "react";
import {
    Card, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import axiosWithAuth from "../utils/axiosWithAuth";
import FriendForm from './FriendForm';


class Friends extends React.Component {
    state = {
        friends: []
    };

    handleSubmit = e => {
        e.preventDefault();
        this.addFriend(this.state.friends);
        this.setState({
            name: '',
            email: ''
        });
    };

    handleChanges = e => {
        this.addFriend({
            ...this.state.friends,
            [e.target.name]: e.target.value
        });
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
                <Card>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleChanges}
                                value={this.state.friends.name} />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Email
                            </Label>
                            <Input
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleChanges}
                                value={this.state.friends.email} />
                        </FormGroup>
                        <Button
                            type="submit">Submit</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Friends;