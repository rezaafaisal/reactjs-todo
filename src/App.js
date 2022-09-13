import { Button } from "@mui/material";
import Header from "./components/Header";
import { TextField } from "@mui/material";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-8 col-lg-6">
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <Button variant="contained">halo</Button>
          </div>
        </div>
      </div>
      Halo Bang aowkoawko
    </div>
  );
}

export default App;
