import './App.css';
import NavBar from './components/NavBar';
import Section from './components/Section';
import BudgetMealSection from './components/BudgetMealSection';
import ComboMealSection from './components/ComboMealSection';
import SpecialMealSection from './components/SpecialMealSection';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Section/>

      <BudgetMealSection/>
      <ComboMealSection/>
      <SpecialMealSection/>
    </div>
  );
}

export default App;
