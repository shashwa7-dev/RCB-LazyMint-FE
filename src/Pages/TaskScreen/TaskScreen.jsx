/* eslint-disable jsx-a11y/anchor-is-valid */
import "./TaskScreen.css";
import rcb_logo from "../../static/rcb_logo.svg";
import logo from "../../static/logo.svg";
import { useEffect, useState } from "react";


import { Timeline } from '../../Components/Timeline/Timeline'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "../../App";

export const TaskScreen = () => {
  const [task, setTask] = useState({
    taskC: false,
    taskD: false,
    taskE: false,
  });
  const [twitter, setTwitter] = useState("");
  const [insta, setInsta] = useState("");
  const { taskC, taskD, taskE } = task;
  const [email, setEmail] = useState("");
  const [dropDown, setDropDown] = useState({
    setA: false,
    setB: false,
    setC: false,
  });
 const {setA,setB,setSetB,setSetA} = useModalStore()
 const [errors, setErrors] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const Check = async () => {
      let verification = localStorage.getItem("verified");
      if (verification === "false" || !verification) {
        navigate("/");
      }
      let Email = localStorage.getItem("email");
      setEmail(Email);
      if (Email) {
        await setEmail(Email);
        await setSetA(true);
        await axios
          .post("https://rcb-be.herokuapp.com/rcb/status", {
            email: localStorage.getItem("email"),
          })
          .then((res) => {
            console.log(res.data?.user);
            const {
              FollowTwitter,
              InstagramVisited,
              Retweet,
            } = res.data?.user;
            setTask({
    
              taskC: InstagramVisited,
              taskD: FollowTwitter,
              taskE: Retweet,
            });
            console.log(task);
          })
          .catch((err) => {
            console.log(err);
          });
      } 
    };

    const CallFunction = async () => {
      await Check();
    };
    return CallFunction();
  }, []);

  

  const FollowedInstagram = async () => {
    axios
      .post("https://rcb-be.herokuapp.com/rcb/isInstagram", {
        email: email,
        Instagram: insta,
      })
      .then((res) => {
        console.log(res.data);
        setTask({ ...task, taskC: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const TwitterFollow = async () => {
    axios
      .post("https://rcb-be.herokuapp.com/rcb/followTwitter", {
        email: email,
        twitter: twitter,
      })
      .then((res) => {
        let value = res.data?.msg;
        if (value === "true") {
          setTask({ ...task, taskD: true });
          setErrors(false);
        } else {
          setTask({ ...task, taskD: false });
          setErrors("Check your twitter handle");
        }
     
       
      })
      .catch((err) => {
        console.log(err);
        setErrors("Invalid TwitterID")
      });
  };

  const TwitterRetweet = async () => {
    axios
      .post("https://rcb-be.herokuapp.com/rcb/retweet", {
        email: email,
        twitter: twitter,
      })
      .then((res) => {
        let value = res.data?.msg;

        if(value === "true"){
          setTask({ ...task, taskE: true })
          setErrors(false)
        } else {
          setTask({ ...task, taskE: false })
          setErrors("Recheck the tweet or the TwitterID")
        }

  
      })
      .catch((err) => {
        setErrors("Recheck the tweet or the TwitterID")
        console.log(err);
      });
  };

  

  return (
    <div className="task_screen">
      <div className="dehidden_logo">
        <img src={logo} alt="dehidden_logo" />
      </div>

      <Timeline stage_id={2} stage_complete_status={setB}/>

      <div className="rcb_logo">
        <img src={rcb_logo} alt="rcb_logo" />
      </div>
      <div className="heading">
        <h1>Follow below steps to claim your NFT’s</h1>
      </div>
      <div className="tasks_container">
      

       



        {/* follow Instagram */}

        <div className="task_container">
          <div className="task">
            <a
              href="https://www.instagram.com/de.hidden/?hl=en"
              target="_blank"
              className="task_name"
            >
              <i class="fab fa-instagram"></i>
              Follow Dehidden on Instagram
            </a>
            <a
              href=""
              className="submit_task"
              onClick={(e) => {
                e.preventDefault();
                setDropDown({
                  setA: !dropDown.setA,
                });
              }}
            >
              {taskC ? (
                <i class="fas fa-check"></i>
              ) : (
                !dropDown?.setA && (
                  <span
                    onClick={() =>
                      setDropDown({
                        setA: !dropDown.setA,
                      })
                    }
                  >
                    Follow
                  </span>
                )
              )}
              {dropDown?.setA && !taskC? <i class={`fas fa-chevron-up`}></i> : ""}
            </a>
          </div>
          {dropDown?.setA && !taskC ? (
            <div className="dropdownContainer">
              <input
                className="username_input"
                name="username_input"
                type="text"
                placeholder={`your instagram username`}
                onChange={(e) => setInsta(e.target.value)}
                value={insta}
                required
              />
              <button
                onClick={() => {
                  FollowedInstagram();
                }}
                type="submit"
                className="submit_task sub_task"
              >
                <span className="task_text one">Follow</span>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>



        {/* follow Twitter */}

        <div className="task_container">
          <div className="task">
            <a
              href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2F127.0.0.1%3A5500%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Edehidden_&screen_name=dehidden_"
              className="task_name"
            >
              <i class="fab fa-twitter"></i>
              Follow @dehidden on Twitter
            </a>
            <a
              href=""
              className="submit_task"
              onClick={(e) => {
                e.preventDefault();
                setDropDown({
                  setB: !dropDown.setB,
                });
              }}
            >
              {taskD ? (
                <i class="fas fa-check"></i>
              ) : !dropDown?.setB ? (
                <span className="task_text two">Follow</span>
              ) : (
                <i className="fas fa-chevron-up"></i>
              )}
            </a>
          </div>
          {dropDown?.setB  && !taskD ? (
            <>
              <div className="dropdownContainer">
                <input
                  className="username_input"
                  name="username_input"
                  type="text"
                  placeholder={`your twitter handle`}
                  onChange={(e) => setTwitter(e.target.value)}
                  value={twitter}
                  required
                />
                <button type="submit" href="" className="submit_task sub_task">
                  <span
                    onClick={() => {
                      // window.open(
                      //   "https://twitter.com/intent/follow?original_referer=http%3A%2F%2F127.0.0.1%3A5500%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ERCBTweets&screen_name=RCBTweets",
                      //   "_blank"
                      // );
                      TwitterFollow();
                    }}
                    className="task_text one"
                  >
                    Follow
                  </span>
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </div>




          {/* retweet */}
        <div className="task_container">
          <div className="task">
            <a
              href="https://twitter.com/intent/retweet?tweet_id=1476998093639983113&original_referer=http://127.0.0.1:5500/twitter.html"
              className="task_name"
            >
              <i class="fas fa-retweet"></i>
              Retweet @dehidden on Twitter
            </a>
            <a
              href=""
              className="submit_task"
              onClick={(e) => {
                e.preventDefault();
                setDropDown({
                  setC: !dropDown.setC,
                });
              }}
            >
              {taskE ? (
                <i class="fas fa-check"></i>
              ) : !dropDown?.setC ? (
                <span className="task_text two">Retweet</span>
              ) : (
                <i className="fas fa-chevron-up"></i>
              )}
            </a>
          </div>
          {dropDown?.setC && !taskE ? (
            <div className="dropdownContainer">
              <input
                className="username_input"
                name="username_input"
                type="text"
                placeholder={`your twitter handle`}
                onChange={(e) => setTwitter(e.target.value)}
                value={twitter}
                required
              />
              <button type="submit" href="" className="submit_task sub_task">
                <span
                  onClick={() => {
                  
                    TwitterRetweet();
                  }}
                  className="task_text one"
                >
                  Retweet
                </span>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>




        <button
          className={`${!taskC || !taskD || !taskE ? "disabled" : " final_submit"}`}
          disabled={!taskC || !taskD || !taskE}
          onClick={() => {
            localStorage.setItem("taskCompleted","true");
            setSetB(true);
            navigate("/claim_nft");
          }}
        >
          Continue
        </button>

        {errors && 
          <div style={{display:"flex",color:"white",textAlign:"center"}} className="error">
          <i style={{color:"white",marginTop:"2px"}} className="fa fa-exclamation-circle fa-1x" aria-hidden="true"></i>
          <p>{errors}</p>
          </div>
          }
      </div>
    </div>
  );
};