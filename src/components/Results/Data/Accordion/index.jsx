import { useState } from "react";
import styled from "styled-components";

import List from "./List";

const Accordion = ({ data, header }) => {
  const [isActive, setIsActive] = useState(false);
  const handleAccordion = () => {
    setIsActive(!isActive);
  };
  return (
    <AccordionWrapper>
      <AccordionHeader onClick={handleAccordion}>
        <div className="accordion-title">{header}</div>
        <div className="accordion-icon">{isActive ? "-" : "+"}</div>
      </AccordionHeader>
      {isActive && (
        <AccordionContent>
          <List data={data} header={header} />
        </AccordionContent>
      )}
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  margin: 25px 0;
`;

const AccordionHeader = styled.div`
  width: 100%;
  font-size: 25px;
  background: #e5e2d8;
  display: inline-flex;
  justify-content: space-between;
  cursor: pointer;
  .accordion-icon {
    text-align: right;
  }
`;

const AccordionContent = styled.div`
  width: 100%;
  position: relative;
  margin: 20px 0;
  padding: 8px 0 10px;
`;
