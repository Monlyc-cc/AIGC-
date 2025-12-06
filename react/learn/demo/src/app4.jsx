
export default function app4() {
    function handler(name) {
        console.log(name);
    }
    const list = [{ id: 1, name: 'react' },
    { id: 2, name: 'vue' },
    { id: 3, name: 'html' },
    { id: 4, name: 'css' },]
    return (
        <div>
            <button onClick={handler}>click me!</button>
            <ul>
                {
                    list.map(((item,i) => {
                        return <li key={i} onClick={() => { handler(item.name) }}>{item.name}</li>
                    }))
                }
            </ul>
        </div>
    )
}

