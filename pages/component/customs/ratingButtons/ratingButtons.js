import RatingButtonsStyled from "@/pages/component/customs/ratingButtons/ratingButtons.styled";
import CircleButton from "@/pages/component/customs/button/CircleButton.js";
import { useState, useContext } from "react";
import { Context } from "@/pages/component/main/main"
 
const RatingButtons = () => {
    const { contextValue, setContextValue } = useContext(Context)

    const [ratingBtnArray, setRatingBtnArray] = useState([
        { keys: 1, rate: 1, isSelected: false },
        { keys: 2, rate: 2, isSelected: false },
        { keys: 3, rate: 3, isSelected: false },
        { keys: 4, rate: 4, isSelected: false },
        { keys: 5, rate: 5, isSelected: false },
    ])

    const onBtnClick = (index) => {
        setRatingBtnArray(prevArr => {
            console.log('CHECK_prevArr', prevArr)
            const newArr = []
            for (let i = 0; i < prevArr.length; i++) {
                const element = prevArr[i];
                console.log('CHECK_element', element)
                element.isSelected = i === index && !element.isSelected ? true : false
                newArr.push(element)
            }
            setContextValue({...contextValue, ratingBtnArray: newArr,})
            return newArr
        })
        
    }

    return (
        <RatingButtonsStyled>
            {
                ratingBtnArray.map((item, index) => {
                    return (
                        <CircleButton
                        key={index}
                        rating={item}
                        onClick={(() => onBtnClick(index))}
                        />
                    )
                })
            }
        </RatingButtonsStyled>
    )
}

export default RatingButtons;