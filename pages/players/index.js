//Base Imports
import styled from "styled-components";

//Utils
import theme from "@BPSI/utils/theme";

//Components
import Layout from "@BPSI/components/UI/Layout";
import FloatingButton from "@BPSI/components/UI/FloatingButton";
import TopBar from "@BPSI/components/UI/Topbar";
import NavbarMobile from "@BPSI/components/NavbarMobile";
import Link from "next/link";

const StyTeamCreation = styled.div`
	background: url("/assets/img/app-background.svg");
	background-size: cover;
	padding: 2rem 1rem;
	height: 100%;

	h1 {
		font-size: ${theme.typography.small};
		font-weight: 400;
		padding: 1rem 0 2rem 0;
		text-align: center;
		color: ${theme.colors.white};
	}

	p {
		font-size: ${theme.typography.extraSmall};
	}

	> div:first-of-type {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-bottom: 50px;
	}
`;

const StyTeamsSquare = styled.div`
	background: white;
	border-radius: 0.5rem;
	margin: 1rem 0.5rem;
	text-align: center;
	width: 44%;

	img {
		width: 7rem;
	}

	div {
		display: flex;
		flex-direction: column;
		padding: 1.5rem 1.5rem;
		color: black;
		flex-wrap: wrap;

		h4 {
			font-size: ${theme.typography.small};
			color: ${theme.colors.black};
			margin-bottom: 1rem;
			font-weight: 400;
			height: 5rem;
		}

		span {
			color: ${theme.colors.black};
			font-size: ${theme.typography.extraSmall};
		}
	}
`;

export default function Players() {
	return (
		<Layout>
			<TopBar title="Players" />
			<StyTeamCreation>
				<h1>Players</h1>
				<div>
					<StyTeamsSquare>
						<Link href="/players/player">
							<div>
								<h4>Daniel Hardman</h4>
								<span>U9 Rams</span>
							</div>
						</Link>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>Mike Ross</h4>
							<span>U9 Rams</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>Jessica Pearson</h4>
							<span>U9 Rams</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>Louis Lift</h4>
							<span>U9 Rams</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>Harvey Spector</h4>
							<span>U9 Rams</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>Rachel Zone</h4>
							<span>U9 Rams</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>Donna Paulson</h4>
							<span>U9 Rams</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>Cristiano Ronaldo</h4>
							<span>U9 Rams</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>Jack Sullivan</h4>
							<span>U9 Rams</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>Vlad Bochtor</h4>
							<span>U9 Rams</span>
						</div>
					</StyTeamsSquare>
				</div>
			</StyTeamCreation>
			<Link href="/teams/team-creation/steps/teamCreation8">
				<FloatingButton />
			</Link>
			<NavbarMobile />
		</Layout>
	);
}
