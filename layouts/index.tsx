import Navbar from '@components/navbar'

interface Props {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-3xl mx-auto px-4 md:px-10 mt-4">
        {children}
      </main>
    </>
  )
}

export default DefaultLayout
