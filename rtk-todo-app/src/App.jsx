import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-gray-800 text-white p-2 rounded-3xl'>Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
