import Header from './components/Header';
import TodosLogic from './components/todosLogic';
import './styles/app.css';

const App = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  </div>
);
export default App;
