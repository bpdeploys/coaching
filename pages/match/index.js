import styled from "styled-components";
import Layout from "@BPSI/components/UI/Layout";
import theme from "@BPSI/utils/theme";
import TopBar from "@BPSI/components/UI/Topbar";
import ProgressBar from "@BPSI/components/UI/ProgressBar";

const StyMatch = styled.div`
	background: url("/assets/img/app-background.svg");
	height: 100vh;
	overflow: auto;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem 0;
`;

const StyTitles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	h1,
	h3,
	h4 {
		color: ${theme.colors.white};
		font-size: ${theme.typography.small};
		font-weight: 100;
	}

	h1,
	h4 {
		margin: 1rem 0;
		font-size: ${theme.typography.large};
	}

	h3 {
		margin: 1rem 0;
		font-size: ${theme.typography.extraLarge};
	}
`;

const StyDivider = styled.div`
	margin-top: 3rem;
	display: flex;
	justify-content: space-between;
	height: 3.5vh;
	width: 94vw;
	border-bottom: white solid 2.5px;
	div {
		font-size: ${theme.typography.small};
	}
`;

const StyProgressBar = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 95vw;
`;

const StyProgressBarContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 25vw;

	span {
		font-size: ${theme.typography.extraSmall};
	}
`;

const StyImg = styled.img`
	margin-left: 0.5rem;
	height: 35px;
	width: 35px;
`;

const StyButton = styled.button`
	padding: 1rem 0;
	margin: 3rem 0rem;
	border: none;
	height: 76px;
	width: 90%;
	background: white;
	border-radius: 5rem;
	color: black;
	font-size: 2.5rem;
	text-transform: uppercase;
	text-align: center;
`;

const MatchButtons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	max-width: 340px;
	width: 100%;
	border-radius: 30px;
	padding: 1.5rem 0;
	background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
	margin: ${(props) => (props.margin ? props.margin : null)};

	& > span {
		font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
		color: ${(props) => (props.color ? props.color : null)};
	}
`;

export default function Register() {
	return (
		<Layout>
			<TopBar title="Match" />
			<StyMatch>
				<StyTitles>
					<h1>LOTR Rams</h1>
					<h4>58:03</h4>
					<h3>1 : 3</h3>
				</StyTitles>
				<StyDivider>
					<div>0</div>
					<div>10</div>
					<div>20</div>
					<div>30</div>
					<div>40</div>
				</StyDivider>
				<div>
					<StyProgressBar>
						<ProgressBar
							bgcolor="#1C3B8C"
							completed="80"
							ball="1"
							elements={
								<StyProgressBarContent>
									<StyImg
										src="/assets/img/baller-icon.svg"
										alt="icon"
									/>
									<span>10 Tim </span>
								</StyProgressBarContent>
							}
						/>
						<ProgressBar
							bgcolor="#1C3B8C"
							completed="30"
							elements={
								<StyProgressBarContent>
									<StyImg
										src="/assets/img/baller-icon.svg"
										alt="icon"
									/>
									<span>10 Tim </span>
								</StyProgressBarContent>
							}
						/>
						<ProgressBar
							bgcolor="#1C3B8C"
							completed="50"
							elements={
								<StyProgressBarContent>
									<StyImg
										src="/assets/img/baller-icon.svg"
										alt="icon"
									/>
									<span>10 Tim </span>
								</StyProgressBarContent>
							}
						/>
						<ProgressBar
							bgcolor="#1C3B8C"
							completed="40"
							elements={
								<StyProgressBarContent>
									<StyImg
										src="/assets/img/baller-icon.svg"
										alt="icon"
									/>
									<span>10 Tim </span>
								</StyProgressBarContent>
							}
						/>
						<ProgressBar
							bgcolor="#1C3B8C"
							completed="20"
							ball
							elements={
								<StyProgressBarContent>
									<StyImg
										src="/assets/img/baller-icon.svg"
										alt="icon"
									/>
									<span>10 Tim </span>
								</StyProgressBarContent>
							}
						/>
						<ProgressBar
							bgcolor="#1C3B8C"
							completed="43"
							elements={
								<StyProgressBarContent>
									<StyImg
										src="/assets/img/baller-icon.svg"
										alt="icon"
									/>
									<span>10 Tim </span>
								</StyProgressBarContent>
							}
						/>
						<ProgressBar
							bgcolor="#1C3B8C"
							completed="100"
							ball="5"
							elements={
								<StyProgressBarContent>
									<StyImg
										src="/assets/img/baller-icon.svg"
										alt="icon"
									/>
									<span>10 Tim </span>
								</StyProgressBarContent>
							}
						/>
						<ProgressBar
							bgcolor="#1C3B8C"
							completed="76"
							elements={
								<StyProgressBarContent>
									<StyImg
										src="/assets/img/baller-icon.svg"
										alt="icon"
									/>
									<span>10 Tim </span>
								</StyProgressBarContent>
							}
						/>
						<ProgressBar
							bgcolor="#1C3B8C"
							completed="54"
							elements={
								<StyProgressBarContent>
									<StyImg
										src="/assets/img/baller-icon.svg"
										alt="icon"
									/>
									<span>10 Tim </span>
								</StyProgressBarContent>
							}
						/>
						<ProgressBar
							bgcolor="#1C3B8C"
							completed="97"
							ball="2"
							elements={
								<StyProgressBarContent>
									<StyImg
										src="/assets/img/baller-icon.svg"
										alt="icon"
									/>
									<span>10 Tim</span>
								</StyProgressBarContent>
							}
						/>
					</StyProgressBar>
				</div>
				<MatchButtons
					bgColor="#C4C4C4"
					color="#000000"
					margin="3rem 0 2rem 0"
					fontSize="1.6rem"
				>
					<span>1st</span>
					<span>
						13mins
						<br />
						10 Tim
					</span>
					<span>
						COUNTERATTACK
						<br />
						SOLO GOAL
					</span>
				</MatchButtons>
				<MatchButtons
					bgColor="#F01616"
					color="#ffffff"
					margin="0 0   2rem  0"
					fontSize="1.6rem"
				>
					<span>1st</span>
					<span>
						25 mins
						<br />
						10 Tim
					</span>
					<span>ADD CATEGORY</span>
				</MatchButtons>
				<MatchButtons
					bgColor="#C4C4C4"
					color="#000000"
					fontSize="1.6rem"
				>
					<span>1st</span>
					<span>
						38 mins
						<br />
						10 Tim
					</span>
					<span>
						COUNTERATTACK
						<br />
						SOLO GOAL
					</span>
				</MatchButtons>
				<StyButton>Refresh</StyButton>
			</StyMatch>
		</Layout>
	);
}
