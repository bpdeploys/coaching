import styled from "styled-components";
import DetailsBox from "@BPSI/components/DetailsBox/DetailsBox";
import OptionsButton from "@BPSI/components/OptionsButton/OptionsButton";

//Components
import Layout from "@BPSI/components/UI/Layout";
import TopBar from "@BPSI/components/UI/Topbar";
import NotificationModal from "@BPSI/components/NotificationModal";
import PitchForm from "./form";

const StyPitch = styled.div`
	background: url("/assets/img/app-background.svg");
	background-size: cover;
	padding: 3rem 3rem;
	height: 100vh;
	overflow-y: hidden;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const StyPitchButton = styled.a`
	font-size: 3rem;
	padding: 1.5rem;
	border-radius: 0.5rem;
	margin-bottom: 10rem;
`;
export default function TeamCreationS1() {
	return (
		<Layout>
			<TopBar title="Create pitch" />
			<StyPitch>
				<StyPitchButton>Create a Pitch</StyPitchButton>
				<PitchForm />
			</StyPitch>
		</Layout>
	);
}
