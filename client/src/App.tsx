import { ApolloProvider } from "@apollo/client";
import './App.css';
import Todo from "./components/Todo";
import { client } from "./graphql/client";

function App() {

  return (
    <ApolloProvider client={client}>
      <Todo />
    </ApolloProvider>
  );
}

export default App;
