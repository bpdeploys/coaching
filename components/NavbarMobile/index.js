//Base imports
import styled from "styled-components";
import Link from "next/link";

//Components
import NavbarLink from "@BPSI/components/ActiveLink";

//Styles
import theme from "@BPSI/utils/theme";

const Navbar = styled.div`
	background-color: #0d2155;
	height: 50px;
	width: 100%;
	padding-left: 20px;
	padding-right: 20px;
	position: fixed;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid ${theme.colors.white};
	border-bottom: 1px solid ${theme.colors.white};
	z-index: 100;
`;

const NavbarMobile = ({ messages }) => {
	return (
		<Navbar>
			<NavbarLink href="/upcomingfixtures" activeClassName>
				<img
					src="/assets/img/LatestIcon-nav-light.svg"
					alt=""
					className="light"
				/>
				<img
					src="/assets/img/LatestIcon-nav.svg"
					alt=""
					className="dark"
				/>
				<span>Lastest</span>
			</NavbarLink>
			<NavbarLink href="/clubhouse" activeClassName>
				<img src="/assets/img/Shield-nav.svg" alt="" />
				<span>Clubhouse</span>
			</NavbarLink>
			<NavbarLink href="/events" activeClassName="active">
				<img
					src="/assets/img/events-nav-light.svg"
					alt=""
					className="light"
				/>
				<img
					src="/assets/img/events-nav-dark.svg"
					alt=""
					className="dark"
				/>
				<span>Events</span>
			</NavbarLink>
			{messages ? (
				<NavbarLink href="#" activeClassName>
					<img
						src="/assets/img/Chat-nav-light.svg"
						alt=""
						className="light"
					/>
					<img
						src="/assets/img/Chat-nav-dark.svg"
						alt=""
						className="dark"
					/>
					<span>Chat</span>
				</NavbarLink>
			) : (
				<>
					<NavbarLink activeClassName>
						<img
							src="/assets/img/NotificationBell-nav-light.svg"
							alt=""
							className="light"
						/>
						<img
							src="/assets/img/NotificationBell-nav.svg"
							alt=""
							className="dark"
						/>
						<span>Notification</span>
					</NavbarLink>
					<NavbarLink activeClassName>
						<img
							src="/assets/img/More-navbar-light.svg"
							alt=""
							className="light"
						/>
						<img
							src="/assets/img/More-nav-dark.svg"
							alt=""
							className="dark"
						/>
						<span>More</span>
					</NavbarLink>
				</>
			)}
		</Navbar>
	);
};

export default NavbarMobile;
