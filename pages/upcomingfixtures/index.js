//Base Imports
import styled from "styled-components";

//Components
import FullWidthRectangle from "@BPSI/components/FullWidthRectangle";
import FloatingButton from "@BPSI/components/UI/FloatingButton";
import TopBar from "@BPSI/components/UI/Topbar";
import theme from "@BPSI/utils/theme";
import Link from "next/link";
import NavbarMobile from "@BPSI/components/NavbarMobile";

const StyTeams = styled.div`
	background: url("/assets/img/app-background.svg");
	background-size: cover;
	padding: 2rem 3rem;
	height: 100vh;
	width: 100%;
	overflow-y: hidden;
	display: flex;
	align-items: center;
	flex-direction: column;

	.container {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
	}

	.second-text {
		margin-top: 1rem;
	}

	.date {
		margin-top: 1rem;
	}

	h1 {
		font-size: ${theme.typography.medium};
		font-weight: 400;
		padding: 3rem 0;
		width: 80%;
	}

	p {
		font-size: ${theme.typography.extraSmall};
	}
`;

export default function Teams({ nextStep }) {
	return (
		<>
			<TopBar title="Fixtures" />
			<StyTeams>
				<FullWidthRectangle>
					<Link href="/training/training-tracker">
						<div>
							<img
								src="/assets/img/panthere.svg"
								alt="panthere alt"
							/>
							<div className="container">
								<h4>LOTR Rams</h4>
								<span className="second-text">Dimitri Gbo</span>
								<span className="date">27/03/21</span>
							</div>
							<img
								className="StyRightArrow"
								src="/assets/img/right-rounded-arrow.svg"
								alt="Right rounded arrow"
							/>
						</div>
					</Link>
				</FullWidthRectangle>
				<FullWidthRectangle>
					<Link href="/training/training-tracker">
						<div>
							<img
								src="/assets/img/panthere.svg"
								alt="panthere alt"
							/>
							<div className="container">
								<h4>Wealdstone Blues</h4>
								<span className="second-text">
									Wealdstone Blues
								</span>
								<span className="date">27/03/21</span>
							</div>
							<img
								className="StyRightArrow"
								src="/assets/img/right-rounded-arrow.svg"
								alt="Right rounded arrow"
							/>
						</div>
					</Link>
				</FullWidthRectangle>
				<FullWidthRectangle>
					<Link href="/training/training-tracker">
						<div>
							<img
								src="/assets/img/panthere.svg"
								alt="panthere alt"
							/>
							<div className="container">
								<h4>Wealdstone Blues</h4>
								<span className="second-text">Dimitri Gbo</span>
								<span className="date">27/03/21</span>
							</div>
							<img
								className="StyRightArrow"
								src="/assets/img/right-rounded-arrow.svg"
								alt="Right rounded arrow"
							/>
						</div>
					</Link>
				</FullWidthRectangle>
				<FloatingButton onClick={nextStep}>
					<span>+</span>
				</FloatingButton>
				<NavbarMobile messages />
			</StyTeams>
		</>
	);
}
