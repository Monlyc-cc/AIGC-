import './App.css'
import Head from './components/Head/Head.jsx'
import Main from './components/Main/Main.jsx'
/**
 *  Head 这个名字等于声明一个变量，用来接收文件的函数体
 * jsx 可以将函数体当做标签使用
 * @returns  将引入的
 */
export default function App() {
    return (
        <div className="page">
            <div className="head">
                <Head></Head>
            </div>
            <div className="main">
                <Main></Main>
            </div>
            <div className="foot"></div>
        </div>
    )
}
