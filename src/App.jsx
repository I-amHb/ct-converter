import ErrorBoundary from "./components/ErrorBoundary"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <div className="min-h-screen mb-small">
        <ErrorBoundary fallback="There was an error" >
          <Header />
        </ErrorBoundary>
        <Home />

      </div>
      <Footer />
    </>
  )
}

export default App
