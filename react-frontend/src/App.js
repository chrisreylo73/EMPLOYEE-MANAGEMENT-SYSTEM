import Footer from "./components/Footer"
import Header from "./components/Header";
import ListEmployeesComponent from "./components/ListEmployeesComponent";

function App() {
  return (
    <>
      <Header/>
      <div className="flex justify-center items-center h-1/2">
        <ListEmployeesComponent />
      </div>
      <Footer/>
    </>
    
  );
}

export default App;
