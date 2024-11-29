import styled from "styled-components";
import theme from "@BPSI/utils/theme";

export const WitheRoundButton = styled.div`
	background-color: ${theme.colors.white};
	font-size: ${theme.typography.extraSmall};
	color: ${theme.colors.black};
	border-radius: 5rem;
	max-width: 155px;
	height: 30px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	padding-left: 10px;

	&::before {
		content: url("/assets/img/chevron.png");
		position: absolute;
		top: 55%;
		right: 10px;
		transform: translateY(-50%);
	}
`;
