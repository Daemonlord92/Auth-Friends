import React, { useState } from "react";
import {
    Card, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

const FriendForm = (props) => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        email: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        props.addFriend(newFriend);
        setNewFriend({
            name: '',
            email: ''
        });
    };

    const handleChanges = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    };

    return(
        <Card>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChanges}
                    value={newFriend.name} />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Email
                    </Label>
                    <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChanges}
                    value={newFriend.email} />
                </FormGroup>
                <Button
                type="submit">Submit</Button>
            </Form>
        </Card>
    )
}

export default FriendForm;