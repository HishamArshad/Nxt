   
import { observable} from "@legendapp/state"; 
// Observables
export const errorHandle = observable("Hello"); // A string observable
export const navSession = observable({ log: false }); // Object observable
export const tokenState = observable(""); // String observable for token

export const serverStates =observable({token: ""})
 