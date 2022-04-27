import { Stack, Switch, Text } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Feed } from "./screens/Feed";
import { MessagesScreen } from "./screens/MessagesScreen";

function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/messages" element={<MessagesScreen />} />
        </Routes>
    </Layout>
  );
}

export default App;
