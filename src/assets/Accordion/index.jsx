import { useState } from "react";
import styled from "styled-components";

const Accordion = ({ data, cities }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <AccordionWrapper>
        <div
          onClick={() => setIsActive(!isActive)}
          className="accordion-header"
        >
          <div className="accordion-title">{cities}</div>
          <div className="accordion-icon">{isActive ? "-" : "+"}</div>
        </div>
        {isActive && (
          <div className="accordion-content">
            {data.map((details) => {
              const {
                city,
                date,
                postcode,
                offenceCount,
                offenceL1,
                offenceL2,
                offenceL3,
              } = details;
              return (
                <>
                  {city === cities ? (
                    <div
                      key={`${city}-${date}-${offenceL3}`}
                      className="accordion-content-details"
                    >
                      Date: {date} <br />
                      Area: {city} {postcode} <br />
                      Offence Count: {offenceCount}
                      <p>
                        {offenceL1}, {offenceL2}, {offenceL3}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        )}
      </AccordionWrapper>
    </>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  margin-bottom: 15px;
  background: beige;
  .accordion-header {
    width: 100%;
    font-size: 25px;
    background: turquoise;
    display: inline-flex;
    justify-content: space-between;
    .accordion-icon {
      text-align: right;
    }
  }
  .accordion-content {
    padding: 20px;
    .accordion-content-details {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;
