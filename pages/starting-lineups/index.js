import React, { useState } from "react";
import styled from "styled-components";
import TextToggle from "@BPSI/components/UI/TextToggle";

const StyLineups = styled.div`
	.StyHeading {
		background: black;
		text-align: center;
		padding: 1.5rem;
	}

	.StyTeamLineup {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #e5e5e5;
		margin: 0.5rem 0;

		.StyLineupPlayer {
			width: 50%;
			display: flex;
			align-items: center;
			padding: 1rem 0 1rem 1rem;
			clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);

			.StyPlayerNumber {
				font-size: 4rem;
				padding-left: 2rem;
			}
		}
	}

	.StyTeamWrapper {
		padding: 1.5rem 1rem 1rem 1rem;
		h3 {
			color: #616060;
			font-size: 3rem;
			text-transform: uppercase;
			text-align: center;
			width: 100%;
			border-bottom: 1px solid #e5e5e5;
			padding-bottom: 0.5rem;
			margin-bottom: 1rem;
		}
	}
`;

const TeamLineup = ({ blue }) => {
	return (
		<div className="StyTeamLineup">
			<div
				className="StyLineupPlayer"
				style={{ background: blue ? "#1362D9" : "#F01616" }}
			>
				<img src="/assets/img/propic.svg" alt="Player Image" />
				<span className="StyPlayerNumber">3</span>
			</div>
			<TextToggle />
		</div>
	);
};

export default function StartingLineups(props) {
	return (
		<StyLineups>
			<div className="StyHeading">
				<h1>Create Starting Lineups</h1>
			</div>
			<div className="StyTeamWrapper">
				<h3>Team 1</h3>
				<TeamLineup blue />
				<TeamLineup blue />
				<TeamLineup blue />
				<TeamLineup blue />
				<TeamLineup blue />
				<TeamLineup blue />
				<TeamLineup blue />
				<TeamLineup blue />
			</div>
			<div className="StyTeamWrapper">
				<h3>Team 2</h3>
				<TeamLineup />
				<TeamLineup />
				<TeamLineup />
				<TeamLineup />
				<TeamLineup />
				<TeamLineup />
				<TeamLineup />
				<TeamLineup />
			</div>
		</StyLineups>
	);
}
