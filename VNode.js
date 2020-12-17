export default class VNode {
    constructor (tag, data, children, text) {
        this.tag = tag,
        this.data = data,
        this.children = children
    }

    get child () {
        return this.componentInstance
    }
}

export const createEmptyVNode = text => {
    const node = new VNode()
    node.text = text
    node.isComment = true
    return node
}

export function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
}

export function cloneVNode (vnode,deep) {
    const cloned = new VNode (
        vnode.tag,
        vnode.data,
        vnode.children,
        vnode.text
    )
    cloned.ns = vnode.ns
    cloned.isStatic = vnode.isStatic
    
    if (deep && vnode.children) {
        cloned.children = cloneVNodes(vnode.children)
    }
    return cloned
}