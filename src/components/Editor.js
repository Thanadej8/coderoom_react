import React from 'react'
import AceEditor from 'react-ace'

import 'brace/ext/language_tools'
import 'brace/mode/java'
import 'brace/theme/monokai'
import 'brace/snippets/java'

export default props => {
  const {
    name,
    mode,
    theme = 'monokai',
    readOnly = false,
    fontSize = 14,
    showPrintMargin = true,
    showGutter = true,
    highlightActiveLine = true,
    value,
    setOptions = {
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      showLineNumbers: true,
      tabSize: 2,
    },
    maxLines,
    placeholder,
    onChange,
  } = props
  return (
    <AceEditor
      name={name}
      width="100%"
      height="100%"
      mode={mode}
      placeholder={placeholder}
      theme={theme}
      readOnly={readOnly}
      fontSize={fontSize}
      showPrintMargin={showPrintMargin}
      showGutter={showGutter}
      highlightActiveLine={highlightActiveLine}
      value={value}
      setOptions={setOptions}
      enableLiveAutocompletion={true}
      maxLines={maxLines}
      onChange={onChange}
    />
  )
}
