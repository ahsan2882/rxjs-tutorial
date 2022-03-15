import { timer } from "rxjs";

const observable = timer(0,1000)
console.log('before')
const subscription = observable.subscribe(
    console.log()
)
