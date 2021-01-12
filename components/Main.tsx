type Props = {
  text?: string;
}

export default function Main({ text = "default" }: Props) {
  return (
    <div>
      {text}
    </div>
  )
}
