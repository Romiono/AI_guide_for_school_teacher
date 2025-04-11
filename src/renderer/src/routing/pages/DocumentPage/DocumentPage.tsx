import { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'


const DocumentPage = (): ReactElement => {
  const params = useParams();
  const content = `
  ## Routing

    ${JSON.stringify(params)}

  `
  return (
    <Markdown>
      {content}
    </Markdown>
  )
}

export default DocumentPage
