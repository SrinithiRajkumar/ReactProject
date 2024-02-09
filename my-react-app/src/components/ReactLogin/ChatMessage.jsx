import React from 'react'

export default function ChatMessage(props) {
    return (
        <div className='d-flex'>
            {
                props.user ? (
                    <span>
                        <span>{props.messages}</span>
                        
                    </span>
                )
            }
        </div>
    );
}