const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
    const id = setInterval(() => {
        subscriber.next('test')
        console.log('leak')
    }, 1000)

    return () => {
        clearInterval(id);
    }
});
console.log('before')
const subscription = observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('Completed')
    },
    error: (err) => {
        console.error(err)
    }
})

setTimeout(() => {
    subscription.unsubscribe( )
}, 4000)
console.log('after')