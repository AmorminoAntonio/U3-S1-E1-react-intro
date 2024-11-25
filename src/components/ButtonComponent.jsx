const ButtonComponent = (props) => {
return (
<div>
    <button type="button" style={props.buttonStyle}>
            {props.buttonText}
    </button> 
</div>
)
 
};

export default ButtonComponent;
