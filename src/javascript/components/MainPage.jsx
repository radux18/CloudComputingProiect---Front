import React from "react";
import Header from './Header';
import MessagesList from "./MessagesList";
import MessagesSubmit from "./MessagesSubmit";

function MainPage(props) {
    return (
        <div id="MainPage">
               <Header title={'Translation Application'}/>
            <h1 className="mt-10 text-red-400 text-4xl font-bold">Main Page</h1>
            <div className="flex max-w-7xl m-auto px-14 py-24">
                <div className="w-1/2 pl-5">
                    <MessagesList/>    
                </div>
                <div className="w-1/2 pr-5">
                    <MessagesSubmit/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;