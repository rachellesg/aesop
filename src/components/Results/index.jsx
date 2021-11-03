function Results({ dataFieldsId, records }) {
  const cities = [];

  const mappedRecords = dataFieldsId.map((item) => {
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
  console.log(cities);
  return <>{mappedRecords}</>;
}

export default Results;
