import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import SingleBook from './components/SingleBook'
import scifiBooks from './data/scifi.json'
import BookList from './components/BookList'
// scifiBooks è un array di libri di fantascienza

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav />
      <main className="flex-grow-1">
        <Welcome />
        {/* <AllTheBooks /> */}

        {/* immaginiamo che SingleBook riceva il libro da far vedere
        sotto forma di prop: chiameremo questa prop (oggetto) "book" */}
        {/* <SingleBook book={scifiBooks[19]} />

        <SingleBook book={scifiBooks[2]} />
        
        <SingleBook book={scifiBooks[9]} /> */}
        <BookList arrayOfBooks={scifiBooks} />
      </main>
      <MyFooter />
    </div>
  )
}

export default App
