import styled from "styled-components";
import Layout from "@BPSI/components/UI/Layout";
import TopBar from "@BPSI/components/UI/Topbar";
import Calendar from "@BPSI/components/Calendar";

const MatchesContainer = styled.div`
	background: url("/assets/img/app-background.svg");
	background-size: cover;
	padding: 2rem 3rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MatchesHeader = styled.h1`
	margin: 0 auto;
	margin-top: 8.3rem;
	text-align: center;
	font-size: 2.5rem;
`;

export default function CreateMatch({ nextStep }) {
	return (
		<Layout>
			<TopBar title="Edit Matches" />
			<MatchesContainer>
				<MatchesHeader>Select Upcoming Match days</MatchesHeader>
				<Calendar></Calendar>
			</MatchesContainer>
		</Layout>
	);
}
