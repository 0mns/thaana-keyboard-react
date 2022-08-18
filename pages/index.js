import { useState } from "react";
import Link from "next/link";

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
      <Link href='/formik'>Formik</Link>| 
      <a href='https://github.com/0mns/thaana-keyboard-react'>GitHub</a>
    </div>
  );
}
