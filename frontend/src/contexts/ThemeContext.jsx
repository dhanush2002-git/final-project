import React, { createContext, useMemo, useState } from 'react'

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false)

  const value = useMemo(
    () => ({
      dark,
      toggle: () => setDark((current) => !current),
    }),
    [dark]
  )

  return (
    <ThemeContext.Provider value={value}>
      <div className={dark ? 'theme-dark' : 'theme-light'}>
        <div className="app-shell">{children}</div>
      </div>
    </ThemeContext.Provider>
  )
}
