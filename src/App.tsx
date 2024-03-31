import useTheme, { ThemeProvider } from './context/theme'
import './App.css'
import { useEffect, useState } from 'react'
import ThemeButton from './components/ThemeButton';
import Card from './components/Card';

function App() {
  const { themeMode: defaultThemeMode } = useTheme();
  const [themeMode, setThemeMode] = useState(defaultThemeMode);

  function darkTheme() {
    setThemeMode('dark');
  }

  function lightTheme() {
    setThemeMode('light');
  }

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement?.classList.remove("light", "dark");
    htmlElement?.classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-700">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-center mb-4">
                  <ThemeButton />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App