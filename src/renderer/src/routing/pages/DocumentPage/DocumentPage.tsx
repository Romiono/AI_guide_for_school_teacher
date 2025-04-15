import { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkImages from 'remark-images'
import classes from './DocumentPage.module.scss'
import markdown from '@renderer/assets/markdown/MarkDown'
import CustomImage from '@renderer/components/CustomImage/CustomImage'

const DocumentPage = (): ReactElement => {
  const params = useParams()
  const [content, setContent] = useState(``)
  useEffect(() => {
    const text = params.ntId && markdown[params.ntId].replace(/\n{2,}/g, '\n\n<br />\n\n')
    setContent(text)
  }, [params.ntId])

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <Markdown
          remarkPlugins={[remarkBreaks, remarkGfm, remarkImages]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: CustomImage
          }}
        >
          {content}
        </Markdown>
      </div>
    </div>
  )
}

export default DocumentPage
