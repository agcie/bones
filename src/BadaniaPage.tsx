import { useState, useCallback } from 'react'
import { badaniaSections } from './data'
import { getBadaniaResults, addBadaniaResult, deleteBadaniaResult, today, type TestResult } from './storage'

function initResults() {
  const init: Record<string, TestResult[]> = {}
  badaniaSections.forEach(s => s.items.forEach(i => {
    init[i.id] = getBadaniaResults(i.id)
  }))
  return init
}

export default function BadaniaPage() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const [results, setResults] = useState<Record<string, TestResult[]>>(initResults)
  const [formDate, setFormDate] = useState('')
  const [formValue, setFormValue] = useState('')
  const [formNotes, setFormNotes] = useState('')

  const handleExpand = useCallback((id: string) => {
    setExpanded(prev => {
      const next = prev === id ? null : id
      if (next !== null) {
        setFormDate(today())
        setFormValue('')
        setFormNotes('')
      }
      return next
    })
  }, [])

  const handleSave = useCallback((itemId: string) => {
    if (!formValue.trim()) return
    const result: TestResult = {
      date: formDate || today(),
      value: formValue.trim(),
      notes: formNotes.trim(),
    }
    addBadaniaResult(itemId, result)
    setResults(prev => ({ ...prev, [itemId]: getBadaniaResults(itemId) }))
    setFormValue('')
    setFormNotes('')
    setFormDate(today())
  }, [formDate, formValue, formNotes])

  const handleDelete = useCallback((itemId: string, index: number) => {
    deleteBadaniaResult(itemId, index)
    setResults(prev => ({ ...prev, [itemId]: getBadaniaResults(itemId) }))
  }, [])

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Badania</h1>
        <div className="page-subtitle">Zapisuj wyniki, śledź historię</div>
      </div>

      {badaniaSections.map(section => (
        <div key={section.id} className="section">
          <div className="section-header">
            <div className="section-title">{section.title}</div>
            <div className="section-desc">{section.desc}</div>
          </div>
          <div className="card">
            {section.items.map(item => {
              const isExpanded = expanded === item.id
              const itemResults = results[item.id] ?? []
              const lastResult = itemResults[0]

              return (
                <div key={item.id} className="badania-item">
                  <div className="badania-row" onClick={() => handleExpand(item.id)}>
                    <div className="badania-content">
                      <div className="badania-name">{item.name}</div>
                      <div className="badania-freq">{item.meta}</div>
                      {lastResult && (
                        <div className="badania-last">
                          Ostatni: {lastResult.date} — {lastResult.value}
                        </div>
                      )}
                    </div>
                    <div className={`chevron${isExpanded ? ' open' : ''}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="badania-expanded">
                      <div className="badania-det">{item.det}</div>

                      {itemResults.length === 0 ? (
                        <div className="no-results">Brak zapisanych wyników</div>
                      ) : (
                        <div className="results-list">
                          {itemResults.map((r, i) => (
                            <div key={i} className="result-row">
                              <div className="result-date">{r.date}</div>
                              <div className="result-body">
                                <div className="result-value">{r.value}</div>
                                {r.notes && <div className="result-notes">{r.notes}</div>}
                              </div>
                              <button
                                className="result-del"
                                onClick={() => handleDelete(item.id, i)}
                                aria-label="Usuń wynik"
                              >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="3 6 5 6 21 6" />
                                  <path d="M19 6l-1 14H6L5 6" />
                                  <path d="M10 11v6M14 11v6" />
                                  <path d="M9 6V4h6v2" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="add-result-form">
                        <div className="form-row">
                          <input
                            type="date"
                            className="form-input"
                            value={formDate}
                            onChange={e => setFormDate(e.target.value)}
                          />
                          <input
                            type="text"
                            className="form-input"
                            placeholder="Wynik"
                            value={formValue}
                            onChange={e => setFormValue(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSave(item.id)}
                          />
                        </div>
                        <div className="form-row">
                          <input
                            type="text"
                            className="form-input"
                            placeholder="Notatki (opcjonalnie)"
                            value={formNotes}
                            onChange={e => setFormNotes(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSave(item.id)}
                          />
                          <button
                            className="form-submit"
                            onClick={() => handleSave(item.id)}
                          >
                            Zapisz
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
