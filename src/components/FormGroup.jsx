const FormGroup = (props) => {
    return (
       <>
       <div>
            <label>{props.Label}</label>
        </div>
            <input type="text" placeholder={props.Placeholder} />
       <div>
            <label>{props.Label}</label>
        </div>
            <input type="text" placeholder={props.Placeholder} />
       <div>
            <label>{props.Label}</label>
        </div>
            <input type="text" placeholder={props.Placeholder} />
       <div>
            <label>{props.Label}</label>
        </div>
            <input type="text" placeholder={props.Placeholder} />
            <div>
            <button type="submit">invia</button>
            </div>
       </>
    )
     
}

export default FormGroup;