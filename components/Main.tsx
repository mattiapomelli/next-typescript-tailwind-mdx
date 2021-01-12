import { useState, useEffect } from 'react'

type Props = {
  text?: string
}

export default function Main({ text = 'default' }: Props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [])

  const handleClick = (): void => {
    setCount((count) => count + 1)
  }

  return (
    <div>
      {text}
      <button onClick={handleClick}></button>
    </div>
  )
}
