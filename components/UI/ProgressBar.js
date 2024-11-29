import styled from "styled-components";
import theme from "@BPSI/utils/theme";

const ProgressBar = ({ bgcolor, completed, elements, ball }) => {
	const containerStyles = {
		height: "5rem",
		width: "100%",
		backgroundColor: "transparent",
		border: "#FFFFFF solid 1px",
		borderRadius: 50,
		marginTop: 10,
		position: "relative",
	};

	const fillerStyles = {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "100%",
		width: `${completed}%`,
		backgroundColor: bgcolor,
		borderRadius: 50,
		marginLeft: "1px",
		textAlign: "right",
		transition: "width 1s ease-in-out",
	};

	const labelStyles = {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: 5,
		color: "white",
		fontWeight: "bold",
	};

	const ballStyle = {
		display: "flex",
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
	};

	return (
		<div style={containerStyles}>
			<div style={fillerStyles}>
				<span style={labelStyles}>
					{elements}
					{ball ? (
						<div style={ballStyle}>
							<img src="/assets/img/ball.svg" alt="" />
							<span>{ball}</span>
						</div>
					) : null}
				</span>
			</div>
		</div>
	);
};

export default ProgressBar;
