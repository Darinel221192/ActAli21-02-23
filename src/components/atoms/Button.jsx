import styled from 'styled-components'; //isc importacion
import Label from './Label';

const StyledButton =styled.button`
        width: 100%;
        background: ${props => props.primary ?  "blue" : "red"};
        color: ${ props=>  props.primary ?  "green" : "black"};
        `;
function Button({ label, primary}){
    return(
        <StyledButton primary>{label}</StyledButton>
    )

}
export default Button;