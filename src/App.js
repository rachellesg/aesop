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
      await axios
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
        <HeaderWrapper>
          <div className="half-circle" />
          <h1>Lorem ipsum fru fru</h1>
          <h2>
            Dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation
          </h2>
        </HeaderWrapper>
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
  width: 1024px;
  margin: 50px auto;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 50px 0 30px;
  h1 {
    font-weight: bold;
    margin-bottom: 0;
    color: #606852;
  }
  h2 {
    color: #4d605a;
    font-weight: normal;
  }
  .half-circle {
    width: 200px;
    height: 100px; /* as the half of the width */
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    border: 10px solid #74877d;
    border-bottom: 0;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;
