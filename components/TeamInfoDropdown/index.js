import styled from "styled-components";
import theme from "@BPSI/utils/theme";

const TeamInfo = styled.div`
	display: flex;
	width: 100%;
	margin-top: 2.3rem;
	margin-bottom: 5.2rem;

	& div:last-of-type {
		display: flex;
		align-items: center;
	}

	& h1 {
		font-size: 1.4rem;
		padding-left: 16px;
		position: relative;
	}

	& h1:before {
		content: url("/assets/img/white-triangle.png");
		position: absolute;
		top: 0;
		right: -18px;
	}
`;

const TeamLogoBorder = styled.div`
	border: 2px solid ${theme.colors.white};
	border-radius: 5rem;

	& img {
		width: 46px;
	}
`;

const TeamInfoDropdown = () => {
	return (
		<TeamInfo>
			<TeamLogoBorder>
				<img src="/assets/img/panthere.svg" alt="Team name" />
			</TeamLogoBorder>
			<div>
				<h1>PANTHERA FC</h1>
			</div>
		</TeamInfo>
	);
};

export default TeamInfoDropdown;
