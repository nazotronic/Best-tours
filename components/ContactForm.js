function ContactForm() {
    return (
        <div className="contact-form">
			<h2>Leave your message</h2>

			<form>
				<input type="text" placeholder="You're name" required />
				<input type="email" placeholder="You're Email" required />
				<textarea placeholder="You're message" />
				<button type="submit">Send</button>
			</form>
		</div>
    );
}

export default ContactForm;