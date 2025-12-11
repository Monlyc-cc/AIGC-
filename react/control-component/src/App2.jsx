import { Input, Table, Space, Popconfirm } from 'antd'
import { useEffect, useState } from 'react'

const { Search } = Input


function App() {
    const [list, setList] = useState([])

    // 获取列表
    useEffect(() => {
        fetch("http://localhost:3000/data")
            .then(res => res.json())
            .then(
                (data) => {
                    setList(data)
                }
            )
    }, [])

    // 删除
    const del = async (id) => {
        fetch("http://localhost:3000/data/"+id,{method:'DELETE'})
        .then(res=>res.json()).then(()=>{
            setList(list.filter((item)=>{if(item.id!=id){
                return item;
            }}))
        })
    }

    // 搜索
    const onSearch = async (value) => {
        //空参则退
        if(!value)
        {
            return;
        }

        //有参则筛选数据
        let newList = [];
        fetch("http://localhost:3000/data")
            .then(res => res.json())
            .then((data) => {
                newList = data.filter((item) => {
                    if (item.id.toString().includes(value) || item.name.includes(value) || item.des.includes(value)) {
                        return item
                    }
                })
                console.log(newList, "new")
                setList(newList)
            })
    }

    const columns = [
        {
            title: '任务编号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '任务名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '任务描述',
            dataIndex: 'des',
            key: 'des',
        },
        {
            title: '操作',
            dataIndex: 'do',
            key: 'do',
            render: (text, record) => (
                <Space size="middle">
                    <Popconfirm title="确定要删除吗?"
                        onConfirm={() => del(record.id)}>
                        <a href="#">删除</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ]

    return (
        <div className="container">
            <div className="search-box">
                <Search
                    placeholder="请输入关键词"
                    allowClear
                    enterButton="搜索"
                    size="large"
                    onSearch={onSearch}
                />
            </div>
            {console.log(list, "list")}
            <Table bordered
                dataSource={list}
                columns={columns}
                rowKey={(record) => record.id}
                pagination={false} />
        </div>
    )
}

export default App