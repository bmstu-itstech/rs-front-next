import { ErrorBoundary, LocationProvider, Route, Router } from 'preact-iso'
import './app.css';
import { Footer, Navbar } from './widgets'
import { Home } from './pages'

export function App() {

  return (
    <LocationProvider>
      <ErrorBoundary>
        <Navbar />
        <Router>
          {[
            <Route path="/" component={Home} />
          ]}
        </Router>
        <Footer />
      </ErrorBoundary>
    </LocationProvider>
  )
};
