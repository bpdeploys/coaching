import styled from "styled-components";
import MenuIcon from "@BPSI/components/UI/MenuIcon";
import theme from "@BPSI/utils/theme";
import Link from "next/link";

const StyTeamProfile = styled.div`
	background: url("/assets/img/background2.svg");
	background-size: cover;
	overflow: auto;
	padding: 2rem 3rem;
	width: 100vw;
	height: 100vh;

	.menu {
		margin-top: -2rem;
		margin-left: -2rem;
		height: 6rem;
		width: 6rem;
	}
`;

const StyTitles = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	justify-content: space-between;
	margin-top: 3rem;

	h1 {
		font-size: ${theme.typography.large};
	}

	h2 {
		font-size: ${theme.typography.large};
	}
`;

const StyPolygon = styled.div`
	img {
		height: 15px;
		width: 15px;
	}
`;

const StyStarBar = styled.div`
	width: 100%;
	height: 10%;
	align-items: center;
	margin-top: 5rem;
	display: flex;
	justify-content: center;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 8rem;
		width: 8rem;
	}

	.first-square,
	.second-square,
	.third-square,
	.fourth-square {
		display: flex;
		padding: 4.7rem;
		flex-direction: column;
		border: 0.5px solid white;

		h4 {
			font-size: ${theme.typography.medium};
		}

		span {
			font-size: ${theme.typography.ultraSmall};
		}
	}

	.first-square {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.third-square {
		border-left: 0px;
	}

	.fourth-square {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
`;

const StyTeamInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 10%;
	margin-top: 10rem;

	.container {
		h4 {
			font-size: ${theme.typography.small};
		}
	}

	.icons-container {
		display: flex;
		margin-top: 0.5rem;
		justify-content: space-around;

		div {
			display: flex;
			width: 100%;
			flex-direction: column;
			align-items: center;
		}

		div img {
			display: flex;
			border-radius: 50px;
			background-color: white;
			width: 45px;
			height: 45px;
		}

		span {
			margin-top: 0.5rem;
			font-size: ${theme.typography.extraSmall};
			color: black;
		}
	}
`;

const StyOverview = styled.div`
	height: 40%;
	margin-top: 8rem;

	h4 {
		margin-bottom: 1.5rem;
		font-size: ${theme.typography.small};
	}

	.background {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: white;
		margin-bottom: 1.5rem;
		height: 15%;
		width: 100%;
	}

	.background img {
		margin-right: 2rem;
	}

	.background span {
		margin-left: 1.5rem;
		font-size: ${theme.typography.extraSmall};
		color: black;
	}
`;

export default function Home() {
	return (
		<StyTeamProfile>
			<img className="menu" src="/assets/img/menuicon.svg" alt="" />
			<StyTitles>
				<div>
					<h4>Harrow Youth League</h4>
					<h4>
						Division 1
						<span style={{ fontSize: "7px", marginLeft: "10px" }}>
							(2020/2021)
						</span>
					</h4>
					<h1>Pinnacle FC</h1>
					<h2>u14</h2>
				</div>
				<StyPolygon>
					<img
						src="/assets/img/white-polygon.svg"
						alt="white polygon"
					/>
				</StyPolygon>
			</StyTitles>
			<StyStarBar>
				<div className="first-square">
					<h4>25</h4>
					<span>Matches</span>
				</div>
				<div className="second-square">
					<h4>25</h4>
					<span>Matches</span>
				</div>
				<div className="third-square">
					<h4>25</h4>
					<span>Matches</span>
				</div>
				<div className="fourth-square">
					<h4>25</h4>
					<span>Matches</span>
				</div>
			</StyStarBar>
			<StyTeamInfo>
				<div className="container">
					<h4>Team Info</h4>
					<div className="icons-container">
						<Link href="/players">
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Players</span>
							</div>
						</Link>
						<Link href="/coaches">
							<div>
								<img src="/assets/img/coaches.svg" alt="" />
								<span>Coaches</span>
							</div>
						</Link>
						<div>
							<img src="/assets/img/blackjersey.svg" alt="" />
							<span>Kit Sponsor</span>
						</div>
						<div>
							<img src="/assets/img/trainingkit.svg" alt="" />
							<span>Training Kit</span>
						</div>
					</div>
				</div>
			</StyTeamInfo>
			<StyOverview>
				<h4>Overview</h4>
				<div className="background">
					<span>Lineups & Formations</span>
					<img src="/assets/img/right-rounded-arrow.svg" alt="" />
				</div>
				<div className="background">
					<span>Team Stats</span>
					<img src="/assets/img/right-rounded-arrow.svg" alt="" />
				</div>
				<div className="background">
					<span>Training Report</span>
					<img src="/assets/img/right-rounded-arrow.svg" alt="" />
				</div>
				<div className="background">
					<span>Upcoming Fixtures</span>
					<img src="/assets/img/right-rounded-arrow.svg" alt="" />
				</div>
			</StyOverview>
		</StyTeamProfile>
	);
}
