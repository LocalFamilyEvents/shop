import NumberFormat from "react-number-format";

function Price(props) {
    return (
        <NumberFormat
            value={props.value}
            displayType='text'
            prefix={'£'}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
            renderText={(value, props) => <span {...props}>{value}</span>}
        />
    );
}
export default Price;