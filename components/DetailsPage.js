import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RatingFeedback from './RatingFeedback';

const BookingDetails = styled.div`

    .booking-details-heading {
		background-color: #f5f5f5;
        padding: 10px 20px;
	}

    .list__content-wrapper {
        padding: 1.5rem 0;
        display: flex;
        min-height: 150px;
        border-bottom: 1px solid;

        .list__image {
            width: 8.6875rem;
            height: 3.125rem;
            flex-shrink: 0;
        }
    
        .list__image img {
            width: 100%;
        }
    
        .list__content {
            padding-left: 1.875rem;
        }
    }

    .other {
        min-height: 110px;

        .list-details__gran {
            width: 16.6875rem;
            height: 3.125rem;
            flex-shrink: 0;
        }
    }

    .total {
        min-height: 70px;
        padding: 1rem 0;
        .list-details__gran {
            width: 25.6875rem;
            height: auto;
            flex-shrink: 0;
        }
    }

    .grey-text {
        color: #999999;
    }

    .dark-text {
        color: #606060;
    }

    .red-text {
        color: #e40521;
    }

    .medium-text {
        font-size: 1.5rem;
    }

    .small-text {
        font-size: 1rem;
    }
`;

export default function Nav() {

	return (
        <BookingDetails>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9">
                        <h3 className="font-weight-bold pb-4">
                            Booking Confirmed
                        </h3>
                        <div>
                            <p className="list-details__item grey-text">
                                You booking has been made please see the details below.
                            </p>
                            <p className="list-details__item grey-text">
                                You booking confirmation number is <b className="dark-text">RDL232323</b>.
                            </p>
                            <p className="list-details__item grey-text">
                                Please keep a record of this number for any communication with our customer services team.
                            </p>

                            <div className="booking-details-heading font-weight-bold">YOUR BOOKING DETAILS</div>

                            <div className="list__content-wrapper">
                                <div className="list__image">
                                    <img src="https://via.placeholder.com/100x75.png" alt="" />
                                </div>

                                <div className="list__content">
                                    <h4 className="font-weight-bold">
                                    London Heritage Red 2020
                                    </h4>
                                    <p className="list-details__item small-text">
                                        1A Sunderland Street, Area Name, Name of Town, County Name, SW1V 4LD
                                    </p>
                                </div>
                            </div>

                            <div className="list__content-wrapper other">
                                <div className="list-details__gran small-text grey-text">
                                    Check in
                                    <p className="dark-text">13/03/21</p>
                                </div>

                                <div className="list-details__gran small-text grey-text">
                                    Check out
                                    <p className="dark-text">13/03/21</p>
                                </div>

                                <div className="list-details__gran small-text grey-text">
                                    Number of nights
                                    <p className="dark-text">1</p>
                                </div>
                            </div>
                            <div className="list__content-wrapper other">
                                <div className="list-details__gran small-text grey-text">
                                    Check in
                                    <p className="dark-text">13/03/21</p>
                                </div>

                                <div className="list-details__gran small-text grey-text">
                                    Check out
                                    <p className="dark-text">13/03/21</p>
                                </div>

                                <div className="list-details__gran small-text grey-text">
                                    Number of nights
                                    <p className="dark-text">1</p>
                                </div>
                            </div>
                            <div className="list__content-wrapper total">
                                <div className="list-details__gran grey-text font-weight-bold medium-text dark-text mb-0">
                                    TOTAL:
                                </div>

                                <div className="list-details__gran font-weight-bold medium-text red-text text-right">
                                    £25
                                </div>
                            </div>

                            <div className="pt-5">
                                <p className="small-text">
                                    Your booking confirmation was sent to <b style={{'textDecoration':'underline'}}>example@gmail.com</b> at time of booking.
                                </p>

                                <p className="small-text">
                                    Please check any junk mail or spam folders, alternatively resend your booking confirmation email. Please note this can only be sent to the orignal email addess which was entered at time of booking.
                                </p>
                            </div>
                        </div>
                        <RatingFeedback />
                    </div>
                    <div className="col-lg-3">
                    </div>
                </div>
            </div>
        </BookingDetails>
  	);
}
