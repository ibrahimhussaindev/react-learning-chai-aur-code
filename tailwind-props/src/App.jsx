import './App.css'
import Card from './components/Card'

function App() {
  let obj = {
    username: "ibrahimhussaindev",
    age: 19
  }

  return (
    <>
      <h1 className='bg-green-900 text-black p-4 rounded-2xl mb-8'>Tailwind CSS</h1>

      <Card fName="Ibrahim" lName="Hussain" details={obj} />
    </>
  )
}

export default App
