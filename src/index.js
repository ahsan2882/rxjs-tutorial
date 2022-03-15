import { interval } from "rxjs";

const observable = interval(1000)
console.log('before')
const subscription = observable.subscribe(
    console.log()
)
