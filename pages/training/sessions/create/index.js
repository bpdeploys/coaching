import styled from "styled-components";

//Base component
import { AppContainer } from "@BPSI/components/UI/Container";
import TopBar from "@BPSI/components/UI/Topbar";
import theme from "@BPSI/utils/theme";
import Link from "next/link";
import { useMediaQuery } from "@BPSI/utils/useMediaQuery";

const CreateTrainingSessionHeader = styled.h1`
	color: ${theme.colors.white};
	font-size: 2rem;
	margin-top: 4rem;
	margin-bottom: 7rem;
`;

const CreateTrainingSessionButton = styled.div`
	background-color: ${theme.colors.white};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 3rem;
	max-width: 250px;
	width: 100%;
	height: 100px;
	border-radius: 10px;

	& > h3 {
		color: ${theme.colors.black};
		font-size: 2rem;
	}
`;

const CreateTrainingSession = () => {
	let mobile = useMediaQuery("(max-width: 768px)");

	let mobileView = (
		<>
			<TopBar title="Create Session"></TopBar>
			<AppContainer>
				<CreateTrainingSessionHeader>
					Session Type
				</CreateTrainingSessionHeader>
				<Link href="/training/sessions/create-2">
					<CreateTrainingSessionButton>
						<h3>Team Training</h3>
					</CreateTrainingSessionButton>
				</Link>
				<Link href="/training/sessions/create-2">
					<CreateTrainingSessionButton>
						<h3>After School Club</h3>
					</CreateTrainingSessionButton>
				</Link>
				<Link href="/training/sessions/create-2">
					<CreateTrainingSessionButton>
						<h3>Holiday Camp</h3>
					</CreateTrainingSessionButton>
				</Link>
			</AppContainer>
		</>
	);
	return <>{useMediaQuery ? mobileView : null}</>;
};

export default CreateTrainingSession;
