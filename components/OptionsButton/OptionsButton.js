import styled from "styled-components";
const StyOptionsButton = styled.div`
	button {
		width: 100%;
		position: fixed;
		color: white;
		background: ${({ theme }) => theme.colors.primary};
		font-size: 1.5rem;
		bottom: 50px;
		left: 0;
		border: none;
		border-top: 1px solid white;
		padding: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		outline: none;

		img {
			position: absolute;
			right: 1rem;
			width: 2rem;
		}
	}
`;

function OptionsButton({ onClick }) {
	return (
		<StyOptionsButton>
			<button onClick={onClick}>
				More options
				<img src="/assets/img/cross.svg" alt="+" />
			</button>
		</StyOptionsButton>
	);
}

export default OptionsButton;
