import styled from "styled-components";
import theme from "@BPSI/utils/theme";
import TeamInfoSidebar from "../TeamInfoDropdown";
import UserSettings from "../userSettings";
import BreadCrumb from "../BreadCrumbDesktop";
import DesktopNavigation from "../DesktopNavigation";

const SideBar = styled.div`
	background-color: ${theme.colors.backgroundHeaderBlue};
	height: 100%;
	overflow-y: hidden;
	display: flex;
	flex-direction: column;
	max-width: 232px;
	width: 100%;
`;

const SideBarNavigation = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-left: 26px;

	& a {
		color: ${theme.colors.DesktopNavigationBlue};
		font-size: 1.4rem;
		border-radius: 5rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		transition: all 0.4s;
		max-width: 16rem;
		max-height: 2.5rem;
		font-style: italic;
	}

	& a:not(:last-of-type) {
		margin-bottom: 1.6rem;
	}

	& a:hover,
	& a:active {
		border-radius: 5rem;
		background-color: ${theme.colors.white};
		color: ${theme.colors.backgroundHeaderBlue};
		font-weight: 600;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 2.1rem;
		transition: all 0.4s;
		max-width: 16rem;
		max-height: 2.5rem;
	}
`;

const Header = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-height: 20rem;
	background-color: ${theme.colors.backgroundHeaderBlue};
`;

const ContentSectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const DesktopLayoutWrapper = styled.div`
	display: flex;
	height: 100vh;
`;

const ProTools = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10rem;

	button {
		font-size: 1.6rem;
		color: white;
		font-style: italic;
		background: #e60404;
		border: 1px solid white;
		padding: 1rem;
		width: 80%;
		border-radius: 5px;
		position: relative;
		margin-bottom: 3rem;

		&:before {
			content: "";
			width: 20rem;
			border-bottom: 1px solid white;
			position: absolute;
			bottom: -2rem;
			right: 50%;
			transform: translateX(50%);
		}
	}

	span {
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 2rem;

		img {
			margin-left: 1rem;
			width: 1.5rem;
		}
	}
`;

const Copy = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 2rem;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 0.25rem;
		font-style: italic;
	}

	img {
		margin-right: 1rem;
	}
`;

const desktopLayout = (props) => {
	return (
		<DesktopLayoutWrapper>
			<SideBar>
				<SideBarNavigation>
					<TeamInfoSidebar></TeamInfoSidebar>
					<a href="#">Latest</a>
					<a href="#">Clubhouse</a>
					<a href="#">Events</a>
					<a href="#">Notifications</a>
					<a href="#">Chats</a>
				</SideBarNavigation>
				{props.proTools ? (
					<ProTools>
						<button>Unlock Pro-Tools</button>
						<span>
							Pro-Tools{" "}
							<img
								src="/assets/img/lock.svg"
								alt="Unlock Pro-Tools"
							/>
						</span>
						<SideBarNavigation>
							<a href="#">Challenges</a>
							<a href="#">Messaging</a>
							<a href="#">ReSchedule</a>
							<a href="#">PlayerForm</a>
							<a href="#">Tournaments</a>
						</SideBarNavigation>
					</ProTools>
				) : null}
				<Copy>
					<img src="/assets/img/bp-logo.svg" alt="Baller logo" />
					<div>
						<span>BP Leagues</span>
						<span>Powered by BallerProfile</span>
					</div>
				</Copy>
			</SideBar>
			<ContentSectionWrapper>
				<Header>
					<UserSettings></UserSettings>
					<BreadCrumb route1="CLUBHOUSE" route2="TEAMS"></BreadCrumb>
					{/* <DesktopNavigation></DesktopNavigation> */}
				</Header>
				{props.children}
			</ContentSectionWrapper>
		</DesktopLayoutWrapper>
	);
};

export default desktopLayout;
