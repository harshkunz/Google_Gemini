import React, { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {

    const [extended, setExtended] = useState(false);

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src="/images/menu-icon.png" alt="" />
            <div className='new-chat'>
                <img className='chat' src="/images/chat.png" alt="" />
                {extended ? <p>New Chat</p> : null}
            </div>
            {extended ? 
            <div className="recent">
                <p className="recect-tittle">Recent</p>
                <br/>
                <div className="recent-entry">
                    <img src="/images/message.png" alt="" />
                    <p>What is react js ?</p>
                </div>
            </div> : null}
        </div>
        <div className="bottom">
            <div className="bottom-icon recent-entry">
                <img src="/images/ques.png" alt="" />
                {extended ? <p>Help</p> : null}
            </div>
            <div className="bottom-icon recent-entry">
                <img src="/images/history.png" alt="" />
                {extended ? <p>Activity</p> : null}
            </div>
            <div className="bottom-icon recent-entry">
                <img src="/images/settings.png" alt="" />
                {extended ? <p>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar;