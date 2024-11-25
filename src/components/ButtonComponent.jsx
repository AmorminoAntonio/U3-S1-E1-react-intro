const ButtonComponent = (props) => {
return (
<div>
    <button type="button" style={props.buttonStyle} id="btnImg">
            {props.buttonText}
    </button> 
</div>
)
 
};

export default ButtonComponent;
