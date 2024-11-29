//Base Imports
import styled from "styled-components";

//Utils
import theme from "@BPSI/utils/theme";

//Components
import TopBar from "@BPSI/components/UI/Topbar";
import { AppContainer } from "@BPSI/components/UI/Container";
import NavbarMobile from "@BPSI/components/NavbarMobile";

const JoinClubHeader = styled.h1`
	color: ${theme.colors.white};
	font-size: 3rem;
	line-height: 1;
	margin-top: 4rem;
	margin-bottom: 3rem;
`;

const TeamJoinRequestsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 100%;
	grid-gap: 3rem;
`;

const TeamJoinRequests = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	background-color: ${theme.colors.white};

	& > h3 {
		font-size: 2.5rem;
		color: ${theme.colors.black};
		margin-top: 1rem;
		margin-bottom: 3rem;
	}

	& > span {
		font-size: 1rem;
		color: ${theme.colors.black};
		margin-bottom: 1.5rem;
	}
`;

const JoinClub = () => {
	return (
		<>
			<TopBar title="Join"></TopBar>
			<AppContainer>
				<JoinClubHeader>Join Requests</JoinClubHeader>
				<TeamJoinRequestsWrapper>
					<TeamJoinRequests>
						<h3>U14 Reds</h3>
						<span>View Team</span>
					</TeamJoinRequests>
					<TeamJoinRequests>
						<h3>U10 Whites</h3>
						<span>View Team</span>
					</TeamJoinRequests>
					<TeamJoinRequests>
						<h3>U10 Whites</h3>
						<span>View Team</span>
					</TeamJoinRequests>
				</TeamJoinRequestsWrapper>
				<NavbarMobile />
			</AppContainer>
		</>
	);
};

export default JoinClub;
