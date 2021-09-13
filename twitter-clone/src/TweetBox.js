import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");


    const sendTweet = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          displayName: "Ulykpan Almas",
          username: "aulykpan",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          avatar:
            "https://scontent.fcit3-1.fna.fbcdn.net/v/t1.18169-9/14670862_101742416963361_1422637175260678972_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8kwihZeppRgAX-fZf3W&_nc_ht=scontent.fcit3-1.fna&oh=b13ee408ac9f0a2b01add57f15310469&oe=60F257E7",
        });
    
        setTweetMessage("");
        setTweetImage("");
      };


    return (
        <div className="tweetBox">
            <form>

                <div className="tweetBox__input">
                    <Avatar src="https://scontent.fcit3-1.fna.fbcdn.net/v/t1.18169-9/14670862_101742416963361_1422637175260678972_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8kwihZeppRgAX-fZf3W&_nc_ht=scontent.fcit3-1.fna&oh=b13ee408ac9f0a2b01add57f15310469&oe=60F257E7" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>

                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                
                <Button  
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                    >
                Tweet
                </Button>
            </form>    
            
        </div>
    )
}

export default TweetBox
