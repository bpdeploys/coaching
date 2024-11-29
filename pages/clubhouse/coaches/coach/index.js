//Base Imports
import styled from "styled-components";

//Utils
import { useMediaQuery } from "@BPSI/utils/useMediaQuery";
import theme from "@BPSI/utils/theme";

//Components
import DetailsBox from "@BPSI/components/DetailsBox/DetailsBox";
import DesktopLayout from "@BPSI/components/LayoutDesktop";
import OptionsButton from "@BPSI/components/OptionsButton/OptionsButton";
import TopBar from "@BPSI/components/UI/Topbar";
import NavbarMobile from "@BPSI/components/NavbarMobile";

const StyClubhouse = styled.div`
	background: url("/assets/img/app-background.svg");
	background-size: cover;
	padding: 3rem 3rem;
	height: 100vh;
	overflow-y: hidden;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const StyClubInfo = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 4rem;

	div {
		display: flex;
		flex-direction: column;
		padding: 1rem 2rem;

		h1 {
			font-size: 3rem;
		}

		span {
			font-size: 1.5rem;
		}
	}
`;

const StyDetailsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-top: 2rem;

	.StyDetailsTitle {
		display: block;
		width: 100%;
		margin-bottom: 1.5rem;
		span {
			font-size: 2rem;
		}
	}
`;

const TeamStatsHeader = styled.div`
	display: flex;
	margin-left: 3.6rem;
	margin-top: 2.8rem;
	position: relative;

	img {
		width: 6rem;
	}
`;

const TeamStatsHeaderLegend = styled.div`
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

const StatWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 200px);
	grid-auto-rows: 1fr;
	gap: 6rem;
	margin-left: 3.6rem;
`;

const StatName = styled.h3`
	margin-top: 4rem;
	color: ${theme.colors.black};
	font-size: 1.6rem;
	margin-left: 3.6rem;
	margin-bottom: 3rem;
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

export default function TeamCreationS1() {
	let isDesktop = useMediaQuery("(min-width: 1024px)");

	let mobileView = (
		<>
			<TopBar title="Clubhouse" />
			<StyClubhouse>
				<StyClubInfo>
					<img src="/assets/img/panthere.svg" alt="Team name" />
					<div>
						<h1>Panthera FC</h1>
						<span>London</span>
					</div>
				</StyClubInfo>
				<StyDetailsWrapper>
					<div className="StyDetailsTitle">
						<span>Backroom</span>
					</div>
					<DetailsBox
						number="2"
						name="Coaches"
						img="/assets/img/jersey.svg"
					/>
					<DetailsBox number="7" name="Stats Team" />
				</StyDetailsWrapper>
				<StyDetailsWrapper>
					<div className="StyDetailsTitle">
						<span>Teams</span>
					</div>
					<DetailsBox number="8" name="Teams" href="/coaches" />
					<DetailsBox
						number="82"
						name="Players"
						img="/assets/img/player-icon.svg"
					/>
				</StyDetailsWrapper>
			</StyClubhouse>
			<OptionsButton />
			<NavbarMobile />
		</>
	);

	let desktopView = (
		<DesktopLayout title="CLUBHOUSE">
			<TeamStatsHeader>
				<img src="/assets/img/panthere-dark-logo-300.svg" alt="asd" />
				<TeamStatsHeaderLegend>
					<h1>Panthera FC</h1>
					<span>London</span>
					<StyFloatingTopButton>
						<a href="">Create Team +</a>
					</StyFloatingTopButton>
				</TeamStatsHeaderLegend>
			</TeamStatsHeader>
			<StatName>8 Teams</StatName>
			<StatWrapper>
				<DetailsBox number="Dimitri Gbo" name="U9 Rams" />
				<DetailsBox number="Dimitri Gbo" name="U10 Rams" />
				<DetailsBox number="Dimitri Gbo" name="10 Raiders" />
				<DetailsBox number="Dimitri Gbo" name="U10 Stalkers" />
				<DetailsBox number="Dimitri Gbo" name="Chelsea" />
				<DetailsBox number="Dimitri Gbo" name="Everton" />
				<DetailsBox number="Dimitri Gbo" name="Arsenal" />
				<DetailsBox number="Dimitri Gbo" name="Liverpool" />
			</StatWrapper>
		</DesktopLayout>
	);

	return <>{!isDesktop ? mobileView : desktopView}</>;
}
