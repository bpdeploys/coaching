import styled from "styled-components";
import theme from "@BPSI/utils/theme";

const PlayerBoxes = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 150px;
	max-height: 10rem;
	border: 0.5px solid #e5e5e5;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	border-radius: 0.3rem;

	& > h3 {
		color: ${theme.colors.black};
		font-size: 1.5rem;
		margin-top: 1.9rem;
		margin-bottom: 0.6rem;
	}
`;

const Hr = styled.hr`
	border: 1px solid #0e4980;
	width: 100%;
	max-width: 14rem;
	margin-top: 1.4rem;
	margin-bottom: 1rem;
`;

const ClubhouseCoachesDetailBottom = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;

	& > span:first-of-type {
		font-size: 1rem;
		color: ${theme.colors.black};
		margin-left: 1.1rem;
	}

	& > span:last-of-type {
		font-size: 1rem;
		color: ${theme.colors.black};
		margin-bottom: 0.8rem;
		margin-right: 1.5rem;
		text-align: center;
	}
`;

const PlayerDetailsBox = ({ name, status }) => {
	return (
		<PlayerBoxes>
			<h3>{name}</h3>
			<Hr />
			<ClubhouseCoachesDetailBottom>
				<span>View Profile</span>
				<span>
					Remove from
					<br />
					team
				</span>
			</ClubhouseCoachesDetailBottom>
		</PlayerBoxes>
	);
};

export default PlayerDetailsBox;
