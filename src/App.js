import React,{useState} from 'react'
import './App.css';
import CourseInput from './components/CourseInput/CourseInput';
import CourseGoalList from './components/CourseGoalList/CourseGoalList';



const App = () => {

    const [courseGoals, setCourseGoals] = useState([
        { text: 'Do all exercises!', id: 'g1' },
        { text: 'Finish the course!', id: 'g2' }
    ])
    
    const addGoalHandler = (enterText) => { 
    setCourseGoals((preGoals) => {
        const updateGoals = [...preGoals]
        updateGoals.unshift({ text: enterText, id: Math.random().toString() })
        return updateGoals
    })
    }
    
    const deleteGoalHandler = (enterId) => {
        setCourseGoals((preGoals) => {
            const updateGoals = preGoals.filter((goal) => goal.id !== enterId)
            return updateGoals
            
        })
    }

    let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList item={courseGoals } deleteGoalHandler={deleteGoalHandler} />

    );
  }

  return (
      <div>
          <section id="goal-form">
              <CourseInput addGoalHandler={addGoalHandler}  />
          </section>
          <section id="goals">
              {
                   content
                //   courseGoals.length > 0 &&
                //   (<CourseGoalList item={courseGoals } deleteGoalHandler={deleteGoalHandler} />
                //   )
              }
             
              
          </section>
      </div>
  )
}

export default App