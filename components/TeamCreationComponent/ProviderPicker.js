import { Fragment, useContext, useEffect, useState } from 'react';
import Picker from './Picker';
import teamContext from './store/team-context';
import { ErrorSpan } from './styles';

const ProviderPicker = () => {
  const { setProvider, provider } = useContext(teamContext);
  const [providerData, setProviderData] = useState([]);
  const [error, setError] = useState(null);
  const [pickerWasTouched, setPickerWasTouched] = useState(false);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const response = await fetch(
          'https://www.bp-core-api-dev.co.uk/api/sport-entities?filter_by=league_provider'
        );

        if (!response.ok) throw new Error('error');

        const [data] = await response.json();
        const { id, name } = data;
        setProviderData(prevState => [...prevState, { id, name }]);
      } catch (err) {
        console.log(err.message);
        setError(true);
      }
    };

    fetchProvider();
  }, []);

  return (
    <Fragment>
      <Picker
        onFocus={() => setPickerWasTouched(true)}
        data={{
          setUserChoice: setProvider,
          valuesArr: providerData,
          labelName: 'League Provider',
          userChoice: provider,
        }}
      />
      {error && pickerWasTouched && (
        <ErrorSpan>
          Unable to fetch provider, please contact an administrator or try
          again!
        </ErrorSpan>
      )}
    </Fragment>
  );
};

export default ProviderPicker;
