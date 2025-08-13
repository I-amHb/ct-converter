import ErrorBoundary from "./components/ErrorBoundary"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"


function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ErrorBoundary fallback="There was an error">
          <Header />
        </ErrorBoundary>
        <div className="flex-1 bg-bground1">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
