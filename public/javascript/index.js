var chosen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var display = () => {
    var msg = 0;
    for(var i=1; i<=10; i++) {
        if($('input[name=radios-' + i + ']:checked').val() == $('input[name=answer-' + i + ']:checked').val()) {
            msg++;
        }
    }
    document.getElementById('demo').innerText = 'Số câu trả lời đúng là: ' + msg + '/10';
}



// Chuyen trang
var next = (response) => {
    response.forEach((item) => {
        var index = item.QuestionNum - 10;
        chosen[item.QuestionNum-1] = $('input[name=radios-' + item.QuestionNum + ']:checked').val();
        $('li.question-' + (index)).text(item.QuestionNum + '. ' + item.Question);
        $('p.answer-' + (index) + '-1').text(item.Answer1);
        $('p.answer-' + (index) + '-2').text(item.Answer2);
        $('p.answer-' + (index) + '-3').text(item.Answer3);
        $('p.answer-' + (index) + '-4').text(item.Answer4);
        $('li.question-' + (index)).toggleClass('question-' + (index) + ' ' 
            + 'question-' + item.QuestionNum);
        $('p.answer-' + (index) + '-1').toggleClass('answer-' + (index) + '-1' + ' ' 
            + 'answer-' + item.QuestionNum);
        $('p.answer-' + (index) + '-2').toggleClass('answer-' + (index) + '-2' + ' ' 
            + 'answer-' + item.QuestionNum);
        $('p.answer-' + (index) + '-3').toggleClass('answer-' + (index) + '-3' + ' ' 
            + 'answer-' + item.QuestionNum);
        $('p.answer-' + (index) + '-4').toggleClass('answer-' + (index) + '-4' + ' ' 
            + 'answer-' + item.QuestionNum);
        console.log(item.QuestionNum-1)
        // console.log(chosen[item.QuestionNum-1]);
        if(chosen[item.QuestionNum-1] == 0) {
            $('input[name=radios-' + item.QuestionNum + ']').prop("checked", false);
        } else {
            $(item.QuestionNum + '-' + chosen[item.QuestionNum-1]).prop("checked", true);
        }
    });
}

var previous = (response) => {
    response.forEach((item) => {
        var index = item.QuestionNum + 10;
        chosen[item.QuestionNum-1] = $('input[name=radios-' + item.QuestionNum + ']:checked').val();
        $('li.question-' + (index)).text(item.QuestionNum + '. ' + item.Question);
        $('p.answer-' + (index) + '-1').text(item.Answer1);
        $('p.answer-' + (index) + '-2').text(item.Answer2);
        $('p.answer-' + (index) + '-3').text(item.Answer3);
        $('p.answer-' + (index) + '-4').text(item.Answer4);
        $('li.question-' + (index)).toggleClass('question-' + (index) + ' ' 
            + 'question-' + item.QuestionNum);
        $('p.answer-' + (index) + '-1').toggleClass('answer-' + (index) + '-1' + ' ' 
            + 'answer-' + item.QuestionNum);
        $('p.answer-' + (index) + '-2').toggleClass('answer-' + (index) + '-2' + ' ' 
            + 'answer-' + item.QuestionNum);
        $('p.answer-' + (index) + '-3').toggleClass('answer-' + (index) + '-3' + ' ' 
            + 'answer-' + item.QuestionNum);
        $('p.answer-' + (index) + '-4').toggleClass('answer-' + (index) + '-4' + ' ' 
            + 'answer-' + item.QuestionNum);
    });
}

$('#displayTest2').on('click', () => {
    if(localStorage.getItem('test2') == null) {
        $.ajax({
            url: "http://localhost:3000/getdata2", 
            type: 'GET',
            success: function(response) {
                localStorage.setItem('test2', JSON.stringify(response))
                console.log(JSON.parse(localStorage.getItem('test2')))
                next(response)
            },
            error: function() {
                console.log('Error !')
            }
        });
    } else next(JSON.parse(localStorage.getItem('test2')));
    $('#displayTest2').hide()
    $('#displayTest3').show()
    $('#previousTest2').show()
})

$('#displayTest3').on('click', () => {
    if(localStorage.getItem('test3') == null) {
        $.ajax({
            url: "http://localhost:3000/getdata3", 
            type: 'GET',
            success: function(response) {
                localStorage.setItem('test3', JSON.stringify(response))
                next(response)
            },
            error: function() {
                console.log('Error !')
            }
        });
    } else next(JSON.parse(localStorage.getItem('test3')));
    $('#previousTest3').show()
    $('#previousTest2').hide()
    $('#displayTest3').hide()
    $('#submit').show()
})

$('#previousTest2').on('click', () => {
    if(localStorage.getItem('test1') == null) {
        $.ajax({
            url: "http://localhost:3000/getdata1", 
            type: 'GET',
            success: function(response) {
                localStorage.setItem('test1', JSON.stringify(response))
                previous(response)
            },
            error: function() {
                console.log('Error !')
            }
        });
    } else previous(JSON.parse(localStorage.getItem('test1')));
    $('#previousTest2').hide()
    $('#displayTest2').show()
    $('#displayTest3').hide()
})

$('#previousTest3').on('click', () => {
    previous(JSON.parse(localStorage.getItem('test2')))
    $('#previousTest3').hide()
    $('#displayTest3').show()
    $('#previousTest2').show()
    $('#submit').hide()
})

$('#submit').on('click', () => {
    localStorage.clear();
})