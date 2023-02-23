import styled from 'styled-components'; //isc importacion

const StyledInput =styled.input`
        border: 1px double black;
        border-radius: 10%;
        display: block;
`;
function Input({type, placeholder}){
    return(
        <StyledInput 
        type={type}
        placeholder={placeholder}/>
    )

}
export default Input;