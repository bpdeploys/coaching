import styled from "styled-components";

const AddFloatingButton = styled.button`
	border: none;
	padding: 1.5rem;
	border-radius: 50%;
	width: 65px;
	height: 65px;
	position: fixed;
	bottom: 7rem;
	right: 2rem;
	background: ${({ theme }) => theme.colors.secondary};
	outline: none;
	cursor: pointer;
	text-align: center;
	border-radius: 50%;
	box-shadow: 2px 2px 19px 3px #00000044;

	img {
		width: 1.8rem;
	}
`;

function FloatingButton({ onClick }) {
	return (
		<AddFloatingButton onClick={onClick}>
			<img src="/assets/img/cross.svg" alt="Add button image" />
		</AddFloatingButton>
	);
}

export default FloatingButton;
