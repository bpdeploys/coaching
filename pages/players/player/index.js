import styled from "styled-components";
import Layout from "@BPSI/components/UI/Layout";
import { AppContainer } from "@BPSI/components/UI/Container";
import TopBar from "@BPSI/components/UI/Topbar";
import theme from "@BPSI/utils/theme";
import { WitheRoundButton } from "@BPSI/components/UI/WhiteRoundButton";
import Link from "next/link";

const PlayerHeader = styled.div`
	color: ${theme.colors.white};
	font-size: ${theme.typography.large};
	margin-bottom: 2rem;
`;

const UpdateProfileWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 3rem 0;
	width: 100%;
`;

const UpdatePaymentsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 4rem;
	margin-bottom: 3rem;
	width: 100%;
`;

const ViewStatsProfileWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const PlayerInformation = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	& div:nth-child(1),
	& div:nth-child(2) {
		margin-bottom: 3rem;
	}

	& div:first-child {
		display: flex;
		justify-content: space-between;
	}

	& p {
		color: ${theme.colors.white};
		font-size: ${theme.typography.small};
	}
`;

const Sessions = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-between;
	font-size: ${theme.typography.small};

	& p:last-child {
		margin-top: 2rem;
	}
`;

const SessionsTable = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin-top: 3rem;
`;

const SessionsTableCells = styled.div`
	font-size: ${theme.typography.small};
	font-weight: 600;
	padding: 0.5rem;
	text-align: center;
	border: 1px solid #ffffff;
`;

const SessionsTableCellsSmall = styled.div`
	font-size: ${theme.typography.small};
	font-weight: 600;
	padding: 0.5rem;
	text-align: center;
	border: 1px solid #ffffff;
`;

export default function Player() {
	return (
		<>
			<TopBar title="Player" />
			<AppContainer>
				<PlayerHeader>Daniel Hardman</PlayerHeader>
				<ViewStatsProfileWrapper>
					<Link href="/players/player/update-payment">
						<WitheRoundButton>View Stats Profile</WitheRoundButton>
					</Link>
				</ViewStatsProfileWrapper>
				<UpdateProfileWrapper>
					<Link href="/players/player/update-player">
						<WitheRoundButton>Update Profile</WitheRoundButton>
					</Link>
				</UpdateProfileWrapper>
				<PlayerInformation>
					<div>
						<p>
							Playing position: <br /> Left Midfield
						</p>
						<p>Team: u10</p>
					</div>
					<div>
						<p>
							Parent 1: Michael Hardman
							<br />
							mike@hotmail.co.uk
							<br />
							07477484744
						</p>
					</div>
					<div>
						<p>
							Parent 1: Michael Hardman <br /> mike@hotmail.co.uk
							<br />
							07477484744
						</p>
					</div>
				</PlayerInformation>
				<UpdatePaymentsWrapper>
					<WitheRoundButton>Update Payments</WitheRoundButton>
				</UpdatePaymentsWrapper>
				<Sessions>
					<p>Sessions attended: 44</p>
					<p>Total paid: &#163;308</p>
					<p>Sessions left: 4 </p>
				</Sessions>
				<SessionsTable>
					<SessionsTableCellsSmall></SessionsTableCellsSmall>
					<SessionsTableCells>Date</SessionsTableCells>
					<SessionsTableCells>Amount</SessionsTableCells>
					<SessionsTableCells>Type</SessionsTableCells>
					<SessionsTableCellsSmall>11</SessionsTableCellsSmall>
					<SessionsTableCells>17/04/2021</SessionsTableCells>
					<SessionsTableCells>&#163;75</SessionsTableCells>
					<SessionsTableCells>Training</SessionsTableCells>
					<SessionsTableCellsSmall>10</SessionsTableCellsSmall>
					<SessionsTableCells>09/02/2021</SessionsTableCells>
					<SessionsTableCells>&#163;75</SessionsTableCells>
					<SessionsTableCells>Camp</SessionsTableCells>
					<SessionsTableCellsSmall>09</SessionsTableCellsSmall>
					<SessionsTableCells>02/02/2021</SessionsTableCells>
					<SessionsTableCells>&#163;75</SessionsTableCells>
					<SessionsTableCells>ASC</SessionsTableCells>
					<SessionsTableCellsSmall>08</SessionsTableCellsSmall>
					<SessionsTableCells>08/01/2021</SessionsTableCells>
					<SessionsTableCells>&#163;75</SessionsTableCells>
					<SessionsTableCells>Training</SessionsTableCells>
				</SessionsTable>
			</AppContainer>
		</>
	);
}
