import styled from "styled-components";
import theme from "@BPSI/utils/theme";

const StyToggle = styled.div`
	display: flex;
	width: 18rem;
	justify-content: space-evenly;
	transition: all 0.3s ease-out;
	a,
	a:hover {
		color: ${theme.colors.white};
		text-decoration: none;
	}
	.value1,
	.value2 {
		font-size: ${theme.typography.small};
		text-decoration: none;
	}
	.value1:active,
	.value2:active {
		color: #00c6b3;
	}
	input[type="checkbox"] {
		height: 0;
		width: 0;
		visibility: hidden;
		display: none;
	}
	label {
		cursor: pointer;
		text-indent: -9999px;
		width: 65px;
		height: 35px;
		background: transparent;
		display: block;
		border-radius: 100px;
		position: relative;
		border: 2px solid white;
	}
	label:after {
		content: "";
		position: absolute;
		top: 3px;
		left: 4px;
		width: 25px;
		height: 25px;
		background: ${theme.colors.white};
		border-radius: 90px;
		transition: 0.3s;
	}
	input:checked + label:after {
		left: calc(100% - 5px);
		transform: translateX(-100%);
	}
	label:active:after {
		width: 40px;
	}
`;

const Toggle = ({ trueText, falseText }) => {
	return (
		<StyToggle>
			<a className="value1">{trueText}</a>
			<input type="checkbox" id="switch" />
			<label htmlFor="switch">Toggle</label>
			<a className="value2">{falseText}</a>
		</StyToggle>
	);
};

export default Toggle;
