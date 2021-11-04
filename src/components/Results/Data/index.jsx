import styled from "styled-components";

import Accordion from "./Accordion";

function Data({ loadHeader, storedData }) {
  return (
    <DataWrapper>
      {loadHeader &&
        loadHeader.map((item) => {
          return <Accordion data={storedData} header={item} key={item} />;
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
