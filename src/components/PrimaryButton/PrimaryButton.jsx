const PrimaryButton = () => {
//   const handleClick = () => {
//     alert("I am a button");
//   }

//   return <button onClick={handleClick}>Click me!</button>
return <button onClick={() => alert("I'm a button!")}>Click me!</button>

}

export function ButtonEvt() {
	const handleClick = (evt) => {
		console.log(evt);
	};

	return (
		<>
			<button onClick={handleClick}>First button</button>
			<button onClick={evt => console.log(evt)}>Second button</button>
		</>
	);
};


export default PrimaryButton;