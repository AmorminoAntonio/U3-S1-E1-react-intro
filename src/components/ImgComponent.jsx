const ImageComponent = (props) => {
    return (
        <div>
            <img style={props.imgStyle} src={props.src} alt={props.alt} width={props.width}/>
            <h1>{props.title}</h1>
        </div>
    )
}

export default ImageComponent;