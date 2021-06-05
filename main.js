let cntPerson = 0;

const cntUp = function () {
    cntPerson += 1;
    console.log(cntPerson)
};

const cntDown = function () {
    cntPerson -= 1;
    console.log(cntPerson)
    if (cntPerson < 0) {
        alert('誰もいない・・・。')
        cntPerson = 0;
    };
};

const reply = function () {
    const str = 'どうぞどうぞ';
    const action = str.repeat(cntPerson);
    alert(action);
    cntPerson = 0;
};

