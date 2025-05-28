import Home from "./components/Home";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <AppRouter>
      <Home />
    </AppRouter>
  );
};

export default App;
