import BottleContainer from './components/BottleContainer'
import Header from './components/Header'
import LeafContainer from './components/LeafContainer'
import TextContainer from './components/TextContainer'

const App = () => {
  return (
    <div>
      <Header />
      <main>
      <TextContainer />
      <BottleContainer />
      <LeafContainer />
      </main>
    </div>
  )
}

export default App