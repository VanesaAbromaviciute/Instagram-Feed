import './App.css'
import { InstagramFeedCard } from './InstagramFeedCard'

export function App() {
  return (
    <section className='App'>
    <InstagramFeedCard userName="Vanesaa088">Vanesa Abromaviciute</InstagramFeedCard>
    <InstagramFeedCard userName="SirODLana">Rubén Pacheco</InstagramFeedCard>
    <InstagramFeedCard userName="visman.a">Vismantas Abromavicius</InstagramFeedCard>
    </section>
  )
}

export default App
