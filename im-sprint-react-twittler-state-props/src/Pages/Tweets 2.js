import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  const [tweetContent, setTweetContent] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [isDummyTweets, setIsDummyTweets] = useState(dummyTweets);

  const handleButtonClick = (event) => {

    const tweet = {
      id : parseInt(Math.random() * (Number(1000000) - Number(1) + 2)),
      username: inputContent,
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      content:  tweetContent,
      createdAt: '2019-02-24T16:17:47.000Z',
      updatedAt: '2019-02-24T16:17:47.000Z'
    }
    setIsDummyTweets([tweet, ...isDummyTweets]);
    setTweetContent("");
    setInputContent("");
  };

  const handleChangeUser = (event) => {
    setInputContent(event.target.value);
  };

  const handleChangeMsg = (event) => {
    setTweetContent(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  onChange={handleChangeUser}
                  type="text"
                  value={inputContent ? inputContent : "parkhacker"} // 원래 그냥 parkhacker였음.
                  className="tweetForm__input--username"
                ></input>
                <textarea
                  value={tweetContent} onChange={handleChangeMsg}
                  className="tweetForm__input--message"
                  placeholder="your tweet here..">
                </textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  total: {dummyTweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
                <form>
                  <button
                    //type="submit"
                    value={isDummyTweets}
                    onClick={handleButtonClick}
                    className="tweetForm__submitButton">
                    Tweet
                  </button>
                </form>
            </div>
          </div>
        </div>
      </div>
      {isDummyTweets.map(function (el) {
          return (<Tweet tweet={el} key={el.id}/>)})
      }
      {/* {[...isDummyTweets].map((oneTweet) => {
        return (
          <div>
            <div className="tweet__selectUser"></div>
            <ul className="tweets">
              <Tweet tweet={oneTweet} key={oneTweet.id}/>
            </ul>
          </div>
        )})
      } */}
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
