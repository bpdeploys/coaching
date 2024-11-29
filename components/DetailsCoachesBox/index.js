import styled from "styled-components";
import theme from "@BPSI/utils/theme";

const CoachesBoxes = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 150px;
	max-height: 8.5rem;
	box-shadow: 0px 2px 2px 0px #00000040;
	border-radius: 0.3rem;

	& > h3 {
		color: ${theme.colors.black};
		font-size: 1.5rem;
		margin-bottom: 0.6rem;
	}

	& > span:first-of-type {
		font-size: 1rem;
		color: ${theme.colors.black};
	}

	& > span:last-of-type {
		font-size: 1rem;
		color: ${theme.colors.black};
		margin-bottom: 0.8rem;
	}
`;

const Hr = styled.hr`
	border: 2px solid #0e4980;
	width: 100%;
	max-width: 14rem;
	margin-top: 0.5rem;
	margin-bottom: 1rem;
`;

const DetailsCoachesBox = ({ name, team, status }) => {
	return (
		<CoachesBoxes>
			<h3>{name}</h3>
			<span>{team}</span>
			<Hr />
			<span>View Profile</span>
		</CoachesBoxes>
	);
};

export default DetailsCoachesBox;
