import { of, from, fromEvent } from "rxjs";
import { map, pluck, filter } from 'rxjs/operators'

const observable = fromEvent(
    document, 'keydown'
).pipe(
    pluck('code'),
    filter(code => code === 'Space')
)
console.log('before')
const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete() {
        console.log('completed')
    }
})
console.log('hello')
