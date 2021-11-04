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
              return <>{details.city === cities ? details.city : ""}</>;
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
  }
`;
