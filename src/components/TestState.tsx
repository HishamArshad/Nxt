 
import { tokenState} from '@/state/serverState'
const TestState = () => { 

  return (
    <div>{tokenState.get()}</div>
  )
}

export default TestState