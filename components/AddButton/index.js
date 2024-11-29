import styled from "styled-components";

const AddButtonStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 10rem;
	width: 100%;
	height: 5.6rem;
	border: 0.5px solid #e5e5e5;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	border-radius: 0.3rem;

	& span {
		color: #000000;
		font-size: 1rem;
		margin-top: 1.3rem;
		margin-bottom: 0.4rem;
	}

	& img {
		margin-bottom: 0.5rem;
	}
`;

const AddButton = ({ create }) => {
	return (
		<AddButtonStyles>
			<span>{create}</span>
			<img src="/assets/img/NewPlayer.svg" alt="" />
		</AddButtonStyles>
	);
};

export default AddButton;
