import { create } from "zustand";
import List from "../components/List";

const fetchApi = async () => {
    const response = await fetch('https://mock.mengxuegu.com/mock/66585c4db462b81cb3916d3e/songer/songer')
    const res = await response.json();
    return res.data
}

const useListStore = create((set) => {
    return {
        List: [],
        fetchList: async () => {
            const list =await fetchApi()
            set({ List: list })
        }
    }
})
export default useListStore
