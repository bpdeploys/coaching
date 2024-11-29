import { Fragment, useContext, useEffect, useState } from 'react';
import Picker from './Picker';
import teamContext from './store/team-context';
import { ErrorSpan } from './styles';

const VenuePicker = () => {
  const { setVenue, provider, venue } = useContext(teamContext);
  const [venueData, setVenueData] = useState([]);
  const [error, setError] = useState(null);
  const [pickerWasTouched, setPickerWasTouched] = useState(false);

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await fetch(
          `https://www.bp-core-api-dev.co.uk/api/venues?entity_id=${provider}`
        );

        if (!response.ok) throw new Error('Error');

        const [data] = await response.json();
        const { id, name } = data;

        setVenueData(prevState => [...prevState, { id, name }]);
      } catch (err) {
        console.log(err.message);
        setError(true);
      }
    };

    fetchVenue();
  }, [provider]);

  return (
    <Fragment>
      <Picker
        onFocus={() => setPickerWasTouched(true)}
        data={{
          setUserChoice: setVenue,
          valuesArr: venueData,
          labelName: 'Venue Provider',
          userChoice: venue,
        }}
      />
      {error && pickerWasTouched && (
        <ErrorSpan>
          Unable to fetch venue, please contact an administrator or try again!
        </ErrorSpan>
      )}
    </Fragment>
  );
};

export default VenuePicker;
