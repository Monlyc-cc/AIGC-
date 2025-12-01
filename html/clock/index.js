var Flippers = (function () {
    function Fl(node, currentTime, nextTime) {
        this.isFlipping = false;
        this.duration = 600;
        this.flipNode = node;
        this.frontNode = node.querySelector('.front');
        this.backNode = node.querySelector('.back');
        // 展示的值
        this.setFrontTime(currentTime);
        this.setBacKTime(nextTime);
    }
    Fl.prototype.setBacKTime = function (time) {
        this.backNode.dataset.number = time;
    };
    Fl.prototype.setFrontTime = function (time) {
        this.frontNode.dataset.number = time;
    }
    Fl.prototype.flipDown = function (currentTime, nextTime) {
        if (this.isFlipping) {
            return false;
        }
        this.isFlipping = true;
        this.setFrontTime(currentTime);
        this.setBacKTime(nextTime);
        this.flipNode.classList.add('running');
        setTimeout(() => {//卡片翻转完毕，移除running
            this.flipNode.classList.remove('running');
            this.isFlipping = false;
            this.setFrontTime(nextTime);
        }, this.duration);
    };
    return Fl;

})()


function getTimeFromDate(date) {
    //Date.toTimeString
    return date.toTimeString().slice(0, 8).split(':').join(' ')
}

const flips = Array.from(document.querySelectorAll('.flip'));

const now = new Date();
console.log(now)
//上一秒
// Date.getTime();
const nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
//当前
const nextTimeStr = getTimeFromDate(now);

//遍历每一涨卡片，为每一张卡片打造控制它的翻转函数
const flippers = Array.from(flips.map((flip, i) => {
    return new Flippers(flip, nextTimeStr[i], nowTimeStr[i])
}))

console.log(flippers)

//setInterval(()=>{},time)
setInterval(() => {
    const now = new Date();
    const nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
    const nextTimeStr = getTimeFromDate(now);
    for(let i=0;i<flippers.length;i++)
    {
        if(nowTimeStr[i]!=nextTimeStr[i])
        {
            flippers[i].flipDown(nowTimeStr[i],nextTimeStr[i])
        }
    }

}, 1000)
