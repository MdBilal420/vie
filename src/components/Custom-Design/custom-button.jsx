import styled from "styled-components"

const Button = styled.button`
        border-radius:50%;
        width:100px;
        height:100px;
        font-family: 'Avenir Next';
        font-size: 1rem;
        color: $color-black;
        box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
        border: solid 5px transparent;
        background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
        background-origin: border-box;
        background-clip: content-box, border-box;
        box-shadow: 2px 1000px 1px #fff inset;
      
      &:hover {
        box-shadow: none;
        color: white;
        cursor:pointer;
        border: solid 5px white;
      }
    `;


const CustomButton = ({onClick,title}) => {

    return (
        <Button onClick={onClick}>
            <span style={{fontSize:"20px",fontFamily:"cursive"}}>{title}</span>
        </Button>
    )
}

export default CustomButton