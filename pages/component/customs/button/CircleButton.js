import CircleButtonStyled from "@/pages/component/customs/button/CircleButton.styled";
import { Button } from 'antd';

const CircleButton = (props) => {
    const rating = props.rating

    return (
        <CircleButtonStyled rating={rating}>
            <Button
            type="primary"
            shape="circle"
            size="large"
            onClick={props.onClick}
            >
                {props.rating.rate}
            </Button>
        </CircleButtonStyled>
    )
}

export default CircleButton