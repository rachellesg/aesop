import styled from "styled-components";

import Accordion from "./Accordion";

function Data({ storedData, cities }) {
  return (
    <DataWrapper>
      {cities.map((item) => {
        const checkCity = item; // list of city from cities array
        return (
          <Accordion data={storedData} key={checkCity} cities={checkCity} />
        );
      })}
    </DataWrapper>
  );
}

export default Data;

const DataWrapper = styled.div`
  justify-content: center;
  align-items: middle;
  margin: 0 auto;
`;
