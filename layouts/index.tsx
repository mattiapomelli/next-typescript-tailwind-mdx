import { FunctionComponent } from 'react'

import Navbar from '@/components/navbar'

const DefaultLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-3xl mx-auto px-4 md:px-10">{children}</main>
    </>
  )
}

export default DefaultLayout
