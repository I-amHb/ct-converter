import ErrorBoundary from "./components/ErrorBoundary"
import Header from "./components/Header"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <ErrorBoundary fallback="There was an error" >
        <Header />
      </ErrorBoundary>
      <Home/>
    </>
  )
}

export default App
