import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";

// API returns
// "records": [{"_id":1,"Reported Date":"01/07/2019","Suburb - Incident":"ADELAIDE","Postcode - Incident":"5000","Offence Level 1 Description":"OFFENCES AGAINST PROPERTY","Offence Level 2 Description":"FRAUD DECEPTION AND RELATED OFFENCES","Offence Level 3 Description":"Obtain benefit by deception","Offence count":"1"}]

// fields data
// 0: {id: '_id', type: 'int'}
// 1: {id: 'Reported Date', type: 'text'}
// 2: {id: 'Suburb - Incident', type: 'text'}
// 3: {id: 'Postcode - Incident', type: 'text'}
// 4: {id: 'Offence Level 1 Description', type: 'text'}
// 5: {id: 'Offence Level 2 Description', type: 'text'}
// 6: {id: 'Offence Level 3 Description', type: 'text'}
// 7: {id: 'Offence count', type: 'text'}

function App() {
  const [dataFieldsId, setDataFieldsId] = useState([]);
  const [data, setData] = useState([]);

  const apiUrl =
    "https://data.sa.gov.au/data/api/3/action/datastore_search?resource_id=590083cd-be2f-4a6c-871e-0ec4c717717b";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios
        .get(apiUrl)
        .then((response) => {
          const dataFields = response.data.result.fields;
          const data = response.data.result.records;
          setDataFieldsId(dataFields);
          setData(data);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  return <div className="App"></div>;
}

export default App;
