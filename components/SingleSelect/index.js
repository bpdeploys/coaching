import * as React from 'react';
import MaterialUiCreatable, {
  MaterialUiCreatableProps,
} from './MaterialUiCreatable';

const options = ['New York', 'London', 'Vienna', 'Budapest'];
handleChange = (values) => {
  console.log(values);
};
const SingleSelect = () => (
  <MultipleSelect
    label="Choose some cities"
    values={['London', 'Vienna']}
    options={options}
    helperText="You can add a new city by writing its name and pressing enter"
    SelectProps={{
      isCreatable: true,
      msgNoOptionsAvailable: 'All cities are selected',
      msgNoOptionsMatchFilter: 'No city name matches the filter',
    }}
  />
);

export default SingleSelect;

/*
import * as React from 'react';
import { MultipleSelect } from 'react-select-material-ui';

class App extends React.Component {
  render() {
   

    return (
      <div className="App">
        
      </div>
    );
  }

  
}

export default App;*/
