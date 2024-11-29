import styled from "styled-components";

//Components
import Layout from "@BPSI/components/UI/Layout";
import TopBar from "@BPSI/components/UI/Topbar";
import theme from "@BPSI/utils/theme";
import NavbarMobile from "@BPSI/components/NavbarMobile";

const StyClubCreation = styled.div`
	background: url("/assets/img/app-background.svg");
	background-size: cover;
	padding: 2rem 1rem;
	height: 100vh;

	h1 {
		font-size: ${theme.typography.medium};
		font-weight: 400;
		padding: 2rem 0;
		text-align: center;
		color: ${theme.colors.white};
	}

	p {
		font-size: ${theme.typography.extraSmall};
	}
`;

const StyUKMap = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	span {
		position: absolute;
		top: 2rem;
		left: 5rem;
		font-size: 1.5rem;
		padding: 0.5rem 2rem;
		border: 1px solid white;
		border-radius: 4rem;
	}

	img {
		width: 100%;
		padding: 0 3rem;
	}
	.StyLocationList {
		display: flex;
		justify-content: center;
	}
	ol {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		margin-top: 3rem;
		margin-left: 3rem;
		li {
			margin: 0.5rem 1.5rem;
			font-size: 1.3rem;
		}
	}
`;

export default function ClubCreation({ nextStep }) {
	return (
		<Layout>
			<TopBar title="Create Club" profile back />
			<StyClubCreation>
				<h1>Where is your club located?</h1>
				<StyUKMap>
					<span>UK</span>
					<img src="/assets/img/ukmap.svg" alt="" />
					<div className="StyLocationList">
						<ol>
							<li>North East</li>
							<li>Yorkshire &amp; H</li>
							<li>North West</li>
							<li>Wales</li>
							<li>West Midlands</li>
							<li>East Midlands</li>
							<li>East of England</li>
							<li>London</li>
							<li>South East</li>
							<li>South West</li>
						</ol>
					</div>
				</StyUKMap>
			</StyClubCreation>
			<NavbarMobile />
		</Layout>
	);
}
