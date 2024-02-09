import React from 'react'

export default function Chatbot() {
    const [messages, setMessages] = ([
        {
            message: 'Hi, hai i have your name? '
        }
    ]

    )
    return (
        <div>
            <div className="d-flex align-centre justify-content-centre">
                <img 
                src="https://img.freepik.com/premium-vector/chat-bot-vector-logo-design-concept_418020-241.jpg"
                alt="logo"
                height={200}
                width={200}
                />
                <h2 className='text-primary'>Chatbot</h2>

            </div>
            <div className="chat-message">
                {
                    messages.length > 0 && messages.map((data) => <div>data</div>)
                }

                <div className="d-flex mt-2">
                    <input type="text" className="form-control"/>
                    <button type='primary' className="ms-3">Send</button>
                </div>
                <div id='copyright' className="mt-3">Copyrights reserved Tamil skillhub</div>
            </div>
        </div>
    );
}