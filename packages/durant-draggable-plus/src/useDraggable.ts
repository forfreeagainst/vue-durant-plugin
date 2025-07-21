import Sortable, { type Options, type SortableEvent } from 'sortablejs'
import {
getCurrentInstance
}from 'vue';

export function useDraggable(...args: any[]) {
    // getCurrentInstance() 获取当前组件的实例对象
    // .proxy 是当前组件实例的公开代理对象，相当于 Vue 2 中的 this
    // 组件模板中绑定的数据（data），计算属性（computed），方法（methods），通过 expose 暴露的属性
    const vm = getCurrentInstance()?.proxy;
    const el = args[0]; // 常量
    const [, list,options] = args; // 变量
    return {
        ccc: 22
    }
}