import './app.css'
import { AchievementsScreen, ContactsScreen, MainScreen, NewsScreen } from './screens'
import { Footer, Navbar } from './widgets'

export function App() {

  return (
    <>
      <Navbar />
      <div class="scroll-container">
        <MainScreen />
        <NewsScreen />
        <AchievementsScreen />
        <ContactsScreen />
        <Footer />
      </div>
    </>
  )
}
