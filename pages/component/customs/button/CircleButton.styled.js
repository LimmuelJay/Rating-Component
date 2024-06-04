import {styled} from "styled-components"

const CircleButtonStyled = styled.div`
    .ant-btn-primary {
        background-color: ${props => (props.rating.isSelected ? 'white' : '#272e38')};
        box-shadow: 0px 0px 3px hsl(217, 12%, 63%);
        color: ${props => (props.rating.isSelected ? 'hsl(216, 12%, 8%)' : 'hsl(217, 12%, 63%)')};
    }
    .ant-btn-primary:hover {
        background-color: ${props => (props.rating.isSelected ? 'white' : 'hsl(25, 97%, 53%)')} !important;
        color: ${props => (props.rating.isSelected ? 'hsl(216, 12%, 8%)' : 'hsl(217, 12%, 63%)')} !important;
    }
`

export default CircleButtonStyled;