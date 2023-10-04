import './App.css'
import ImageSlider from './ImageSlider'
import { images } from './assets/halloween-images'

function App() {

  return (
    <div>
      <ImageSlider images={images} title={'Halloween'}/>
    </div>
  )
}

export default App
