import React from "react";
import Modal from "../UI/Modal";
import styled from "styled-components";
import theme from "@BPSI/utils/theme";

const StyNotificationModal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 100%;

	.StyHeading {
		background: white;
		width: 100%;
		text-align: center;
		padding-top: 1.5rem;
		padding-bottom: 6rem;
		clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);

		h2 {
			color: ${theme.colors.primary};
			font-size: ${theme.typography.medium};
			margin-bottom: 1rem;
		}

		span {
			color: ${theme.colors.primary};
			font-size: ${theme.typography.extraSmall};
		}
	}

	.StyBody {
		min-height: 40rem;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: center;

		p,
		a {
			font-size: 2rem;
		}

		a {
			padding: 1.5rem;
			background: white;
			border-radius: 1rem;
			color: ${theme.colors.primary};
			text-transform: uppercase;
		}
	}
`;

function NotificationModal({ isOpen, toggle, children }) {
	return (
		<Modal isOpen={isOpen} toggle={toggle} notification>
			<StyNotificationModal>
				<div className="StyHeading">
					<h2>Clubs</h2>
					<span>Premium feature</span>
				</div>
				<div className="StyBody">
					<p>
						Gain more insights and have more control with Premium!
					</p>
					<a href="/premium">Try premium free</a>
				</div>
			</StyNotificationModal>
			{children}
		</Modal>
	);
}

export default NotificationModal;
