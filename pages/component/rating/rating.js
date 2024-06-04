import RatingStyled from "@/pages/component/rating/rating.styled";
import RatingButtons from "@/pages/component/customs/ratingButtons/ratingButtons"
import { Button, Typography, message } from "antd"
import { useState, useContext } from "react";
import { Context } from "@/pages/component/main/main"

const { Title, Text } = Typography;

const Rating = () => {
    const { contextValue } = useContext(Context)
    const ratingBtnArray = contextValue.ratingBtnArray;
    console.log('CHECK_rating', ratingBtnArray)

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [selectedRating, setSelectedRating] = useState(false)

    const handleSubmit = () => {
        const selected = ratingBtnArray ? ratingBtnArray.find(item => item.isSelected === true) : false;
        if (selected) {
            setIsSubmitted(true)
            setSelectedRating(selected)
        } else {
            message.warning({content: 'Please Select A Rating', key: 'select-a-rating-warning', duration: 2})
        }
    }

    return (
        <RatingStyled>
            {
                !isSubmitted ?
                <div className="rate-div">
                    <div className="icon-star">
                        <div className="icon-div">
                            <img src="/images/icon-star.svg" />
                        </div>
                    </div>

                    <div className="feedback">
                        <h2>How did we do?</h2>
                        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    </div>

                    <RatingButtons />
                    <div className="submit-btn">
                        <Button type="primary" onClick={handleSubmit}block>
                            SUBMIT
                        </Button>
                    </div>             
                </div>
                :
                <div className="result-div">
                    <div className="illustration">
                        <img src="/images/illustration-thank-you.svg" alt="illustration" />
                    </div>

                    <div className="selected-rating">
                        <p>You selected {selectedRating.rate} out of 5 </p>
                    </div>

                    <div className="gratitude-message">
                        <Title level={3}>Thank You!</Title>
                        <Text 
                        style={{
                            color: 'hsl(217, 12%, 63%)',
                            textAlign: 'center',
                            fontFamily: 'Overpass, sans-serif',
                            }}>
                            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
                        </Text>
                    </div>
                </div>
            }
        </RatingStyled>
    )
}

export default Rating;