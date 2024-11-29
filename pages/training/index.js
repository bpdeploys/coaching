//Base component
import styled from "styled-components";

//Utils
import theme from "@BPSI/utils/theme";
import fonts from "@BPSI/utils/fonts";

//Components
import Title from "@BPSI/components/TitleCenter";
import TopBar from "@BPSI/components/UI/Topbar";
import NavbarMobile from "@BPSI/components/NavbarMobile";

const StyTraining = styled.div`
	background: url("/assets/img/landing-background.svg");
	background-size: cover;
	padding: 2rem 3rem;
	height: 100vh;

	p {
		font-size: ${theme.typography.extraSmall};
	}
`;

const StyMainTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem;

	h4 {
		font-weight: 100;
	}

	div {
		justify-content: space-between;
	}
`;

const StyMainContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem 0rem;

	h4 {
		font-size: ${theme.typography.small};
		border-bottom: 1px solid white;
		margin-bottom: 2rem;
	}
`;

const StyTextsContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	flex-direction: column;
	margin: 2rem;

	p {
		font-family: ${fonts[1].otf};
		font-weight: ${fonts[1].weight};
		font-size: ${theme.typography.small};
		margin-top: 2rem;
	}
`;

const StyRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 100%;
`;

const StyColumn = styled.div`
	display: flex;
	flex-direction: column;

	div {
		font-size: ${theme.typography.small};
		display: flex;
		align-items: center;
		margin: 2rem;
	}

	div > img {
		heigh: 40px;
		width: 40px;
		margin-right: 1.5rem;
	}
`;

export default function Training() {
	return (
		<>
			<TopBar title="Training" />
			<StyTraining>
				<StyMainTitle>
					<Title title={"U14 Reds"} />
					<StyTextsContainer>
						<p>Coach: Dimitri Gbo</p>
						<p>Monday 30th March 2020</p>
						<p>Session Ended</p>
					</StyTextsContainer>
				</StyMainTitle>
				<StyMainContent>
					<h4>6 players attended</h4>
					<StyRow>
						<StyColumn>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Tim</span>
							</div>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Tim</span>
							</div>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Tim</span>
							</div>
						</StyColumn>
						<StyColumn>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Fox</span>
							</div>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Fox</span>
							</div>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Fox</span>
							</div>
						</StyColumn>
					</StyRow>
				</StyMainContent>
				<StyMainContent>
					<h4>2 players not attended</h4>
					<StyRow>
						<StyColumn>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Tim</span>
							</div>
						</StyColumn>
						<StyColumn>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Fox</span>
							</div>
						</StyColumn>
					</StyRow>
				</StyMainContent>
			</StyTraining>
			<NavbarMobile />
		</>
	);
}
