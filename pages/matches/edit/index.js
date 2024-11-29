//Base Imports
import styled from "styled-components";

//Utils
import theme from "@BPSI/utils/theme";

//Components
import Layout from "@BPSI/components/UI/Layout";
import TopBar from "@BPSI/components/UI/Topbar";

const StyTeamCreation = styled.div`
	background: url("/assets/img/app-background.svg");
	background-size: cover;
	padding: 2rem 3rem;
	height: 100vh;

	h1 {
		font-size: ${theme.typography.medium};
		font-weight: 400;
		padding: 2rem 0;
		text-align: center;
		color: ${theme.colors.white};
	}
`;

const StyMatchBox = styled.div`
	text-align: center;
	background: white;
	padding: 1.5rem;
	border-radius: 0.5rem;
	margin: 2rem 0;

	h4 {
		color: black;
		font-size: 1.8rem;
		margin-bottom: 1.5rem;
		font-weight: 400;
	}

	button {
		color: black;
		background: white;
		border: 1px solid black;
		border-radius: 5px;
		padding: 0.7rem 1rem;
		font-size: 1.8rem;
	}
`;

export default function TeamCreationS10({ nextStep }) {
	return (
		<Layout>
			<TopBar title="Edit Matches" />
			<StyTeamCreation>
				<h1>Edit Matches</h1>
				<div>
					<StyMatchBox>
						<h4 className="StyMatchDate">Sunday 1st May</h4>
						<button className="StyMatchButton">
							Add match details
						</button>
					</StyMatchBox>
					<StyMatchBox>
						<h4 className="StyMatchDate">Sunday 8st May</h4>
						<button className="StyMatchButton">
							Add match details
						</button>
					</StyMatchBox>
					<StyMatchBox>
						<h4 className="StyMatchDate">Sunday 15st May</h4>
						<button className="StyMatchButton">
							Add match details
						</button>
					</StyMatchBox>
					<StyMatchBox>
						<h4 className="StyMatchDate">Sunday 22st May</h4>
						<button className="StyMatchButton">
							Add match details
						</button>
					</StyMatchBox>
					<StyMatchBox>
						<h4 className="StyMatchDate">Sunday 29st May</h4>
						<button className="StyMatchButton">
							Add match details
						</button>
					</StyMatchBox>
				</div>
			</StyTeamCreation>
		</Layout>
	);
}
