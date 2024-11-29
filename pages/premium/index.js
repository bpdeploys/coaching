import { useState } from "react";
import styled from "styled-components";

//Components
import Modal from "@BPSI/components/PremiumModal";
import TopBar from "@BPSI/components/UI/Topbar";
import NavbarMobile from "@BPSI/components/NavbarMobile";

const StyPremium = styled.div`
	background: url("/assets/img/app-background.svg");
	background-size: cover;
	padding: 3rem 0;
	height: 100vh;
	overflow-y: hidden;
	display: flex;
	flex-direction: column;

	.StyPremiumButton {
		width: 25rem;
		text-align: center;
		margin-top: 30vh;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		a {
			font-size: 2rem;
			padding: 1.5rem;
			background: white;
			border-radius: 1rem;
			color: #0e4980;
			text-transform: uppercase;
		}
	}

	.StyTitle {
		margin-bottom: 2rem;
	}

	h1,
	h3 {
		text-align: center;
	}

	h3 {
		font-size: 1.8rem;
		margin-bottom: 2rem;
	}

	.StyBilling {
		display: flex;
		justify-content: space-around;
		width: 100%;
		border-top: 3px solid white;
		div {
			display: flex;
			width: 45%;
			flex-direction: column;
			align-items: center;
			margin-top: 2rem;

			strong {
				font-size: 4rem;
			}

			span {
				font-size: 1.3rem;
			}
		}
	}

	ul {
		margin-left: 4rem;
		margin-top: 4rem;
		font-size: 2.3rem;
		list-style: none;

		li {
			margin: 1rem 0;
		}
	}
`;

export default function Premium() {
	const [isModalOpen, toggleModal] = useState(false);
	return (
		<>
			<TopBar title="Premium" />
			<StyPremium>
				<div className="StyTitle">
					<h1>Select a plan</h1>
				</div>
				<h3>Academy</h3>
				<div className="StyBilling">
					<div>
						<strong>£75</strong>
						<span>Billed once annually</span>
						<span>22% less</span>
					</div>
					<div>
						<strong>£8</strong>
						<span>Billed once monthly</span>
					</div>
				</div>
				<ul>
					<li>Create multiple clubs</li>
					<li>Create and manage multiple clubs</li>
					<li>Coaching Sessions</li>
					<li>Fitness assessments</li>
				</ul>
				<div className="StyPremiumButton">
					<Modal
						isOpen={isModalOpen}
						toggle={toggleModal}
						notification
					/>
					<a onClick={() => toggleModal(!isModalOpen)}>
						Try academy free
					</a>
				</div>

				<NavbarMobile />
			</StyPremium>
		</>
	);
}
