import {styled} from "styled-components";

const RatingStyled = styled.div`
    min-width: 360px;
    min-height: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
    background-color: #212832;

    @media screen and (max-width: 425px) {
        min-width: 80%;
    }

    .rate-div {
        width: 100%;
        min-height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        .submit-btn {
            width: 85%;

            .ant-btn-primary {
                background-color: hsl(25, 97%, 53%);
                border-radius: 20px;
                color: hsl(213, 19%, 18%);
                font-weight: 700;
            }
            .ant-btn-primary:hover {
                background-color: white;
                color: hsl(213, 19%, 18%);
            }
        }

        .feedback {
            width: 400px    ;
            display: flex;
            align-items: center;
            flex-direction: column;
            row-gap: 20px;

            @media screen and (max-width: 425px) {
                width: 85%;
            }

            h2 {
                width: 85%;
                color: white;
                font-family: "Overpass", sans-serif;
                font-weight: 700;
                font-size: 1.5rem;

                @media screen and (max-width: 425px) {
                    width: 100%;
                }
            }

            p {
                width: 85%;
                color: hsl(217, 12%, 63%);
                font-family: "Overpass", sans-serif;
                font-weight: 400;
                line-height: 1.4;
                font-size: 0.8rem;

                @media screen and (max-width: 425px) {
                    width: 100%;
                }                
            }
        }

        .icon-star {
            width: 85%;
            min-height: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .icon-div {
                width: 31px;
                height: 31px;
                background-color: #272e38;
                padding: 8px;
                border-radius: 50%;
                box-shadow: 0px 0px 3px hsl(217, 12%, 63%);
                display: flex;

                img {
                    width: 100%
                }
            }
        }
    }

    .result-div {
        width: 350px;
        min-height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        @media screen and (max-width: 425px) {
            width: 100%;
        }

        .illustration {
            width: 40%;
            display: flex;

            @media screen and (max-width: 425px) {
                width: 45%;
            }

            img {
                width: 100%;
            }
        }

        .selected-rating {
            background-color: #262F38;
            width: 45%;
            padding: 8px;
            border-radius: 20px;

            @media screen and (max-width: 400px) {
                width: 60%;
            }
            
            p {
                color: hsl(25, 97%, 53%);
                font-family: "Overpass", sans-serif;
                font-size: 0.8rem;
                text-align: center;
            }
        }

        .gratitude-message {
            width: 85%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h3 {
                color: white;
                font-family: "Overpass", sans-serif;
            }
        }
    }

`

export default RatingStyled ;