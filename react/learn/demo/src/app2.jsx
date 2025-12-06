import "./app2.css"
function App() {
    const name = "小明"
    const songs=[{id:1,name:'稻香'},{id:1,name:'稻香'},{id:1,name:'稻香'}]
    const styleObj= {
        color:'red',
        fontSize:'100px'
    };
     //在jsx中，html中要用{} 开辟空间写js
    let flag =true;
    return (
        <div>
            <h1>你好，我是{name}</h1>
            <ul>
                {songs.map((item,i)=>{
                    return <li key={i}>{item.name}</li>
                })}
            </ul>

            <h2>{flag?'xxx':'yyy'}</h2>
            <h2>{flag&&'yyy'}</h2>
            <div className="box" style={styleObj}>子涵哥哥 </div>
            <div className="box">子涵哥哥 </div>

        </div>

    )
}
export default App