function ProductImage(props) {
    return (
        <img src={props.url} alt={props.name} width={50} />
    );
};

export default ProductImage;