const { Observer } = require("./Array")

// function defineReactive(data, key, val) {
//     Object.defineProperty(data, key, {
//         enumerable: true,
//         configurable: true,
//         get: function () {
//             return val
//         },
//         set: function (newVal) {
//             if(val === newVal) {
//                 return
//             }
//             return newVal
//         }
//     })
// }

function defineReactive(data, key, val){
    let dep = new Dep()
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function(){
            dep.depend()
            return val
        }
        set: function(){
            for(let i = 0; i < dep.length; i++){
                if(val === newVal){
                    return 
                }
                val = newVal
                dep.notify()
            }
        }
    })
}

export default class Dep{
    constructor(){
        this.subs = []
    }

    addSub(sub){
        this.subs.push(sub)
    }

    depend(){
        if(window.target){
            this.addSub(window.target)
        }
    }

    removeSub(sub){
        remove(this.subs, sub)
    }

    notify(){
        // 获得subs的拷贝
        let subs = this.subs.slice()
        for(let i = 0; i < this.subs.length ;i++){
            subs[i].update()
        }
    }

    function remove(arr, item){
        if(arr.length){
            let index = arr.indexOf(item)
            if(index > -1){
                return arr.splice(index, 1)
            }
        }
    }
}

function defineReactive(data, key, val){
    let dep = new Dep()
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function(){
            dep.depend()
            return val
        },
        set: function(){
            if(val === newVal){
                return 
            }
            return newVal
            dep.notify()
        }
    })
}

export default class Dep{
    constructor(){
        this.subs = []
    }
    addSub(sub){
        this.subs.push(sub)
    }
    removeSub(sub){
        remove(this.subs, sub)
    }
    depend(){
        if(window.target){
            this.addSub(window.target)
        }
    }
    notify(){
        let subs = this.subs.slice()
        for(let i = 0; i < subs.length; i++){
            subs[i].update()
        }
    }
    remove(arr, item){
        if(arr.length){
            const index = arr.indexOf(item)
            if(index > -1){
                return arr.splice(index, 1)
            }
        }
    }
}