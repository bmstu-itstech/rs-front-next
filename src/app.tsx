import { ErrorBoundary, LocationProvider, Route, Router } from 'preact-iso'
import './app.css';
import { Footer, Navbar } from './widgets'
import { Events, Home } from './pages'

export function App() {

  return (
    <LocationProvider>
      <ErrorBoundary>
        <Navbar />
        <Router>
          {[
            <Route path="/" component={Home} />,
            <Route path="/events" component={Events} />
          ]}
        </Router>
        <Footer />
      </ErrorBoundary>
    </LocationProvider>
  )
};
