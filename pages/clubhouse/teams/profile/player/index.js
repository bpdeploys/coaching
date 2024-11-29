import styled from "styled-components";
import PlayerDetailsBox from "@BPSI/components/PlayerDetailsBox";
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

const PlayerInfoWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-left: 3.6rem;
	margin-top: 4.3rem;
`;

const PlayerInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 15rem;

	& span {
		color: #000000;
		font-size: 1.2rem;
	}

	& span:nth-child(1),
	& span:nth-child(2) {
		margin-bottom: 1.5rem;
	}
`;

const PlayerProfileName = styled.h3`
	color: ${theme.colors.black};
	font-size: 2.5rem;
	margin-left: 3.6rem;
	margin-right: 6.7rem;
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
			margin-right: 17rem;
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

const PlayerNameAndPosition = styled.div`
	display: flex;
	align-items: center;
	margin-top: 4rem;
`;

const PlayerPosition = styled.h3`
	color: ${theme.colors.black};
	font-size: 1.6rem;
	line-height: 1;
	display: flex;
	align-items: center;

	& span {
		color: ${theme.colors.black};
		font-size: 3.5rem;
		margin-left: 1.1rem;
	}
`;

export default function TeamCreationS1() {
	let isDesktop = useMediaQuery("(min-width: 1024px)");

	let desktopView = (
		<DesktopLayout title="CLUBHOUSE > TEAMS > U9 RAMS">
			<TeamProfileHeader>
				<img src="/assets/img/panthere-dark-logo-300.svg" alt="asd" />
				<TeamProfileHeaderLegend>
					<h1>Panthera FC</h1>
					<span>London</span>
					<StyFloatingTopButton>
						<a href="">Edit Player</a>
					</StyFloatingTopButton>
				</TeamProfileHeaderLegend>
			</TeamProfileHeader>
			<PlayerNameAndPosition>
				<PlayerProfileName>Jesse Lingard</PlayerProfileName>
				<PlayerPosition>
					Attacking Midfield
					<span>10</span>
				</PlayerPosition>
			</PlayerNameAndPosition>
			<TeamProfileNavigation>
				<ul>
					<li>Overview</li>
					<li>Stats</li>
				</ul>
			</TeamProfileNavigation>
			<PlayerInfoWrapper>
				<PlayerInfo>
					<span>Parent 1: Terry Lingard</span>
					<span>Tez@yahoo.co.uk</span>
					<span>07455442862</span>
				</PlayerInfo>
				<PlayerInfo>
					<span>Parent 2: Martha Lingard</span>
					<span>Martha@yahoo.co.uk</span>
					<span>07455442862</span>
				</PlayerInfo>
			</PlayerInfoWrapper>
		</DesktopLayout>
	);

	return <>{desktopView}</>;
}
