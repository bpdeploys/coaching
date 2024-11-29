import styled from "styled-components";
import theme from "@BPSI/utils/theme";

const UserSettings = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	margin-top: 1.2rem;
	padding-right: 3.5rem;

	& h1,
	span {
		font-size: 1.4rem;
		margin-left: 16px;
		position: relative;
	}

	& h1:before {
		content: url("/assets/img/dropdown-v.svg");
		position: absolute;
		top: 7px;
		right: -18px;
	}
`;

const UserSettingsLogoBorder = styled.div`
	border: 2px solid ${theme.colors.white};
	border-radius: 5rem;
`;

const UserSettingText = styled.div`
	display: flex;
	flex-direction: column;
`;

const TeamInfoDropdown = () => {
	return (
		<UserSettings>
			<UserSettingsLogoBorder>
				<img src="/assets/img/User1.svg" alt="Team name" />
			</UserSettingsLogoBorder>
			<UserSettingText>
				<h1>Dimitri Gbo</h1>
				<span>Club Manager</span>
			</UserSettingText>
		</UserSettings>
	);
};

export default TeamInfoDropdown;
