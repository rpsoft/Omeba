
import {
  QUESTIONS_GET,
} from '../actions/actions'

/*
 * reducers
 */

 var data = [{qCode: "q1a", qDescription: "a super awesome question", qRoot: "the questions about awesomeness", qWaves : ['W1','W2','W3','W4','W5','W6']},
 {qCode: "q1a2", qDescription: "a super awesome question2", qRoot: "the questions about awesomeness", qWaves : ['W1','W2','W5','W6']},
 {qCode: "q1a3", qDescription: "a super awesome question4", qRoot: "the questions about awesomeness", qWaves : ['W1','W2','W3','W4','W6']},
 {qCode: "q1a5", qDescription: "a super awesome question5", qRoot: "the questions about awesomeness", qWaves : ['W1','W3','W4','W5','W6']},
 {qCode: "q1a5", qDescription: "a super awesome question5", qRoot: "the questions about awesomeness", qWaves : ['W1','W3','W4','W5','W6']}]



export function questions(state = data, action) {
  switch (action.type) {
    case QUESTIONS_GET:
      state = action.payload
      return state
    default:
      return state
  }
}
