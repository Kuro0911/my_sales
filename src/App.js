import React, { useState } from "react";
import AppWrapper from "./App.style";
import Card from "./components/card/Card";
import { CardList } from "./components/cardList/CardList";
import { MOCK_DATA } from "./utils/MOCK_DATA";
function App() {
  const data = JSON.parse(MOCK_DATA);
  const [showChild, setShowChild] = useState(false);
  const handleClick = () => {
    setShowChild(!showChild);
  };
  return (
    <AppWrapper>
      <div onClick={handleClick}>
        <Card head={data.name} total={data.total} target={data.target} />
      </div>
      {showChild ? <CardList data={data.child} /> : <></>}
    </AppWrapper>
  );
}

export default App;
