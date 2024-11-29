import styled from "styled-components";
import PlayerDetailsBox from "@BPSI/components/PlayerDetailsBox";
import AddButton from "@BPSI/components/AddButton";
import { useMediaQuery } from "@BPSI/utils/useMediaQuery";
import DesktopLayout from "@BPSI/components/LayoutDesktop";
import theme from "@BPSI/utils/theme";

//Components
import TopBar from "@BPSI/components/UI/Topbar";

const TeamProfileHeader = styled.div`
	display: flex;
	margin-left: 3.6rem;
	margin-top: 2.8rem;
	position: relative;
`;

const TeamProfileHeaderLegend = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 3rem;

	& h1 {
		font-size: 3rem;
		color: ${theme.colors.black};
	}

	& span {
		color: ${theme.colors.black};
		font-size: 2rem;
	}
`;

const TeamStatWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-left: 3.6rem;
	margin-top: 4.3rem;
`;

const TeamInfo = styled.div`
	display: flex;
	flex-direction: column;

	& span {
		color: #000000;
		font-size: 1.2rem;
	}

	& span:first-of-type {
		margin-bottom: 1.5rem;
	}
`;

const TeamProfileName = styled.h3`
	margin-top: 4rem;
	color: ${theme.colors.black};
	font-size: 2.5rem;
	margin-left: 3.6rem;
`;

const StyFloatingTopButton = styled.div`
	background: #183277;
	padding: 0.5rem 1rem;
	width: 16rem;
	display: flex;
	justify-content: center;
	position: absolute;
	top: 2rem;
	right: 2rem;
	border-radius: 50px;

	a {
		font-size: 1.6rem;
		font-style: italic;
	}

	img {
		width: 1.2rem;
	}
`;

const TeamProfileNavigation = styled.div`
	display: flex;
	line-height: 1;
	margin-top: 1.8rem;
	margin-bottom: 0.9rem;
	margin-left: 3.6rem;
	margin-top: 2.9rem;
	width: 100%;
	max-width: 450px;
	color: ${theme.colors.white};
	border-bottom: 1px solid #000000;

	ul {
		display: flex;
		justify-content: space-between;
		list-style: none;

		li:first-of-type {
			margin-right: 8rem;
		}

		li:not(:first-child):not(:last-child) {
			margin-right: 6rem;
		}

		li {
			color: #636363;
			font-size: 1.6rem;
			font-style: italic;
			position: relative;
			cursor: pointer;

			&:hover,
			active {
				color: #000000;
				&:after {
					content: "";
					color: #000000;
					width: 10rem;
					border-bottom: 3px solid #000000;
					position: absolute;
					bottom: -4px;
					left: 0;
				}
			}
		}
	}
`;

const TeamStatTable = styled.div`
	display: flex;
	margin-left: 15rem;

	& div:nth-child(1) {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	& div:nth-child(4) {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
`;

const TeamStatTableCell = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 0.5px solid #000000;
	width: 60px;

	& span {
		color: #000000;
	}

	& span:first-of-type {
		font-size: 1.6rem;
		margin-top: 1rem;
	}

	& span:last-of-type {
		font-size: 1rem;
		margin-bottom: 1rem;
		margin-right: 1.2rem;
		margin-left: 1.2rem;
	}
`;

const SquadTitle = styled.h3`
	font-size: 1.6rem;
	color: #000000;
	margin-left: 3.6rem;
	margin-top: 3.4rem;
	margin-bottom: 1.3rem;
`;

const Squad = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 15rem);
	grid-gap: 4rem;
	margin-left: 3.6rem;
`;

const SquadWrapper = styled.div`
	display: flex;
	width: 100%;
`;

const TeamProfileNavigationWrapper = styled.div`
	display: flex;
`;

export default function TeamCreationS1() {
	let isDesktop = useMediaQuery("(min-width: 1024px)");

	let desktopView = (
		<DesktopLayout title="CLUBHOUSE > TEAMS > U9 RAMS">
			<TeamProfileHeader>
				<img
					src="../../assets/img/panthere-dark-logo-300.svg"
					alt="asd"
				/>
				<TeamProfileHeaderLegend>
					<h1>Panthera FC</h1>
					<span>London</span>
					<StyFloatingTopButton>
						<a href="">Edit Team</a>
					</StyFloatingTopButton>
				</TeamProfileHeaderLegend>
			</TeamProfileHeader>
			<TeamProfileName>U9 Rams</TeamProfileName>
			<TeamProfileNavigationWrapper>
				<TeamProfileNavigation>
					<ul>
						<li>Overview</li>
						<li>Stats</li>
						<li>FIxtures</li>
						<li>Training</li>
					</ul>
				</TeamProfileNavigation>
				<TeamStatTable>
					<TeamStatTableCell>
						<span>25</span>
						<span>Matches</span>
					</TeamStatTableCell>
					<TeamStatTableCell>
						<span>25</span>
						<span>Wins</span>
					</TeamStatTableCell>
					<TeamStatTableCell>
						<span>25</span>
						<span>Draws</span>
					</TeamStatTableCell>
					<TeamStatTableCell>
						<span>25</span>
						<span>Win %</span>
					</TeamStatTableCell>
				</TeamStatTable>
			</TeamProfileNavigationWrapper>
			<TeamStatWrapper>
				<TeamInfo>
					<span>League: Watford Fiendly League Division 1</span>
					<span>Head Coach: Dimitri Gbo</span>
				</TeamInfo>
			</TeamStatWrapper>
			<SquadTitle>Squad</SquadTitle>
			<SquadWrapper>
				<Squad>
					<PlayerDetailsBox name="Jesse Lingard" number="9" />
					<PlayerDetailsBox name="Jesse Lingard" number="9" />
					<PlayerDetailsBox name="Jesse Lingard" number="9" />
					<PlayerDetailsBox name="Jesse Lingard" number="9" />
					<PlayerDetailsBox name="Jesse Lingard" number="9" />
					<PlayerDetailsBox name="Jesse Lingard" number="9" />
					<PlayerDetailsBox name="Jesse Lingard" number="9" />
					<PlayerDetailsBox name="Jesse Lingard" number="9" />
				</Squad>
				<AddButton create="Create player" />
			</SquadWrapper>
		</DesktopLayout>
	);

	return <>{desktopView}</>;
}
