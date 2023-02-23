import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Button from "../atoms/Button"

function WraperInput({msn, type, placeholder}) {
    return ( 
        <>
        <div>
            <Label msn={msn} />
            <Input type={type} placeholder={placeholder}/>
        </div>
        </>
     );
}

export default WraperInput;