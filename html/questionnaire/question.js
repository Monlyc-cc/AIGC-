let current = 0;
let arr = [];
let answer_list = [];
let selectId = null;
const list = document.querySelector('.list')
const goResult = document.querySelector('.goResult')


function getData() {
    //在js中发送借口请求
    return new Promise((resolve) => {

        const xhr = new XMLHttpRequest();
        //准备请求参数
        xhr.open('GET', 'https://mock.mengxuegu.com/mock/6767738f98077b17fe6792e2/question-naire', true);
        //发送请求
        xhr.send();
        //监听请求的不同状态
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                //console.log(xhr.responseText);
                //将数据处理成json格式
                const data = JSON.parse(xhr.responseText);
                //console.log(data.questions)
                resolve(data.questions)

            }
        }


    })

}
function showQuestion(questions, index) {
    //展示题目
    const data = questions[index];
    const num = document.getElementById('num');
    num.innerText = index + 1;
    const questionTitle = document.querySelector('.question-title')
    questionTitle.innerText = data.topic_name;

    //设置答案
    const topic_answer = data.topic_answer

    let lis = ''
    for (let i = 0; i < topic_answer.length; i++) {
        const li = `
      <li onclick="selectItem(${topic_answer[i].topic_answer_id})">
        <input type="radio" name="item" id="item${topic_answer[i].topic_answer_id}">
        <label for="item${topic_answer[i].topic_answer_id}">${topic_answer[i].answer_name}</label>
      </li>
    `
        lis = lis + li
    }
    list.innerHTML = lis

}
function showHead(res, index) {
    const totalNum = document.getElementById('totalNum');
    totalNum.innerText = res.length;
    const currentNum = document.getElementById('currentNum');
    currentNum.innerText = index + 1;
    const barProgrees = document.getElementsByClassName('bar-progrees');
    barProgrees[0].style.width = ((index + 1) / res.length) * 100 + '%';
}

function initQuestion(res, index) {
    //修改head
    showHead(res, index)
    //展示题目
    showQuestion(res, index);

}

getData().then((res) => {
    //保存数据
    console.log(res)
    arr = res;
    initQuestion(res, 0);

});
console.log(arr)

//当用户点击选择答案时
//
function selectItem(id) {
    selectId = id;
    console.log(id)
}
const next = document.querySelector('.next')
next.addEventListener('click', () => {
    if (selectId == null) {
        alert("答案不能为空")
        return
    }

    selectId = null;
    current++;
    if (current == arr.length - 1) {
        goResult.classList.remove('Hide')
        next.classList.add('Hide')
        selectId = null;
    }
    showHead(arr, current);
    showQuestion(arr, current)
})

goResult.addEventListener('click', () => {
    if (selectId == null) {
        alert("答案不能为空")
        return
    }
    selectId = null;
    console.log("selectId:"+selectId);
    window.location.href = './result.html';
})






