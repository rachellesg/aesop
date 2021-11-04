import { useState } from "react";

import styled from "styled-components";

import Data from "./Data";

function Results({ dataFieldsId, records }) {
  const cities = [];
  const offences = [];
  const storedData = [];

  const [switchGroup, setSwitchGroup] = useState(true);
  const toggleSwitchGroup = () => {
    setSwitchGroup(!switchGroup);
  };

  dataFieldsId.forEach((item) => {
    if (item.id === "Suburb - Incident") {
      records.forEach((subitem) => {
        const city = subitem["Suburb - Incident"];
        const date = subitem["Reported Date"];
        const postcode = subitem["Postcode - Incident"];
        const offenceCount = subitem["Offence count"];
        const offenceL1 = subitem["Offence Level 1 Description"];
        const offenceL2 = subitem["Offence Level 2 Description"];
        const offenceL3 = subitem["Offence Level 3 Description"];
        storedData.push({
          city: city,
          date: date,
          postcode: postcode,
          offenceCount: offenceCount,
          offenceL1: offenceL1,
          offenceL2: offenceL2,
          offenceL3: offenceL3,
        });
        if (!cities.includes(city)) return cities.push(city);
        if (!offences.includes(offenceL2)) return offences.push(offenceL2);
        return null;
      });
    }
  });

  return (
    <ResultsWrapper>
      <button onClick={toggleSwitchGroup}>Group by L2 Offences</button>
      <Data
        switchGroup={switchGroup}
        storedData={storedData}
        loadHeader={switchGroup ? cities : offences}
      />
    </ResultsWrapper>
  );
}

export default Results;

const ResultsWrapper = styled.div`
  justify-content: center;
  align-items: middle;
`;
