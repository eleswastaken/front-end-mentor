

function Error(props) {

	return (
		<div className="">
			<h1 className="text-red-800 text-4xl mb-10">An error has occured :(</h1>
			<details>
				<summary>More...</summary>
				<p>{props.error.name}</p>
				<p>{props.error.message}</p>
			</details>
		</div>
		);
			
}

export default Error;