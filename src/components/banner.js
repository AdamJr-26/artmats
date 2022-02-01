import React from 'react';
import Youtube from 'react-youtube'
function Banner() {
    const opts = {
        height: '300',
        width: "100%",
        playerVars: {
          autoplay:0,
        },
      }
  return (
    <div className='banner'>
        <div className="banner__youtube-player">
            <Youtube videoId='ewMksAbgdBI' opts={opts}/>
        </div>
        <div className="banner__description">
            <div className="banner__description--text">
                <p className='title'>
                    JOIN THE VIRTUAL 
                </p>
                <p className='title'>INSTRUCTOR</p>
            <p className='otherDescription'>
                Get All our courses, videos, lesson plan and more today
            </p>
            </div>
            <div className="banner__description--btn">
                <button>START FREE TRIAL</button>
                <hr className='hor-line' />
                <button>SUBSCRIBE</button>
            </div>
        </div>
    </div>

  );
}

export default Banner;
