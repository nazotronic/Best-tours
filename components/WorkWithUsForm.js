function WorkWithUsForm() {
    return (
        <div className="work-with-us-form">
			<h2>Work with us</h2>
			
            <form>
				<input type="text" placeholder="You're name" required />
				<input type="email" placeholder="You're Email" required />
				<input type="city" placeholder="You're city" required />
				<button type="submit">Send</button>
			</form>
		</div>
    );
}


export default WorkWithUsForm;