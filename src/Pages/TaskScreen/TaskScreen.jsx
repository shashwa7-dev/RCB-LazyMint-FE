import './TaskScreen.css'
import rcb_logo from '../../static/rcb_logo.svg'
import logo from '../../static/logo.svg'
import {useState} from 'react'

const UsernameInputFld = ({text}) =>{
    return(
        <div className='dropdownContainer'>
            <input className='username_input' name='username_input' type='text' placeholder={`you @${text}`} required/>
            <button type='submit' href="" className="submit_task sub_task" >
            <span className='task_text one'>Follow</span>
            </button>
        </div>
    )
}

const handleTask= (setProp,task_id) => {
    window.event.preventDefault()
    setProp(!task_id)
}
export const TaskScreen = () => {
    const [taskCompleteA, setTaskCompleteA] = useState(false)
    const [taskCompleteB, setTaskCompleteB] = useState(false)
    const [taskCompleteC, setTaskCompleteC] = useState(false)
    const [taskCompleteD, setTaskCompleteD] = useState(false)
    const [taskCompleteE, setTaskCompleteE] = useState(false)

    return (
        <div className="task_screen">
            <div className='dehidden_logo'>
                <img src={logo} alt="dehidden_logo" />
            </div>
            <div className="rcb_logo">
                <img src={rcb_logo} alt='rcb_logo' />
            </div>
            <div className="heading">
                <h1>Follow below steps to claim your NFT’s</h1>
            </div>
            <div className="tasks_container">
                <div className="task_container">
                    <div className='task'>
                        <a href="" className="task_name">
                            <i class="fas fa-envelope-open-text"></i>
                            Subscribe to RCB’s Newsletter
                        </a>
                        <a href="" target='_blank' className="submit_task" onClick={()=> handleTask(setTaskCompleteA,taskCompleteA)}>
                            {taskCompleteA ? <i class="fas fa-check"></i> : <span className='task_text one'>Subscribe</span>}
                        </a>
                    </div>
                </div>

                <div className="task_container">
                    <div className="task">
                        <a href="https://www.royalchallengers.com/" target="_blank"className="task_name">
                            <i class="fas fa-globe-asia"></i>
                            Checkout RCB’s Website
                        </a>
                        <a href="https://www.royalchallengers.com/" target='_blank' className="submit_task task_b" onClick={()=> handleTask(setTaskCompleteB,taskCompleteB)}>
                                {taskCompleteB ? <i class="fas fa-check"></i> : <span className='task_text two'>Website</span>}
                        </a>
                    </div>
                </div>

                <div className="task_container">
                    <div className="task">
                        <a href="https://www.instagram.com/royalchallengersbangalore/" target='_blank' className="task_name">
                            <i class="fab fa-instagram"></i>
                            Follow RCB on Instagram</a>
                        <a href="" className="submit_task" onClick={()=> handleTask(setTaskCompleteC,taskCompleteC)}>
                                {taskCompleteC ? <i class="fas fa-chevron-down"></i> : <span className='task_text three'>Follow</span>}
                        </a>
                    </div>
                    {taskCompleteC ? <UsernameInputFld text={'insta'}/> : ''}
                </div>

                <div className="task_container">
                    <div className="task">
                        <a href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2F127.0.0.1%3A5500%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ERCBTweets&screen_name=RCBTweets" className="task_name">
                            <i class="fab fa-twitter"></i>
                            Follow @RCBTweets on Twitter
                        </a>
                        <a href="" className="submit_task" onClick={()=> handleTask(setTaskCompleteD,taskCompleteD)}>
                                {taskCompleteD ? <i class="fas fa-chevron-down"></i> : <span className='task_text four'>Follow</span>}
                        </a>
                    </div>
                    {taskCompleteD ? <UsernameInputFld text={'twitter'}/> : ''}
                </div>
                
                <div className="task_container">
                    <div className="task">
                        <a href="https://twitter.com/intent/retweet?tweet_id=1383013895611191297&original_referer=http://127.0.0.1:5500/twitter.html" className="task_name">
                            <i class="fas fa-retweet"></i>
                            Retweet @RCBTweets on Twitter
                        </a>
                        <a href="" className="submit_task" onClick={()=> handleTask(setTaskCompleteE,taskCompleteE)}>
                                {taskCompleteE ? <i class="fas fa-chevron-down"></i> : <span className='task_text five'>Retweet</span>}
                            </a>
                    </div>
                    {taskCompleteE ? <UsernameInputFld text={'twitter'}/> : ''}
                </div>

                {(taskCompleteA && taskCompleteB && taskCompleteC && taskCompleteD && taskCompleteE) 
                ? <button href="" className="final_submit">Continue</button> :
                  <button href="" className="disabled">Continue</button>}
            </div>
        </div>
    )
}
