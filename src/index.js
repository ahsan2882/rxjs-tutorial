import { fromEvent, interval } from "rxjs";
import { map, switchMap, take, tap } from 'rxjs/operators'
import { ajax } from "rxjs/ajax";
const button = document.querySelector('#btn')
const observable = fromEvent(
    button, 'click'
).pipe(
    switchMap(() => {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
            take(5),
            tap({
                complete() {
                    console.log('Inner Completed')
                }
            }),
        )
    }),
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