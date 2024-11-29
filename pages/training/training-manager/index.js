//Base imports
import styled from "styled-components";

//Utils
import theme from "@BPSI/utils/theme";

//Components
import FloatingButton from "@BPSI/components/UI/FloatingButton";
import TopBar from "@BPSI/components/UI/Topbar";
import NavbarMobile from "@BPSI/components/NavbarMobile";

const StyTeamCreation = styled.div`
	background: url("/assets/img/app-background.svg");
	background-size: cover;
	height: 100vh;

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

	div:first-of-type {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
`;

const StyTeamsSquare = styled.div`
	background: white;
	border-radius: 0.5rem;
	margin: 1rem 0.5rem;
	text-align: center;
	min-width: 40%;

	img {
		width: 7rem;
	}

	div {
		display: flex;
		flex-direction: column;
		padding: 1.5rem 1.5rem;
		color: black;

		h4 {
			font-size: ${theme.typography.small};
			color: ${theme.colors.black};
			margin-bottom: 2rem;
			font-weight: 400;
		}

		span {
			color: ${theme.colors.black};
			font-size: ${theme.typography.extraSmall};
		}
	}
`;

export default function TrainingManager() {
	return (
		<>
			<TopBar title="Training" />
			<StyTeamCreation>
				<h1>Training - 10</h1>
				<div>
					<StyTeamsSquare>
						<div>
							<h4>U14 Reds</h4>
							<span>Dimitri</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>U10 White</h4>
							<span>Kamron</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>U14 Reds</h4>
							<span>Dimitri</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>U10 White</h4>
							<span>Kamron</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>U14 Reds</h4>
							<span>Dimitri</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>U10 White</h4>
							<span>Kamron</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>U14 Reds</h4>
							<span>Dimitri</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>U10 White</h4>
							<span>Kamron</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>U14 Reds</h4>
							<span>Dimitri</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>U10 White</h4>
							<span>Kamron</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>U14 Reds</h4>
							<span>Dimitri</span>
						</div>
					</StyTeamsSquare>
					<StyTeamsSquare>
						<div>
							<h4>U10 White</h4>
							<span>Kamron</span>
						</div>
					</StyTeamsSquare>
				</div>
				<NavbarMobile />
			</StyTeamCreation>
		</>
	);
}
