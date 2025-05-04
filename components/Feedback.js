function Feedback({ feedback }) {
	return (
		<div className="feedback">
			<p>{feedback.name}</p>
			<h6>{feedback.text}</h6>
		</div>
	);
}

export default Feedback;
