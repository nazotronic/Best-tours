function InfoPocket({ text, top }) {
	const style = top !== undefined ? { top: top } : { top: "0px"};

	return (
		<div className="info-pocket-container">
			<div className="info-pocket" style={style}>
				<p>{text}</p>
			</div>
		</div>
	);
}

export default InfoPocket;
