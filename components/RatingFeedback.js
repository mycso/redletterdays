import React, { useState } from 'react';
import styled from 'styled-components';

const feedback = [
    {
      name: '1',
      id: '001',
      image: '../static/smiley1.png',
    },
    {
      name: '2',
      id: '002',
      image: '../static/smiley2.png',
    },
    {
      name: '3',
      id: '003',
      image: '../static/smiley3.png',
    },
    {
      name: '4',
      id: '004',
      image: '../static/smiley4.png',
    },
    {
      name: '5',
      id: '005',
      image: '../static/smiley5.png',
    },
    {
      name: '6',
      id: '006',
      image: '../static/smiley6.png',
    },
    {
      name: '7',
      id: '007',
      image: '../static/smiley7.png',
    },
    {
      name: '8',
      id: '008',
      image: '../static/smiley8.png',
    },
    {
      name: '9',
      id: '009',
      image: '../static/smiley9.png',
    },
    {
      name: '10',
      id: '010',
      image: '../static/smiley10.png',
    },
  ]

const RatingBox = styled.div`
        margin-top: 50px;
		background-color: #eee;
        padding: 70px 70px;
        text-align: center;

        .button-wrapper {
            display: inline;
        }
        .active {
            border-radius: 50px!important;
            width: 40px;
            height: 40px;
            line-height: 1;
            margin: 4px;
            color: #fff;
            background-color: #00a8a5;
            font-weight: bold;
        }

        .button-circle {
            border-radius: 50px!important;
            width: 40px;
            height: 40px;
            line-height: 1;
            margin: 4px;
            color: #fff;
            background-color: #adb5bd;
            font-weight: bold;
        }

        .button-action {
            background-color: #e40521;
            color: #ffffff;
            font-weight: bold;
            width: 150px;
            margin-top: 50px;
        }

        .error-message {
            color: #e40521;
        }
`;

export default function RatingFeedback() {

    const [activeTab, setActiveTab] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);
    const [toggle, setToggle] = useState('../static/smiley0.png');
    const [visible, setVisible] = useState(true);

    const handleClickSubmit = () => {
        if (activeTab == '') {
            setShowMessage(true)
        } else {
            setShowMessage(false)
            setShowThankYouMessage(true);
        }
    }

    // console.log(toggle);

	return (
        <RatingBox>
            <>
                {!showThankYouMessage && (
                    <>
                        <h3 className="font-weight-bold pb-4">
                            How did we do?
                        </h3>
                        <p className="list-details__item grey-text small-text">
                            On a scale from 1 - 10, how easy did you find booking your hotel experience?
                        </p>

                        {toggle !== '' ? (
                            <div className="pb-4"><img width="100px" src={toggle} alt={activeTab} /></div>
                        ) : null}

                        {feedback.map(rate => (
                            <div className="button-wrapper" key={rate.id}>
                                <button 
                                className={activeTab == `${rate.name}` ? 'active' : 'button-circle'} 
                                onClick={() => {
                                    setActiveTab(rate.name), 
                                    setShowMessage(false), 
                                    setToggle(rate.image), 
                                    setVisible(false)
                                }}
                                >
                                    {rate.name}
                                </button>
                            </div>
                        ))}
                        <div>
                            <button className="button-action" onClick={handleClickSubmit}>Submit</button>
                            { showMessage ? <div className="mt-3 error-message"><span>Please choose a rating</span></div> : null }
                        </div>
                    </>
                )}

                {showThankYouMessage && (
                    <>
                        <h3 className="font-weight-bold pb-4">
                            Thank you
                        </h3>
                        <p className="list-details__item grey-text small-text">
                            Your feedback helps us to improve!
                            <br/>If you have any further feedback, please feel free to <span className="red-text" style={{'textDecoration': 'underline'}}>contact us</span>
                        </p>
                    </>
                )}
            </>
        </RatingBox>
  	);
}
