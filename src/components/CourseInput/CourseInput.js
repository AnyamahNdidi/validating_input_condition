import React from 'react'

import style from "./CourseInput.module.css"
import Button from '../UI/Button/Button'
import styled from "styled-components"


const FormControl = styled.div`
    margin: 0.5rem 0;

 & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.textColor ? "red" :""};
}

& input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? "red" :""};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
}

&input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
}

/*&.invalid input {
    border-color: red;
    background-color: rgb(172, 87, 87);
}

&.invalid label {
    color: red;
}
*/
`

const CourseInput = (props) => {
    const [enterValue, setEnterValue]  = React.useState("")
    const [isValid, setisValid]  = React.useState(true)
     console.log(enterValue)
    const handleChange = (e) => {
        if (e.target.value.trim().length > 0)
        {
            setisValid(true)
        }
        setEnterValue(e.target.value)
       
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (enterValue.trim().length === 0)
        {
            setisValid(false)
            return
        }
        props.addGoalHandler(enterValue)
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <div className={`${style['form-control']} ${!isValid  ? style.invalid : ""  }`} >
                  <label
                    //   style={{ color: !isValid ? "red" : "black" }}
                  >Goal achieve</label>
                  <input style={{
                    //   borderColor: !isValid ? "red" : "black",
                    //   backgroundColor: !isValid ? "salom" : "transparent",
                  }} type='text' onChange={handleChange} />
              </div>
              <Button type="submit">Add Goal</Button>
          </form>
      </div>
  )
}

export default CourseInput


// <FormControl
//                   invalid={!isValid}
//                   textColor ={!isValid}
//                 //   className={!isValid && "invalid"}
//               >
//                   <label
//                     //   style={{ color: !isValid ? "red" : "black" }}
//                   >Goal achieve</label>
//                   <input style={{
//                     //   borderColor: !isValid ? "red" : "black",
//                     //   backgroundColor: !isValid ? "salom" : "transparent",
//                   }} type='text' onChange={handleChange} />
//               </FormControl>