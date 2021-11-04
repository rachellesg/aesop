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
  margin: 25px 0;
  .accordion-header {
    width: 100%;
    font-size: 25px;
    background: #e5e2d8;
    display: inline-flex;
    justify-content: space-between;
    .accordion-icon {
      text-align: right;
    }
  }
  .accordion-content {
    .accordion-content-details {
      width: 100%;
      position: relative;
      margin: 20px 0;
      padding: 8px 0 10px;
      &:last-child {
        &:after {
          height: 0;
        }
      }
      &:after {
        position: absolute;
        background: #74877d;
        content: "";
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
      }
    }
  }
`;
