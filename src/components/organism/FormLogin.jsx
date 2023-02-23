import Title from "../atoms/Title";
import WraperInput from "../molecules/WrapperInput";
import Button from "../atoms/Button";
function FormLogin() {
    return (  
        <>
        <div>
            <Title>UP CHIAPAS</Title>
            <WraperInput 
                msn="UserName"
                type="text"
                placeholder=" YOU USERNAME"/>
            <WraperInput 
                msn="password"
                type="password"
                placeholder=" YOU PASSWORD"/>
            <Button label={"Iniciar sesión"}></Button>
        </div>
        </>
    );
}

export default FormLogin;