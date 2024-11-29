//Base imports
import styled from "styled-components";

//Components
import { AppContainer } from "@BPSI/components/UI/Container";
import Layout from "@BPSI/components/UI/Layout";
import TopBar from "@BPSI/components/UI/Topbar";
import theme from "@BPSI/utils/theme";
import Link from "next/link";

const FormHeader = styled.h1`
	color: ${theme.colors.white};
	margin-bottom: 7rem;
	margin-top: 4rem;
	font-size: ${theme.typography.large};
`;

const FormInput = styled.input.attrs((props) => ({ type: props.typeField }))`
	width: ${(props) => (props.width ? props.width : null)};
	color: ${theme.colors.white};
	border: unset;
	background-color: unset;
	text-align: ${(props) => (props.align ? props.align : null)};
	border-bottom: 0.1rem solid ${theme.colors.white};
	margin: ${(props) => (props.margin ? props.margin : null)};
	padding: ${(props) => (props.padding ? props.padding : null)};
	font-size: ${(props) => (props.fontSize ? props.fontSize : null)};

	&::placeholder {
		color: ${theme.colors.white};
	}
`;

const FromHourWrapper = styled.div`
	width: 100%;
	margin-top: 4rem;

	& div {
		display: flex;
		justify-content: space-between;
	}
`;

const FormCostWrapper = styled.div`
	width: 100%;
	margin-top: 4rem;

	& div {
		display: flex;
		justify-content: space-between;
	}
`;

const FormDatesWrapper = styled.div`
	width: 100%;
	margin-top: 4rem;
	margin-bottom: 10rem;

	& hr {
		width: 100%;
		border: 1px solid white;
		margin-bottom: 3rem;
	}
`;

const FormH3 = styled.h3`
	margin: ${(props) => (props.margin ? props.margin : null)};
	font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
`;

const FormCapsulesWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
`;

const DatesCapsules = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 15rem;
	max-height: 3.5rem;
	border-radius: 5rem;
	padding: 1.1rem 1.5rem;
	font-size: ${theme.typography.medium};
	border: 2px solid ${theme.colors.white};
`;

const FormSendButton = styled.div`
    max-width: 35rem;
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    background-color: ${theme.colors.black};
    border-radius: 1rem;
}`;

export default function EditMatchesForm() {
	return (
		<Layout>
			<TopBar title="Edit Matches" />
			<AppContainer>
				<FormHeader>Team Training</FormHeader>
				<FormInput
					margin="0 0 3.5rem 0"
					width="100%"
					padding="0 0 .5rem .5rem"
					type="text"
					placeholder="Location"
					fontSize="1.6rem"
				/>
				<FormInput
					width="100%"
					padding=" 0 0 .5rem .5rem "
					type="text"
					placeholder="Select Team"
					fontSize="1.6rem"
				/>
				<FromHourWrapper>
					<FormH3 fontSize="2rem" margin="0 0 2rem 0">
						Start
					</FormH3>
					<div>
						<FormInput
							width="40%"
							padding=" 0 0 .5rem .5rem "
							typeField="number"
							min="00"
							max="24"
							placeholder="Hour"
							fontSize="2rem"
						/>
						<FormInput
							width="40%"
							padding=" 0 0 .5rem .5rem "
							typeField="number"
							min="00"
							max="Minutes"
							placeholder="00"
							fontSize="2rem"
						/>
					</div>
					<FormH3 fontSize="2rem" margin="2rem 0">
						End
					</FormH3>
					<div>
						<FormInput
							width="40%"
							padding=" 0 0 .5rem  .5rem "
							typeField="number"
							min="00"
							max="24"
							placeholder="Hour"
							fontSize="2rem"
						/>
						<FormInput
							width="40%"
							padding=" 0 0.5rem .5rem "
							typeField="number"
							min="0"
							max="60"
							placeholder="Minutes"
							fontSize="2rem"
						/>
					</div>
				</FromHourWrapper>
				<FormCostWrapper>
					<FormH3 margin=" 0 0 1rem 0 ">Cost</FormH3>
					<div>
						<FormInput
							width="5rem"
							padding="0 0 .5rem  0"
							margin="0 0.2rem 0 0"
							typeField="number"
							min="0"
							max="60"
							placeholder="0"
							align="center"
							fontSize="3rem"
						/>
						<FormInput
							width="5rem"
							padding="0 0 .5rem 0 "
							margin="0 0.2rem 0 0"
							typeField="number"
							min="0"
							max="60"
							placeholder="0"
							align="center"
							fontSize="3rem"
						/>
						<FormInput
							width="5rem"
							padding="0 0 .5rem 0"
							margin="0 0.2rem 0 0"
							typeField="number"
							min="0"
							max="9"
							placeholder="0"
							align="center"
							fontSize="3rem"
						/>
						<FormInput
							width="5rem"
							padding="0 0 .5rem 0"
							margin="0 0.2rem 0 0"
							typeField="number"
							min="0"
							max="60"
							fontSize="3rem"
							placeholder="0"
							align="center"
						/>
					</div>
				</FormCostWrapper>
				<FormDatesWrapper>
					<FormH3 fontSize="2rem" margin="2rem 0 1rem 0">
						Date
					</FormH3>
					<hr />
				</FormDatesWrapper>
				<Link href="/matches/create">
					<FormSendButton>DONE</FormSendButton>
				</Link>
			</AppContainer>
		</Layout>
	);
}
