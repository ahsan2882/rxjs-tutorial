import { of, from } from "rxjs";

const observable = from([1,2,3,4,5])
console.log('before')
const subscription = observable.subscribe({
    next(value){
        console.log(value)
    },
    complete() {
        console.log('completed')
    }
})
console.log('hello')
