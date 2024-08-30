import questions from "./data"
import Question from "./components/Question"

const App = () => {
  return (
    <div className="allQuestions">
      {
        questions.map((oneQuestion) => {
          return <Question key={oneQuestion.id} {... oneQuestion}/> //rest parametr
        }
        )
      }
    </div>
  )
}

export default App
