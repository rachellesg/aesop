const CrimeTable = ({ details }) => {
  const {
    header,
    postcode,
    city,
    date,
    offenceCount,
    offenceLevelOne,
    offenceLevelTwo,
    offenceLevelThree,
  } = details;
  return (
    <tr key={header}>
      <td>{postcode}</td>
      <td>{city}</td>
      <td>{date}</td>
      <td align="center">{offenceCount}</td>
      <td>{offenceLevelOne}</td>
      <td>{offenceLevelTwo}</td>
      <td>{offenceLevelThree}</td>
    </tr>
  );
};

export default CrimeTable;
