import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/Header';
import MainContent from '/src/components/main-component/Main';
// import App from './components/app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Header />
    <MainContent />
  </StrictMode>,
)
