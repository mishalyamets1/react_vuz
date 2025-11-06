import './App.css';
import Greeting from './Greeting';
import UserCard from './UserCard';
import TaskList from './TaskList'
function App() {
 return (
 <div className="App">
 <h1>Моё React приложение</h1>
 <Greeting/>

 <UserCard name="Иван" role="Админ" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s"
      isOnline={true}/>
 <UserCard name="Олег" role="Модер" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s"
      isOnline={false}/>
 <UserCard name="Петр" role="Менеджер" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s"
      isOnline={true}/>
      <TaskList/>
 </div>
 );
}
export default App;