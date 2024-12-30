import './App.css'
import BookingAdding from './Components/BookingAdding'

function App() {

  function handlePageRefreash(){
    window.location.reload()
  }

  return (
    <>
      <BookingAdding refreash={handlePageRefreash}/>
    </>
  )
}

export default App
