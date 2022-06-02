import React, { useState } from "react"
import EmailForm from "./EmailForm";
import ChatEngine from "./ChatEngine";
import {styles} from '../styles.js'

const SupportWindow = props => {
    const [user, setUser] = useState(null)
    const [chat, setChat] = useState(null)

    return (
        <div 
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
        >
            <EmailForm 
                visible={user === null || chat === null}
                setUser={user => setUser(user)} 
                setChat={chat => setChat(chat)} 
            />

            <ChatEngine
               visible={user !== null && chat !== null}
               chat={chat}
               user={user}
            />
        </div>
    )
}

export default SupportWindow;