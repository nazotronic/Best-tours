import React, { useState, useEffect} from "react";
import VideoBackground from "../components/VideoBackground";
import InfoPocket from "../components/InfoPocket";
import ContactForm from "../components/ContactForm";
import WorkWithUsForm from "../components/WorkWithUsForm";
import AboutUsComp from "../components/AboutUsComp";
import Map from "../components/Map";
import ContactsBlock from "../components/ContactsBlock";
import Feedback from "../components/Feedback";
import NewFeedback from "../components/NewFeedback";

function Contacts() {
	const [feedbacks, setFeedback] = useState([]);

	useEffect(() => {
		const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
		setFeedback(storedFeedbacks);
	}, []);
	
	const handleFeedbackSubmit = (name, text) => {
		const newFeedback = { name, text };
		const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

		feedbacks.push(newFeedback);
		localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
		
		const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
		setFeedback(storedFeedbacks);
	};

	return (
		<main>
			<VideoBackground />
			<InfoPocket text="Contact with us" top="-25px" />

			<section className="contact-forms">
				<ContactForm />
				<WorkWithUsForm />
			</section>

			<InfoPocket text="About Us" />
			<section className="about-us">
				<AboutUsComp topic={"200+"} text={"clients"} />
				<AboutUsComp topic={"20"} text={"workers"} />
				<AboutUsComp topic={"30"} text={"countries"} />
				<AboutUsComp topic={"10+"} text={"tours monthly"} />
			</section>

			<InfoPocket text="Contacts" />
			<section className="contacts-container">
				<div className="contacts-map-container">
					<Map />
				</div>
				
				<ContactsBlock />
			</section>

			<InfoPocket text="Feedbacks" />
			<section className="feedbacks">
				<div className="feedbacks-grid">
					{feedbacks.map((feedback) => (
						<Feedback feedback={feedback} />
					))}
				</div>

				<NewFeedback onSubmitFeedback={handleFeedbackSubmit} />
			</section>
		</main>
	);
}

export default Contacts;