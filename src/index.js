import { interval } from "rxjs";
import { reduce, take, scan } from 'rxjs/operators'

const observable = interval(500).pipe(
    take(5),
    scan((acc, value) => acc + value, 0)
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
