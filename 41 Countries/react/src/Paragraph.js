
function Paragraph(props) {
	function parseNumber(n) {
		// parse three digit+ numbers
		return n+""
	}
	let value = props.isNum ? parseNumber(props.value) : props.value
	return(
		<p className={props.classN}>
			<span className="font-semibold">{props.text}: </span>
			<span>{value}</span>
		</p>
	);
}

export default Paragraph;