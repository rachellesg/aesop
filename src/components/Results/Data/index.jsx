import { useState } from "react";
import styled from "styled-components";

import Accordion from "./Accordion";

function Data({ storedData, offences, cities }) {
  const [switchGroup, setSwitchGroup] = useState(true);
  const toggleSwitchGroup = () => {
    setSwitchGroup(!switchGroup);
    console.log(switchGroup);
  };
  return (
    <DataWrapper>
      <button onClick={toggleSwitchGroup}>Group by L2 Offences</button>
      {switchGroup
        ? cities &&
          cities.map((item) => {
            const checkCity = item; // list of city from cities array
            return (
              <Accordion
                group={switchGroup}
                data={storedData}
                key={checkCity}
                header={checkCity}
              />
            );
          })
        : offences &&
          offences.map((item) => {
            const checkOffence = item;
            return (
              <Accordion
                group={switchGroup}
                data={storedData}
                key={checkOffence}
                header={checkOffence}
              />
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
