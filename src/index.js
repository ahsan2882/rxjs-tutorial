import { of } from "rxjs";
import { map, pluck, filter, reduce } from 'rxjs/operators'

const observable = of(1, 2, 3, 4, 5).pipe(
    reduce((acc, value) => acc + value, 0)
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
