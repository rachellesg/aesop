import styled from "styled-components";

function Results({ dataFieldsId, records }) {
  const cities = [];

  dataFieldsId.map((item) => {
    if (item.id === "Suburb - Incident") {
      records.map((subitem) => {
        const city = subitem["Suburb - Incident"];
        if (cities.includes(city)) {
          return;
        }
        cities.push(city);
      });
    }
  });

  const mappedCities = cities.map((item) => {
    return <ButtonWrapper>{item}</ButtonWrapper>;
  });

  return <ResultsWrapper>{mappedCities}</ResultsWrapper>;
}

export default Results;

const ResultsWrapper = styled.div`
  justify-content: center;
  align-items: middle;
`;

const ButtonWrapper = styled.button`
  background: #e774f7;
  padding: 8px 5px;
  margin-bottom: 15px;
  outline: none;
  border: none;
  width: 100%;
`;
