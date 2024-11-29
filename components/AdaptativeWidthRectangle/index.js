import styled from "styled-components";
import theme from "@BPSI/utils/theme";

const AdaptiveWidthRectangle = ({ width, size, text, small }) => {
	const StyRectangle = styled.a`
		width: ${width};
		padding: 2rem 1rem;
		margin: 1rem 0;
		background: white;
		color: ${theme.colors.black};
		border: 1px solid transparent;
		border-radius: 7px;
		transition: all 0.3s;
		font-size: ${size};
		text-align: center;

		span,
		small {
			color: ${theme.colors.black};
		}

		small {
			font-size: 1.3rem;
		}
		&:hover {
			border: 1px solid white;
			background: ${({ theme }) => theme.colors.primary};
			color: white;
		}
	`;
	return (
		<StyRectangle>
			{small ? (
				<>
					<span>{text}</span> <small>{small}</small>
				</>
			) : (
				text
			)}
		</StyRectangle>
	);
};

export default AdaptiveWidthRectangle;
