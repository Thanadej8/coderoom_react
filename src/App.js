import React, { useCallback } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as EmotionProvider } from 'emotion-theming'

import getTheme from '@styles/theme'
import stores from '@stores'
import { PageLoadable } from '@routers'

import '@styles/global'
import '@assets/icons/css/Glyphter.css'
import 'moment/locale/th'
import 'react-quill/dist/quill.snow.css'

const AsyncPages = PageLoadable({ loader: () => import('@pages') })

const App = () => {
  const theme = useCallback(() => getTheme(), [])
  return (
    <EmotionProvider theme={theme}>
      <Provider store={stores}>
        <BrowserRouter>
          <AsyncPages />
        </BrowserRouter>
      </Provider>
    </EmotionProvider>
  )
}

export default App
