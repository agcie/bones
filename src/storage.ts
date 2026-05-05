const KEYS = {
  active: 'pmb_active',
  daily: 'pmb_daily',
  badania: 'pmb_badania',
};

export function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}

// Active habits
export function getActiveHabits(): string[] {
  return load<string[]>(KEYS.active, []);
}

export function addHabit(id: string): void {
  const habits = getActiveHabits();
  if (!habits.includes(id)) save(KEYS.active, [...habits, id]);
}

export function removeHabit(id: string): void {
  save(KEYS.active, getActiveHabits().filter(h => h !== id));
}

// Daily log: { [date]: { [itemId]: boolean } }
type DailyLog = Record<string, Record<string, boolean>>;

export function getDayLog(date: string): Record<string, boolean> {
  return load<DailyLog>(KEYS.daily, {})[date] ?? {};
}

export function toggleDayEntry(itemId: string): void {
  const date = today();
  const log = load<DailyLog>(KEYS.daily, {});
  const day = log[date] ?? {};
  save(KEYS.daily, { ...log, [date]: { ...day, [itemId]: !day[itemId] } });
}

// Badania results
export interface TestResult {
  date: string;
  value: string;
  notes: string;
}

type BadaniaStore = Record<string, TestResult[]>;

export function getBadaniaResults(itemId: string): TestResult[] {
  return load<BadaniaStore>(KEYS.badania, {})[itemId] ?? [];
}

export function addBadaniaResult(itemId: string, result: TestResult): void {
  const store = load<BadaniaStore>(KEYS.badania, {});
  const existing = store[itemId] ?? [];
  save(KEYS.badania, { ...store, [itemId]: [result, ...existing] });
}

export function deleteBadaniaResult(itemId: string, index: number): void {
  const store = load<BadaniaStore>(KEYS.badania, {});
  const existing = store[itemId] ?? [];
  save(KEYS.badania, { ...store, [itemId]: existing.filter((_, i) => i !== index) });
}
