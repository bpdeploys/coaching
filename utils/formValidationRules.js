export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  if (!values.first_name) {
    errors.first_name = "First Name is required";
  }
  if (!values.last_name) {
    errors.last_name = "Last Name is required";
  }
  if (!values.telephone) {
    errors.telephone = "Tel Number is required";
  }
  if (!values.match_day) {
    errors.match_day = "Match Day is required";
  }
  if (!values.league_name) {
    errors.league_name = "League Name is required";
  }
  if (!values.max_team) {
    errors.max_team = "Max team is required";
  }
  if (!values.min_team) {
    errors.min_team = "Min team is required";
  }
  if (!values.league_format) {
    errors.league_format = "League Format is required";
  }
  if (!values.competition) {
    errors.competition = "Competition is required";
  }
  if (!values.start_date) {
    errors.start_date = "Start Date is required";
  }
  if (!values.start_time) {
    errors.start_time = "Start Time is required";
  }
  if (!values.format_pitch) {
    errors.start_time = "Start Time is required";
  }
  return errors;
}
