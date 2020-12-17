// export default class Watcher {
//     constructor(vm, expOrFn, cb){
//         this.vm = vm
//         this.getter = parsePath(expOrFn)
//         this.value = this.getter()
//     }
//     get: function(){
//         window.target = this
//         let value = this.getter.call(this.vm, this.vm)
//         window.target = undefined
//         return value
//     }
//     update(){
//         const oldValue = this.value
//         this.value = this.get()
//         this.cb.call(vm, this.value, oldValue)
//     }
// }

export default class Watcher{
    constructor(vm, expOrFn, cb){
        this.vm = vm
        this.getter = parsePath(expOrFn)
        this.cb = cb
        this.value = this.get()
    }
    get: function(){
        window.target = this
        let value = this.getter.call(this.vm ,this.vm)
        window.target = undefined
        return value
    }
    update(){
        const oldValue = this.value
        this.value = this.get()
        this.cb.call(this.vm, this.value, oldValue)
    }
}