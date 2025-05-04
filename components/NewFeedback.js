function NewFeedback({ onSubmitFeedback }) {
	const handleSubmit = (e) => {
		e.preventDefault();

		const name = e.target.elements.name.value;
		const feedback = e.target.elements.feedback.value;

		if (onSubmitFeedback) {
			onSubmitFeedback(name, feedback);
		}

		// Очистка полів
		e.target.reset();
	};

	return (
		<form className="new-feedback" onSubmit={handleSubmit}>
			<input name="name" className="name" placeholder="You're name" required />
            <div className="feedback-submit">
			    <input name="feedback" className="feedback" placeholder="You're feedback" required />
			    <button type="submit">Send</button>
            </div>
		</form>
	);
}

export default NewFeedback;
