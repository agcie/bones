import { useState, useCallback } from 'react'
import { habitSections, type HabitItem } from './data'
import { getActiveHabits, addHabit, removeHabit, getDayLog, toggleDayEntry, today } from './storage'

function HabitRow({
  item,
  isActive,
  isDone,
  tooltipOpen,
  onAdd,
  onRemove,
  onToggle,
  onTooltip,
}: {
  item: HabitItem
  isActive: boolean
  isDone: boolean
  tooltipOpen: boolean
  onAdd: () => void
  onRemove: () => void
  onToggle: () => void
  onTooltip: () => void
}) {
  const cls = ['habit-item', isActive && 'is-active', item.optional && 'is-optional'].filter(Boolean).join(' ')
  return (
    <div className={cls}>
      <div className="habit-row">
        {isActive && (
          <button
            className={`check-btn${isDone ? ' done' : ''}`}
            onClick={onToggle}
            aria-label={isDone ? 'Odznacz' : 'Oznacz jako zrobione'}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </button>
        )}
        <div className="habit-content">
          <div className="habit-name">{item.name}</div>
          <div className="habit-meta-row">
            <span className="habit-meta">{item.meta}</span>
            <button className="info-btn" onClick={onTooltip} aria-label="Więcej informacji">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </button>
          </div>
        </div>
        {isActive ? (
          <button className="remove-btn" onClick={onRemove} aria-label="Usuń z nawyków">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        ) : (
          <button className="add-btn" onClick={onAdd} aria-label="Dodaj do nawyków">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        )}
      </div>
      {tooltipOpen && <div className="habit-det">{item.det}</div>}
    </div>
  )
}

export default function HabitsPage() {
  const [activeHabits, setActiveHabits] = useState<string[]>(() => getActiveHabits())
  const [dayLog, setDayLog] = useState<Record<string, boolean>>(() => getDayLog(today()))
  const [openTooltip, setOpenTooltip] = useState<string | null>(null)

  const allItems = habitSections.flatMap(s => s.items)
  const activeItems = allItems.filter(i => activeHabits.includes(i.id))
  const doneCount = activeItems.filter(i => dayLog[i.id]).length
  const total = activeItems.length
  const progress = total > 0 ? Math.round((doneCount / total) * 100) : 0

  const handleAdd = useCallback((id: string) => {
    addHabit(id)
    setActiveHabits(getActiveHabits())
  }, [])

  const handleRemove = useCallback((id: string) => {
    removeHabit(id)
    setActiveHabits(getActiveHabits())
  }, [])

  const handleToggle = useCallback((id: string) => {
    toggleDayEntry(id)
    setDayLog(getDayLog(today()))
  }, [])

  const handleTooltip = useCallback((id: string) => {
    setOpenTooltip(prev => prev === id ? null : id)
  }, [])

  const dateStr = new Date().toLocaleDateString('pl-PL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Nawyki</h1>
        <div className="page-subtitle">{dateStr}</div>
      </div>

      {/* --- MOJE NAWYKI --- */}
      <div className="section">
        <div className="section-header">
          <div className="section-label">Moje nawyki</div>
        </div>

        {total === 0 ? (
          <div className="empty-card">
            Dodaj nawyki, które chcesz śledzić.<br />
            Dotknij <strong>+</strong> przy dowolnej pozycji poniżej.
          </div>
        ) : (
          <>
            <div className="progress-wrap">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
              </div>
              <div className="progress-label">
                <strong>{doneCount} z {total}</strong> dzisiaj — {progress}%
              </div>
            </div>
            <div className="card">
              {activeItems.map(item => (
                <HabitRow
                  key={item.id}
                  item={item}
                  isActive={true}
                  isDone={dayLog[item.id] ?? false}
                  tooltipOpen={openTooltip === item.id}
                  onAdd={() => handleAdd(item.id)}
                  onRemove={() => handleRemove(item.id)}
                  onToggle={() => handleToggle(item.id)}
                  onTooltip={() => handleTooltip(item.id)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="section-divider" />

      <div className="section">
        <div className="section-header">
          <div className="section-label">Wszystkie nawyki</div>
        </div>
      </div>

      {habitSections.map(section => (
        <div key={section.id} className="section">
          <div className="section-header">
            <div className="section-desc">{section.title}</div>
          </div>
          <div className="card">
            {section.items.map(item => {
              const isActive = activeHabits.includes(item.id)
              return (
                <HabitRow
                  key={item.id}
                  item={item}
                  isActive={isActive}
                  isDone={dayLog[item.id] ?? false}
                  tooltipOpen={openTooltip === item.id}
                  onAdd={() => handleAdd(item.id)}
                  onRemove={() => handleRemove(item.id)}
                  onToggle={() => handleToggle(item.id)}
                  onTooltip={() => handleTooltip(item.id)}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
