import { useState } from "react"
import { thaanaKeyboard } from "../utils/thaanaKeyboard"
export default function Home() {
  const [name, setName] = useState('')
  return (
    <div >
      <input 
        value={name}
        onChange={e=>setName(thaanaKeyboard(e.target.value))}
      />
    </div>
  )
}
