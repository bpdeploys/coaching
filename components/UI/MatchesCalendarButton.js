import styled from "styled-components";

export const MatchesCalendarButton = styled.div`
	background-color: ${(props) => (props.disabled ? "#000000" : "#4e4d4d")};
	border-radius: 10px;
	font-size: 2rem;
	width: 320px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	margin-top: 2rem;
`;
