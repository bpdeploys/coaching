import styled from "styled-components";
import Link from "next/link";

//Components
import FloatingButton from "@BPSI/components/UI/FloatingButton";
import TopBar from "@BPSI/components/UI/Topbar";
import theme from "@BPSI/utils/theme";
import NavbarMobile from "@BPSI/components/NavbarMobile";

const StyTrainingSession = styled.div`
	background: url("/assets/img/app-background.svg");
	background-size: cover;
	padding: 2rem 1rem;
	height: 100vh;

	h1 {
		font-size: ${theme.typography.small};
		font-weight: 400;
		padding: 1rem 0 2rem 0;
		text-align: center;
		color: ${theme.colors.white};
	}

	.StyDateLabel {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 1rem;

		span,
		a {
			font-size: ${theme.typography.extraSmall};
		}

		div {
			display: flex;
			align-items: center;

			a {
				margin-right: 1rem;
			}

			img {
				width: 1.4rem;
				color: white;
			}
		}
	}
`;

const StyTrainingBox = styled.div`
	margin: 2rem 1rem;
	padding: 1.5rem 2rem;
	background: white;
	border-radius: 0.5rem;

	h4,
	span {
		color: black;
	}

	h4 {
		font-size: ${theme.typography.small};
		margin-bottom: 1rem;
		font-weight: 400;
	}

	span {
		font-size: ${theme.typography.extraSmall};
	}

	div {
		display: flex;
		justify-content: space-between;
	}

	.StyTrainingDate {
		color: black;
		font-size: ${theme.typography.extraSmall};
		display: flex;
		justify-content: flex-end;
		margin-top: 2rem;
		padding-top: 1rem;
		border-top: 2px solid #3ec010;
	}
`;

export default function TrainingSession() {
	return (
		<>
			<TopBar title="Training" />
			<StyTrainingSession>
				<h1>Sessions</h1>
				<div className="StyDateLabel">
					<span>Today</span>
				</div>
				<StyTrainingBox>
					<h4>Pinner Park After School Club</h4>
					<div>
						<span>15 present</span>
						<span>Active</span>
					</div>
					<div>
						<span>3 abstent</span>
						<span>Not submitted</span>
					</div>
					<div className="StyTrainingDate">Today</div>
				</StyTrainingBox>
				<StyTrainingBox>
					<h4>Pinner Park After School Club</h4>
					<div>
						<span>15 present</span>
						<span>Active</span>
					</div>
					<div>
						<span>3 abstent</span>
						<span>Not submitted</span>
					</div>
					<div className="StyTrainingDate">Today</div>
				</StyTrainingBox>
				<div className="StyDateLabel">
					<span>14 April</span>
				</div>
				<StyTrainingBox>
					<h4>Pinner Park After School Club</h4>
					<div>
						<span>15 present</span>
						<span>Active</span>
					</div>
					<div>
						<span>3 abstent</span>
						<span>Not submitted</span>
					</div>
					<div className="StyTrainingDate">14/04/21</div>
				</StyTrainingBox>
			</StyTrainingSession>
			<NavbarMobile />
		</>
	);
}
