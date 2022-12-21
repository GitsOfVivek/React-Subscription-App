import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div id="main">
			<div class="container">
				<div class="community">
					<h2 class="community-header">Join our community</h2>
					<ul class="community-more">
						<li class="sub">
							30-day, hassle free money back guarantee
						</li>
						<li class="more-info">
							Gain access to our full library of tutorials along
							with expert code reviews.
						</li>
						<li class="more-info">
							Perfect for any developers
							who are serious about honing their skills.
						</li>
					</ul>
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
						<ul class="feature">
							<li>Tutorials by industry experts</li>
							<li>Peer & expert code review</li>
							<li>Coding exercises</li>
							<li>Access yo our Github repos</li>
							<li>Community forum</li>
							<li>Flashcard decks</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  );
};

export default App;
