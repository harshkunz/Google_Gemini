import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../context/context'

const Main = () => {

    const {onSent, input, setInput, recentPrompt, showResult, loading, resultData} = useContext(Context);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onSent(input);
        }
    };

  return (
    <div className="main">
        <div className="nav">
            <p>Google Gemini</p>
            <img src="/images/user.png" alt="" />
        </div>
        <div className="main-container">

            {!showResult
            ?<>
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today ?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src="/images/compass.png" alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src="/images/bulb.png" alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src="/images/sms.png" alt="" />
                    </div>
                    <div className="card">
                        <p>Tell me about React js and React native</p>
                        <img src="/images/code.png" alt="" />
                    </div>
                </div> 
              </>
            :<div className="result">
              <div className="result-title">
                    <img src="/images/user.png" alt="" />
                    <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src="/images/logo.webp" alt="" />
                {loading ? 
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div> 
                : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
              </div>
            </div>
            }

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' onKeyDown={handleKeyDown}/>
                    <div>
                        <img src="/images/photo.png" alt="" />
                        <img src="/images/mic.png" alt="" />
                        <img onClick={()=>onSent(input)} src="/images/send.png" alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>   
        </div>
    </div>
  )
}

export default Main;