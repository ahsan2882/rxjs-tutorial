import { fromEvent } from "rxjs";

const observable = fromEvent(
    document, 'click'
)
console.log('before')
const subscription = observable.subscribe(
    console.log()
)
