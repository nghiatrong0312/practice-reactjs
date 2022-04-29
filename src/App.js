import React from "react";
import Header from "./modules/common/components/Header";
import Body from "./modules/common/components/Body";
import { DataStory } from "./modules/common/Context/DataContext";

function App() {
  return (
      <DataStory>
          <div>
              <Header />
              <Body />
          </div>
      </DataStory>
  );
}

export default App;
