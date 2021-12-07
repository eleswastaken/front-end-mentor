
function Paragraph(props) {
	function parseNumber(n) {
		n = (n+'').split("");
		for (let i = n.length-1; i > 0; i--) {
			if (i%3==0) n.splice(-i, 0, ",")
		}
		return n.join("")
	}
	let value = props.isNum ? parseNumber(props.value) : props.value;
	return(
		<p className={props.classN}>
			<span className="font-semibold">{props.text}: </span>
			<span>{value}</span>
		</p>
	);
}

export default Paragraph;