import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div id="main">
			<div class="container">
				<div class="community">
					<h2 class="community-header">Join our community</h2>
					<div class="community-more">
						<div class="sub">
							30-day, hassle free monkey back gurarantee
						</div>
						<div class="more-info">
							Gain access to our full library of tutorials along
							with expert code reviews. Perfect for any developers
							who are serious about honing their skills.
						</div>
					</div>
				</div>
				<div class="card-details">
					<div class="card">
						<p class="card-header">Monthly Subscription</p>
						<div class="price">
							<div>
								<span class="big-text">$29</span
								><span class="px">Per Month</span>
							</div>
							<div>Full access for less than $1 a day.</div>
						</div>
						<button class="btn">Sign Up</button>
					</div>
					<div class="why-us">
						<h4 class="why-us-header">Why Us</h4>
						<div class="feature">
							<div>Tutorials by industry experts</div>
							<div>Peer & expert code review</div>
							<div>Coding exercises</div>
							<div>Access yo our Github repos</div>
							<div>Community forum</div>
							<div>Flashcard decks</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default App;
