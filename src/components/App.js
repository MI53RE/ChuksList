import React from "react";
import List from 'components/List';
import Form from 'components/Form';
import Filter from "components/Filter";

const App = (props) => (
  <div>
    <Filter />
    <List />
    <Form />
  </div>
);

export default App;