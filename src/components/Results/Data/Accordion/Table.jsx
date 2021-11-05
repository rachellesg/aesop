import styled from "styled-components";

import CrimeTable from "./CrimeTable";

const Table = ({ header, data }) => {
  return (
    <TableWrapper cellPadding="8">
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
            const { city, date, offenceLevelTwo, offenceLevelThree } = details;
            return (
              <>
                {city && (city === header || offenceLevelTwo === header) && (
                  <CrimeTable
                    details={details}
                    key={`${city}-${date}-${offenceLevelThree}`}
                  />
                )}
              </>
            );
          })}
      </tbody>
    </TableWrapper>
  );
};

export default Table;

const TableWrapper = styled.table`
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
`;
