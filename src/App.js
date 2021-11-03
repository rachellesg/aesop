import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Results from "./components/Results";

function App() {
  const [dataFieldsId, setDataFieldsId] = useState([]);
  const [records, setRecords] = useState([]);

  const apiUrl =
    "https://data.sa.gov.au/data/api/3/action/datastore_search?resource_id=590083cd-be2f-4a6c-871e-0ec4c717717b";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios
        .get(apiUrl)
        .then((response) => {
          const dataFields = response.data.result.fields;
          const data = response.data.result.records;
          setDataFieldsId(dataFields || "");
          setRecords(data || "");
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  return (
    <AppWrapper>
      <ContainerWrapper>
        <Results dataFieldsId={dataFieldsId} records={records} />
      </ContainerWrapper>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  max-width: 100%;
`;

const ContainerWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
`;
