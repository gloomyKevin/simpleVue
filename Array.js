const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)

;[
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]
.forEach(function(method){
    const original = arrayProto[method]
    Object.defineProperty(arrayMethods, method, {
        value: function mutator (...args) {
            return original.apply(this, args)
        },
         enumerable: false,
         writable: true,
         configurable: true
    })
})

export class Observer {
    constructor (value) {
        this.value = value

        if (Array.isArray(value)) {
            // value.__proto__ = arrayMethods
            const augment = hasProto
            ? protoAugment
            : copyAugment
            augment(value, arrayMethods, arrayKeys)
        } else {
            this.walk(value)
        }
    }
}

function protoAugment(target, src, keys) {
    target.__proto__ = src       
}

function copyAugment(target, src, keys) {
    for(let i = 0, l = keys.length; i < 1; i++) {

    }
}

function defineReactive(data, key, val) {
    if (typeof key === 'object') new Observer(val)
    let dep = new dep()
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {

        },
        set: function () {

        }
    })
}