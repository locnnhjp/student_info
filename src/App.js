import './App.css';
import StudentList from './Components/StudentInfo';

const students = [
  {
    id: 1,
    name: "Nguyen Van A",
    age: 20,
    address: "Ha Noi"
  },
  {
    id: 2,
    name: "Nguyen Van B",
    age: 20,
    address: "Da Nang"
  },
  {
    id: 3,
    name: "Nguyen Van C",
    age: 20,
    address: "Ho Chi Minh"
  },
]
function App() {
  return (
    <div className="App">
        <StudentList students={students} />
    </div>
  );
}

export default App;
