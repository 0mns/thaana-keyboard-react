import { Formik, Form } from "formik";
import Link from "next/link";

import { thaanaKeyboard } from "../utils/thaanaKeyboard";

export default function Home() {
  return (
    <div className='wrapper'>
      <div>
        <h1>Formik Test</h1>
        <p>thaana keyboard react</p>
        
        <Formik
          initialValues={{
            name: "",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <input
                value={values.name}
                id='name'
                onChange={(e) =>
                  setFieldValue(e.target.id, thaanaKeyboard(e.target.value))
                }
                className='inputstyle'
                type='text'
                placeholder='ހެލޯ ދުނިޔެ'
              />
              <br />
              <button type='submit' style={{marginBottom: "50px"}}>Submit</button>
            </Form>
          )}
        </Formik>

        <Link href='/'>Basic</Link>|
        <a href='https://github.com/0mns/thaana-keyboard-react'>GitHub</a>
      </div>
    </div>
  );
}
