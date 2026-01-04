(
    function (win, doc) {
        //拿到根标签,并计算rem值
        function setRem() {
            const docEl = doc.documentElement;
            const width = docEl.clientWidth
            docEl.style.fontSize = width / 10 + 'px';
        }

        setRem()

        //监听window 是否改变
        win.addEventListener('resize', () => {
            setRem();
        })

        //设置body 标签的字体大小
        doc.body.style.fontSize='16px';

    }
)(window, document)