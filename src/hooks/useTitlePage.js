import React, { useEffect } from 'react'

export default title => {
  useEffect(() => {
    document.title = `CodeRoom - ${title}`
  }, [])
}
