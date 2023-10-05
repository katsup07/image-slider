import './App.css'
import ImageSlider from './ImageSlider'
import TouchSwapper from './TouchSwapper';
import { halloweenImages } from './assets/halloween-images';
import { randomHalloweenImages } from './assets/halloween-images';

function App() {

  return (
    <main>
      <ImageSlider images={halloweenImages} title={'Halloween'}/>
      <TouchSwapper images={randomHalloweenImages}/>
    </main>
  )
}

export default App
