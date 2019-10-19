import React from 'react'

export default function UserCard(props) {
    return (
        <div>
            <h1>{props.user.name}</h1>
            <p>{props.user.username}</p>
            <p>{props.user.email}</p>
            <p>{props.otherName}</p>
        </div>
    )
}
