import HomePage from './features/HomePage/HomePage'
import ResponsiveAppBar from './components/Navigation';

function App() {

  return (
    <div style={{ margin: "0" }}>
      <ResponsiveAppBar />
      <HomePage />
    </div>
  )
}

export default App
