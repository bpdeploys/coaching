import styled from "styled-components";
import theme from "@BPSI/utils/theme";
import Link from 'next/link';

const StyButtonBackgroundRedirect = styled.div`
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


const ButtonBackgroundRedirect = ({ children, routerHref, text}) => {
	return (
		<Link href={routerHref}>
		  <StyButtonBackgroundRedirect><button>{text}</button></StyButtonBackgroundRedirect>
		</Link>
	)
};

export default ButtonBackgroundRedirect;
