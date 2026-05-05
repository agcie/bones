import { useState } from 'react'
import HabitsPage from './HabitsPage'
import BadaniaPage from './BadaniaPage'
import './index.css'

type Page = 'habits' | 'badania'

export default function App() {
  const [page, setPage] = useState<Page>('habits')

  return (
    <>
      <main className="app-main">
        {page === 'habits' ? <HabitsPage /> : <BadaniaPage />}
      </main>
      <nav className="app-nav">
        <button
          className={page === 'habits' ? 'active' : ''}
          onClick={() => setPage('habits')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
          Nawyki
        </button>
        <button
          className={page === 'badania' ? 'active' : ''}
          onClick={() => setPage('badania')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4m-6 0h6" />
          </svg>
          Badania
        </button>
      </nav>
    </>
  )
}
