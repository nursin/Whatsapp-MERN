import { Avatar } from '@mui/material'
import React from 'react'
import "./SideBarChat.css"

function SideBarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SideBarChat
