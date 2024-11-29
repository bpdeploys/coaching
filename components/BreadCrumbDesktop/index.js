import styled from "styled-components";
import theme from "@BPSI/utils/theme";

const Text = styled.div`
	font-size: 2.2rem;
	line-height: 1;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	img {
		width: 1rem;
		margin: 0 2rem;
	}

	span {
		font-style: italic;
		color: #76b1e7;
		font-size: 3rem;
	}

	span:last-of-type {
		color: white;
	}
`;

const Hr = styled.div`
	border: solid 1px ${theme.colors.white};
	margin-top: 0.5rem;
	margin-bottom: 0.9rem;
`;

const BreadCrumb = (props) => {
	return (
		<div>
			<Text>
				<span>{props.route1}</span>{" "}
				<img
					src="/assets/img/small-right-arrow.svg"
					alt="Route arrow"
				/>{" "}
				<span>{props.route2}</span>
			</Text>
			<Hr />
		</div>
	);
};

export default BreadCrumb;
