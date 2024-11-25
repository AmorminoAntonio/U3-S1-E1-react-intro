const ImageComponent = (props) => {
    return (
        <div>
            <img src={props.src} alt={props.alt} width={props.width}/>
            <h1>{props.title}</h1>
        </div>
    )
}

export default ImageComponent;