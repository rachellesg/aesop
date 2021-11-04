import { useState } from "react";
import styled from "styled-components";

import CrimeTable from "./CrimeTable";

const Accordion = ({ data, header }) => {
  const [isActive, setIsActive] = useState(false);
  const handleAccordion = () => {
    setIsActive(!isActive);
  };
  return (
    <AccordionWrapper>
      <div onClick={handleAccordion} className="accordion-header">
        <div className="accordion-title">{header}</div>
        <div className="accordion-icon">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <table className="accordion-content-details" cellPadding="8">
            <thead>
              <tr>
                <td width="5%" align="center">
                  Post Code
                </td>
                <td width="10%">Suburb</td>
                <td width="5%">Date</td>
                <td width="5%" align="center">
                  Offence Count
                </td>
                <td width="25%">Offence L1</td>
                <td width="25%">Offence L2</td>
                <td width="25%">Offence L3</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((details) => {
                  const { city, date, offenceLevelTwo, offenceLevelThree } =
                    details;

                  return (
                    <>
                      {city &&
                        (city === header || offenceLevelTwo === header) && (
                          <CrimeTable
                            details={details}
                            key={`${city}-${date}-${offenceLevelThree}`}
                          />
                        )}
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </AccordionWrapper>
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
    cursor: pointer;
    .accordion-icon {
      text-align: right;
    }
  }
  .accordion-content {
    table {
      border: 1px solid #4d605a;
      border-collapse: collapse;
      thead {
        font-weight: bold;
        background: #bdc1b5;
      }
      tr,
      td {
        border: 1px solid #4d605a;
        border-collapse: collapse;
      }
    }
    .accordion-content-details {
      width: 100%;
      position: relative;
      margin: 20px 0;
      padding: 8px 0 10px;
    }
  }
`;
