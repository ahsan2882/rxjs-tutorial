import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
    subscriber.next('test')
    subscriber.complete()
});
console.log('before')
observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('Complete')
    },
    error: (err) => {
        console.error(err)
    }
})
console.log('after')