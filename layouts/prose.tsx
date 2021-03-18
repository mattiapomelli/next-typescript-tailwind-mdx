import { FunctionComponent } from 'react'
import { NextSeo } from 'next-seo'

interface LayoutProps {
  meta: {
    title: string
    description: string
  }
}

const ProseLayout: FunctionComponent<LayoutProps> = ({ children, meta }) => {
  const { title, description } = meta

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <div className="prose dark:prose-dark">{children}</div>
    </>
  )
}

export default ProseLayout
