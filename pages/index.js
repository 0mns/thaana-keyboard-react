import { useState } from "react";
import { thaanaKeyboard } from "../utils/thaanaKeyboard";
export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className='wrapper'>
      <h1>thaana keyboard React</h1>
      <input
        value={name}
        onChange={(e) => setName(thaanaKeyboard(e.target.value))}
        className='inputstyle'
        type='text'
        placeholder="ހެލޯ ދުނިޔެ"
      />
      <br />
      <a href='/formik'>Formik</a>| 
      <a href='https://github.com/0mns/thaana-keyboard-react'>GitHub</a>
    </div>
  );
}
