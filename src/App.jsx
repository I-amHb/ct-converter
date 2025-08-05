import ErrorBoundary from "./components/ErrorBoundary"
import Header from "./components/Header"


function App() {

  return (
    <>
      <ErrorBoundary fallback="There was an error" >
        <Header />
      </ErrorBoundary>
    </>
  )
}

export default App
