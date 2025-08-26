import './App.css'
import './pages/pages.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <h1 className="brand">Bullet Herbal Remedies</h1>
        <nav className="site-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Products</NavLink>
          <NavLink to="/reviews" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Reviews</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Bullet Herbal Remedies</footer>
    </div>
  )
}
