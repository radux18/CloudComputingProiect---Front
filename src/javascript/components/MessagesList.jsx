import axios from 'axios';
import React, {useEffect, useState, } from 'react';


// const messages = [
//     {
//         entryID: 1,
//         senderName: 'Radu Stoica',
//         receiverMail: 'radux18@mail.com',
//         messageContent: 'Hello, what are you doing?',
//     },
// ];

function MessagesList() {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/messages`,);

            if(result.data.messages){
                let messagesArray = result.data.messages;
                messagesArray.reverse();
                setMessages(messagesArray);
            }
        };

        fetchData();
    }, []);

    return (
        <div id="MessagesList">
            <h2 className='text-2xl font-bold mb-4'> Recent messages</h2>
         <ul>
             {
                 messages.length ? messages.map(message =>
                    <li key={message.entryID}>
                        <p>
                            <span className='text-bold'>{message.senderName}</span>
                            <span className='text-gray-600'>{` sent a message to ${message.receiverMail} : ${message.messageContent}`}</span>
                        </p>
                    </li>
                    )
                    : <li>No messages yet</li>
             }
         </ul>
        </div>
    );
}

export default MessagesList;