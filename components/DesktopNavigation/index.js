import styled from "styled-components";
import theme from "@BPSI/utils/theme";

const Navigation = styled.div`
	display: flex;
	line-height: 1;
	margin-top: 1.8rem;
	margin-bottom: 0.9rem;
	width: 100%;
	color: ${theme.colors.white};
	border-bottom: 1px solid ${theme.colors.white};

	& h1 {
		font-size: 3rem;
		margin-bottom: 0.5rem;
		margin-right: 11.3rem;
		font-style: italic;
		font-weight: 400;
	}

	ul {
		display: flex;
		justify-content: space-between;
		list-style: none;

		li {
			color: #76b1e7;
			margin: 0 2.3rem;
			font-size: 1.6rem;
			font-style: italic;
			position: relative;
			cursor: pointer;

			&:hover,
			active {
				color: ${theme.colors.white};
				&:after {
					content: "";
					color: ${theme.colors.white};
					width: 11rem;
					border-bottom: 3px solid ${theme.colors.white};
					position: absolute;
					bottom: -4px;
					right: 50%;
					transform: translateX(50%);
				}
			}
		}
	}
`;

const DesktopNavigation = (props) => {
	return (
		<Navigation>
			<h1>DASHBOARD</h1>
			<ul>
				<li>Matches Today</li>
				<li>Venues</li>
				<li>Leagues</li>
				<li>Fantasy</li>
			</ul>
		</Navigation>
	);
};

export default DesktopNavigation;
