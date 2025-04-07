import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import scifiBooks from './data/scifi.json'
import BookList from './components/BookList'
import './index.css'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav />
      <main className="flex-grow-1 bg-dark text-light py-4">
        <Welcome />
        <BookList arrayOfBooks={scifiBooks} />
      </main>
      <MyFooter />
    </div>
  )
}

export default App
