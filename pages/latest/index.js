import styled from "styled-components";

//Components
import Layout from "@BPSI/components/LayoutDesktop";
import { useMediaQuery } from "@BPSI/utils/useMediaQuery";

const StyDesktopDashboard = styled.div`
	position: relative;
`;

const StyMatches = styled.div`
	.StyMatchesWrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	h3 {
		font-size: 1.6rem;
		color: #4e4b4b;
		font-style: italic;
		margin: 1rem 2rem;
	}
`;

const StyMatchBox = styled.div`
	border: 1px solid #e5e5e5;
	border-radius: 3px;
	margin: 2rem 1rem;
	padding: 1rem;
	width: 20rem;
	position: relative;
	z-index: 2;

	&:after {
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		width: 100%;
		height: 100%;
		z-index: -1;
		background: #eeeeee;
		clip-path: polygon(0 50%, 0% 100%, 57% 100%);
	}

	.StyTeamNumber {
		position: absolute;
		color: #006ac2;
		top: 0.6rem;
		right: 0.6rem;
		border: 1px solid #006ac2;
		border-radius: 50%;
		width: 1.7rem;
		height: 1.7rem;
		text-align: center;
		font-size: 1.2rem;
		font-style: normal;
	}

	span,
	small {
		color: black;
		font-style: italic;
	}

	span {
		font-size: 1.6rem;
	}

	small {
		font-size: 1.1rem;
		display: block;
		color: #4e4b4b;
	}

	small:first-of-type {
		margin: 1.5rem 0 0.5rem 0;
	}

	div {
		padding-left: 0.5rem;

		span:first-child {
			margin-right: 4rem;
		}
	}
`;

const StyScreenNavigation = styled.div`
	width: 60vw;
	margin: 3rem 2rem 5rem 2rem;
	padding: 1rem;
	color: black;
	border-bottom: 1px solid black;

	ul {
		display: flex;
		margin: 0 2rem;
		justify-content: space-between;
		list-style: none;

		li {
			color: black;
			margin: 0 2rem;
			font-size: 1.6rem;
			font-style: italic;
			position: relative;
			cursor: pointer;

			&:hover {
				&:before {
					content: "";
					color: black;
					width: 13rem;
					border-bottom: 3px solid black;
					position: absolute;
					bottom: -10px;
					right: 50%;
					transform: translateX(50%);
					transition: all ease-out 2s;
				}
			}
		}
	}
`;

const StyFloatingTopButton = styled.div`
	background: #183277;
	padding: 0.5rem 1rem;
	width: 16rem;
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 2rem;
	right: 2rem;
	border-radius: 50px;

	a {
		font-size: 1.3rem;
		font-style: italic;
	}

	img {
		width: 1.2rem;
	}
`;

export default function TeamCreationS1() {
	const isDesktop = useMediaQuery("(min-width: 1024px)");
	return isDesktop ? (
		<Layout title="Dashboard">
			<StyDesktopDashboard>
				<StyFloatingTopButton>
					<a href="#">Select Venue </a>
					<img
						src="/assets/img/solid-arrow-down.svg"
						alt="Select venue"
					/>
				</StyFloatingTopButton>
				<StyScreenNavigation>
					<ul>
						<li>All Matches</li>
						<li>Live Matches</li>
						<li>Competitive</li>
						<li>Recreational</li>
					</ul>
				</StyScreenNavigation>
				<StyMatches>
					<h3>All matches: 14</h3>
					<div className="StyMatchesWrapper">
						<StyMatchBox>
							<span class="StyTeamNumber">7</span>
							<div>
								<span>Team 1</span>
								<span>4</span>
							</div>
							<div>
								<span>Team 2</span>
								<span>0</span>
							</div>
							<small>Monday Night Football</small>
							<small>Wembly</small>
						</StyMatchBox>
						<StyMatchBox>
							<span class="StyTeamNumber">7</span>
							<div>
								<span>Team 1</span>
								<span>4</span>
							</div>
							<div>
								<span>Team 2</span>
								<span>0</span>
							</div>
							<small>Monday Night Football</small>
							<small>Wembly</small>
						</StyMatchBox>
						<StyMatchBox>
							<span class="StyTeamNumber">7</span>
							<div>
								<span>Team 1</span>
								<span>4</span>
							</div>
							<div>
								<span>Team 2</span>
								<span>0</span>
							</div>
							<small>Monday Night Football</small>
							<small>Wembly</small>
						</StyMatchBox>
						<StyMatchBox>
							<span class="StyTeamNumber">7</span>
							<div>
								<span>Team 1</span>
								<span>4</span>
							</div>
							<div>
								<span>Team 2</span>
								<span>0</span>
							</div>
							<small>Monday Night Football</small>
							<small>Wembly</small>
						</StyMatchBox>
						<StyMatchBox>
							<span class="StyTeamNumber">7</span>
							<div>
								<span>Team 1</span>
								<span>4</span>
							</div>
							<div>
								<span>Team 2</span>
								<span>0</span>
							</div>
							<small>Monday Night Football</small>
							<small>Wembly</small>
						</StyMatchBox>
						<StyMatchBox>
							<span class="StyTeamNumber">7</span>
							<div>
								<span>Team 1</span>
								<span>4</span>
							</div>
							<div>
								<span>Team 2</span>
								<span>0</span>
							</div>
							<small>Monday Night Football</small>
							<small>Wembly</small>
						</StyMatchBox>
						<StyMatchBox>
							<span class="StyTeamNumber">7</span>
							<div>
								<span>Team 1</span>
								<span>4</span>
							</div>
							<div>
								<span>Team 2</span>
								<span>0</span>
							</div>
							<small>Monday Night Football</small>
							<small>Wembly</small>
						</StyMatchBox>
						<StyMatchBox>
							<span class="StyTeamNumber">7</span>
							<div>
								<span>Team 1</span>
								<span>4</span>
							</div>
							<div>
								<span>Team 2</span>
								<span>0</span>
							</div>
							<small>Monday Night Football</small>
							<small>Wembly</small>
						</StyMatchBox>
						<StyMatchBox>
							<span class="StyTeamNumber">7</span>
							<div>
								<span>Team 1</span>
								<span>4</span>
							</div>
							<div>
								<span>Team 2</span>
								<span>0</span>
							</div>
							<small>Monday Night Football</small>
							<small>Wembly</small>
						</StyMatchBox>
						<StyMatchBox>
							<span class="StyTeamNumber">7</span>
							<div>
								<span>Team 1</span>
								<span>4</span>
							</div>
							<div>
								<span>Team 2</span>
								<span>0</span>
							</div>
							<small>Monday Night Football</small>
							<small>Wembly</small>
						</StyMatchBox>
					</div>
					<h3>Live matches: 6</h3>
				</StyMatches>
			</StyDesktopDashboard>
		</Layout>
	) : (
		<h1>mobile</h1>
	);
}
