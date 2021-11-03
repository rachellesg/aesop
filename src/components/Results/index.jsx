import styled from "styled-components";

function Results({ dataFieldsId, records }) {
  const storedData = [];

  dataFieldsId.map((item) => {
    if (item.id === "Suburb - Incident") {
      records.map((subitem) => {
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
      });
    }
  });

  console.log(storedData);

  const mappedCities = storedData.map((item) => {
    const {
      city,
      date,
      postcode,
      offenceCount,
      offenceL1,
      offenceL2,
      offenceL3,
    } = item;
    return (
      <AccordionWrapper key={`${item.city}-${item.date}-${item.offenceL3}`}>
        <div className="accordion-title">
          {city} {postcode}
        </div>
        <div className="accordion-content">
          <div className="accordion-item">
            L1: {offenceL1}, {offenceL2} <br />
            {offenceL3} <br />
            {date} {offenceCount}
          </div>
        </div>
      </AccordionWrapper>
    );
  });

  return <ResultsWrapper>{mappedCities}</ResultsWrapper>;
}

export default Results;

const ResultsWrapper = styled.div`
  justify-content: center;
  align-items: middle;
`;

const AccordionWrapper = styled.div`
  margin-bottom: 15px;
  background: beige;
  .accordion-title {
    font-size: 25px;
    background: turquoise;
  }
  .accordion-content {
    padding: 20px;
  }
`;
