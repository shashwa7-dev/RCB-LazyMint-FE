import './TaskScreen.css'
import rcb_logo from '../../static/rcb_logo.svg'
import logo from '../../static/logo.svg'
import {useState} from 'react'
import { Timeline } from '../../Components/Timeline/Timeline'
import { useEffect } from 'react/cjs/react.development'

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
    const [taskCompleteC, setTaskCompleteC] = useState(false)
    const [taskCompleteD, setTaskCompleteD] = useState(false)
    const [taskCompleteE, setTaskCompleteE] = useState(false)
    const [allTasksComplete, setAllTasksComplete] = useState(false)

    //all tasks complete logic goes here
    useEffect(() => {
        if(taskCompleteC && taskCompleteD && taskCompleteE)
            setAllTasksComplete(true)

    },[taskCompleteC, taskCompleteD, taskCompleteE])

    return (
        <div className="task_screen">
            <div className='dehidden_logo'>
                <img src={logo} alt="dehidden_logo" />
            </div>
            {/* STAGE @2 Timeline */}
            <Timeline stage_id={2} stage_complete_status={allTasksComplete}/>
            <div className="rcb_logo">
                <img src={rcb_logo} alt='rcb_logo' />
            </div>
            <div className="heading">
                <h1>Follow below steps to claim your NFT’s</h1>
            </div>
            <div className="tasks_container">
                
                <div className="task_container">
                   
                    <div className="task">
                    <div className="social_img">
                        <i class="fab fa-instagram"></i>
                    </div>
                        <a href="https://www.instagram.com/royalchallengersbangalore/" target='_blank' className="task_name">
                            Follow Dehidden on Instagram</a>
                        <a href="" className="submit_task" onClick={()=> handleTask(setTaskCompleteC,taskCompleteC)}>
                                {taskCompleteC ? <span className="chevron_img"><i class="fas fa-chevron-down"></i></span> : <span className='task_text three'>Follow</span>}
                        </a>
                    </div>
                    {taskCompleteC ? <UsernameInputFld text={'insta'}/> : ''}
                </div>

                <div className="task_container">
              
                    <div className="task">
                    <div className="social_img">  <i class="fab fa-twitter"></i></div>

                        <a href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A3000%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Edehidden_&region=follow_link&screen_name=dehidden_" className="task_name">
                            Follow Dehidden Twitter
                        </a>
                        <a href="" className="submit_task" onClick={()=> handleTask(setTaskCompleteD,taskCompleteD)}>
                                {taskCompleteD ? <span className="chevron_img"><i class="fas fa-chevron-down"></i></span> : <span className='task_text four'>Follow</span>}
                        </a>
                    </div>
                    {taskCompleteD ? <UsernameInputFld text={'twitter'}/> : ''}
                </div>
                
                <div className="task_container">
                
                    <div className="task">
                    <div className="social_img">  <i class="fab fa-twitter"></i> </div>

                        <a href="https://twitter.com/intent/retweet?tweet_id=1470604859753713668&related=twitterapi,twittermedia,twitter,support&original_referer=https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview#retweet-a-tweet" className="task_name">
                            Retweet Dehidden on Twitter
                        </a>
                        <a href="" className="submit_task" onClick={()=> handleTask(setTaskCompleteE,taskCompleteE)}>
                                {taskCompleteE ? <span className="chevron_img"><i class="fas fa-chevron-down"></i></span> : <span className='task_text five'>Retweet</span>}
                            </a>
                    </div>
                    {taskCompleteE ? <UsernameInputFld text={'twitter'}/> : ''}
                </div>

                {(taskCompleteC && taskCompleteD && taskCompleteE) 
                ? <button href="" className="final_submit">Continue</button> :
                  <button href="" className="disabled">Continue</button>}
            </div>
        </div>
    )
}
