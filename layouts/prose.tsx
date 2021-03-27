import { NextSeo } from 'next-seo'

interface LayoutProps {
  children: React.ReactNode
  meta: {
    title: string
    description: string
  }
}

const ProseLayout = ({ children, meta }: LayoutProps) => {
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
