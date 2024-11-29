//Base imports
import Link from "next/link";

//Components
import { useState } from "react";
import styled from "styled-components";
import { MatchesCalendarButton } from "../UI/MatchesCalendarButton";

const MatchesCalendarWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	margin-top: 10rem;
	margin-bottom: 10rem;

	& div {
		font-size: 3rem;
		font-weight: 600;
		padding: 0.5rem;
		text-align: center;
		border: 1px solid #ffffff;
	}
`;

const MatchesCalendarDays = styled.div`
	font-size: 3rem;
	font-weight: 600;
	padding: 0.5rem;
	text-align: center;
	border: 1px solid #ffffff;
	cursor: pointer;
	${(props) =>
		props.selected ? "background-color:#ffffff;color:blue;" : null};
`;

let date = new Date();
let year = date.getFullYear();
// let year = 2015;
let month = date.getMonth();
// let month = 1
let arrayOfDayOfTheMonth = calendarDays(month);

function calendarDays(month) {
	let dayNum;
	let firstDayOfTheMonth = new Date(year, month, 1).getDay();

	if (
		month === 0 ||
		month === 2 ||
		month === 4 ||
		month === 6 ||
		month === 7 ||
		month === 9 ||
		month === 11
	) {
		dayNum = 31;
	} else if (month === 3 || month === 5 || month === 8 || month === 10) {
		dayNum = 30;
	} else {
		(year - 2016) % 4 === 0 ? (dayNum = 29) : (dayNum = 28);
	}

	let allDays = Array.from({ length: dayNum }, (_, i) => i + 1);

	for (let c = 0; c < firstDayOfTheMonth; c++) {
		allDays.unshift("");
	}

	while (allDays.length % 7 != 0) {
		allDays.push("");
	}

	return allDays;
}

export default function Calendar() {
	const [dates, setdates] = useState([]);
	const daysElements = arrayOfDayOfTheMonth.map((day, index) => (
		<>
			{day == "" ? (
				<div key={index}></div>
			) : (
				<MatchesCalendarDays
					key={index}
					id={day}
					onClick={() =>
						setdates(
							dates.includes(day)
								? [...dates.filter((n) => n !== day)]
								: [...new Set([...dates, day])]
						)
					}
					selected={dates.includes(day)}
					active={false}
				>
					{day}
				</MatchesCalendarDays>
			)}
		</>
	));
	return (
		<>
			<MatchesCalendarWrapper>
				<div>S</div>
				<div>M</div>
				<div>T</div>
				<div>W</div>
				<div>T</div>
				<div>F</div>
				<div>S</div>
				{daysElements}
			</MatchesCalendarWrapper>
			<Link href="/matches/edit/edit-form">
				<MatchesCalendarButton disabled={dates.length}>
					DONE
				</MatchesCalendarButton>
			</Link>
		</>
	);
}
