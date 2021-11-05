import styled from "styled-components";

const List = ({ data, header }) => {
  return (
    <ListWrapper>
      {data &&
        data.map((details) => {
          const {
            city,
            date,
            postcode,
            offenceCount,
            offenceLevelOne,
            offenceLevelTwo,
            offenceLevelThree,
          } = details;
          return (
            <>
              {city && (city === header || offenceLevelTwo === header) && (
                <ListContent key={`${city}-${date}-${offenceLevelThree}`}>
                  <ListDetails>
                    <div className="level-group">
                      <div className="levelOne">{offenceLevelOne}</div>
                      <div className="levelTwo">{offenceLevelTwo}</div>
                    </div>
                    <div className="levelThree">{offenceLevelThree}</div>
                  </ListDetails>
                  <ListHeader>
                    <div className="count">
                      Count: <span className="number">{offenceCount}</span>
                    </div>
                    <div className="date">Date: {date}</div>
                    <div className="place">
                      Suburb: {city}, {postcode}
                    </div>
                  </ListHeader>
                </ListContent>
              )}
            </>
          );
        })}
    </ListWrapper>
  );
};

export default List;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListContent = styled.div`
  width: 100%;
  background: #ffffff78;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
`;
const ListHeader = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-top: 20px;
  padding-top: 20px;
  &:before {
    height: 1px;
    width: 100%;
    background: #4d605a;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
  }
  .place {
    display: inline-flex;
    background: #4d605a;
    color: #ffffff;
    padding: 0 9px;
  }
  .number {
    background: #e1d0b5d6;
    padding: 4px 10px;
    border-radius: 50%;
  }
`;
const ListDetails = styled.div`
  line-height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .level-group {
    .levelOne {
      font-size: 12px;
    }
    .levelTwo {
      font-size: 15px;
    }
  }
  .levelThree {
    font-size: 25px;
  }
`;