import styled from "styled-components";
import Title from "@BPSI/components/TitleCenter";

import Toggle from "@BPSI/components/UI/Toggle";
import TopBar from "@BPSI/components/UI/Topbar";
import fonts from "@BPSI/utils/fonts";
import theme from "@BPSI/utils/theme";

const StyTraining = styled.div`
	background: url("/assets/img/app-background.svg");
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
`;

const StyMainContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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

const StyColumn = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;

	div {
		font-size: ${theme.typography.small};
		display: flex;
		align-items: center;
		margin: 1rem;
	}

	&:first-child {
		justify-content: space-between;
	}

	div img {
		heigh: 3.125rem;
		width: 3.125rem;
	}

	div span {
		margin-left: 1.5rem;
	}

	.StyEndButton {
		display: flex;
		justify-content: center;
		a {
			text-transform: uppercase;
			border: none;
			background: ${({ theme }) => theme.colors.black};
			color: ${theme.colors.white};
			font-size: ${theme.typography.small};
			padding: 1rem;
			width: 80%;
			text-align: center;
			border-radius: 0.5rem;
			font-weight: 500;
		}
	}
`;

export default function Home() {
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
					<h4>Squad</h4>
					<StyColumn>
						<div>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Tim</span>
							</div>
							<Toggle trueText="In" falseText="Not" />
						</div>
						<div>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Tim</span>
							</div>
							<Toggle trueText="In" falseText="Not" />
						</div>
						<div>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Tim</span>
							</div>
							<Toggle trueText="In" falseText="Not" />
						</div>
						<div>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Tim</span>
							</div>
							<Toggle trueText="In" falseText="Not" />
						</div>
						<div>
							<div>
								<img src="/assets/img/baller-icon.svg" alt="" />
								<span>Tim</span>
							</div>
							<Toggle trueText="In" falseText="Not" />
						</div>
						<div className="StyEndButton">
							<a href="#">END</a>
						</div>
					</StyColumn>
				</StyMainContent>
			</StyTraining>
		</>
	);
}
