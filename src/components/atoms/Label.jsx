import styled from 'styled-components'; //isc importacion

const StyledLabel =styled.label`
        font-weight: bold;
        color: aqua;
`;
function Label({msn}){
    return(
        <StyledLabel>{msn}</StyledLabel>
    )

}
export default Label;
