import './App.css';
import Form from './components/ShiftChangeForm';
import NavigationBar from './components/Navigationbar';
import Schedule from './components/Schedule';

function App() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ textAlign: 'center' }}> Schedule </h1>
      <Schedule />
      <h1 style={{ textAlign: 'center' }}> Shift Change </h1>
      <Form />
    </div>
  );
}

export default App;
