import { create } from 'zustand'

const useCountStore = create((set) => ({
    //数据
    // 把数据以一个hook函数来使用
    count: 0,
    age: 1,
    increase: () => {
        //用set修改state中的值，带来视图更新 
        return set((state) => {
            return {
                count: state.count + 1
            }
        })
    },
    decrease: (value) => {
        //用set修改state中的值，带来视图更新 
        return set((state) => {
            return {
                count: state.count - value
            }
        })
    }
}))
export default useCountStore