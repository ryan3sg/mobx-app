import { makeAutoObservable } from "mobx"
class Timer {
    secondsPassed = 0
    name = ""

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.secondsPassed += 1
    }

    reset() {
        this.secondsPassed = 0
    }

    changeName(value) {
        this.name = value
    }
}

export default Timer;