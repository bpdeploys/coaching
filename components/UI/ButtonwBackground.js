import styled from "styled-components";
import theme from "@BPSI/utils/theme";

const StyButtonwBackground = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.colors.primary};
	height: 20vh;

	button {
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
`;

const ButtonwBackground = ({ text, callback }) => {
	return (
		<StyButtonwBackground onClick={callback}>
			<button>{text}</button>
		</StyButtonwBackground>
	);
};

export default ButtonwBackground;
