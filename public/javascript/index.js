var chosen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var style = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var result = [];

var setChosen = (index, value) => {
    chosen[index] = value;
}

var getChosen = () => {
    return chosen;
}


// Chuyen trang
var next = (response) => {
    var i = 1;
    $('p').css("background-color", "white");
    response.forEach((item) => {
        var index = item.QuestionNum - 10;
        if($('input[name=radios-' + i + ']:checked').length > 0) {
            setChosen(index-1, $('input[name=radios-' + i + ']:checked').val());
        } 
        $('li.question-' + (index)).text(item.QuestionNum + '. ' + item.Question);
        $('li.question-' + (index)).toggleClass('question-' + (index) + ' ' 
            + 'question-' + item.QuestionNum);
        $('p.answer-' + (index) + '-1').text(item.Answer1);
        $('p.answer-' + (index) + '-2').text(item.Answer2);
        $('p.answer-' + (index) + '-3').text(item.Answer3);
        $('p.answer-' + (index) + '-4').text(item.Answer4);
        $('p.answer-' + (index) + '-1').toggleClass('answer-' + (index) + '-1' + ' ' 
            + 'answer-' + item.QuestionNum + '-1');
        $('p.answer-' + (index) + '-2').toggleClass('answer-' + (index) + '-2' + ' ' 
            + 'answer-' + item.QuestionNum + '-2');
        $('p.answer-' + (index) + '-3').toggleClass('answer-' + (index) + '-3' + ' ' 
            + 'answer-' + item.QuestionNum + '-3');
        $('p.answer-' + (index) + '-4').toggleClass('answer-' + (index) + '-4' + ' ' 
            + 'answer-' + item.QuestionNum + '-4');
        $('input.' + (index) + '-1').toggleClass((index) + '-1' + ' '
            + item.QuestionNum + '-1')
        $('input.' + (index) + '-2').toggleClass((index) + '-2' + ' '
            + item.QuestionNum + '-2')
        $('input.' + (index) + '-3').toggleClass((index) + '-3' + ' '
            + item.QuestionNum + '-3')
        $('input.' + (index) + '-4').toggleClass((index) + '-4' + ' '
            + item.QuestionNum + '-4')
        if(getChosen()[item.QuestionNum-1] == 0) {
            $('input[name=radios-' + i + ']').prop("checked", false);
        } else {
            $('input.' + item.QuestionNum + '-' + getChosen()[item.QuestionNum-1]).prop("checked", true);
        }
        if(style[item.QuestionNum-1] == 1) {
            $("p.answer-" + item.QuestionNum + "-" + result[item.QuestionNum-1]).css("background-color", "green");
        } else if(style[item.QuestionNum-1] == -1) {
            if(getChosen()[item.QuestionNum-1] != 0) {
                $("p.answer-" + item.QuestionNum + "-" + getChosen()[item.QuestionNum-1]).css("background-color", "red");
            }
            $("p.answer-" + item.QuestionNum + "-" + result[item.QuestionNum-1]).css("background-color", "green");
        }
        i++;
    });
}

var previous = (response) => {
    var i = 1;
    $('p').css("background-color", "white");
    response.forEach((item) => {
        var index = item.QuestionNum + 10;
        if($('input[name=radios-' + i + ']:checked').length > 0) {
            setChosen(index-1, $('input[name=radios-' + i + ']:checked').val());
        } 
        $('li.question-' + (index)).text(item.QuestionNum + '. ' + item.Question);
        $('p.answer-' + (index) + '-1').text(item.Answer1);
        $('p.answer-' + (index) + '-2').text(item.Answer2);
        $('p.answer-' + (index) + '-3').text(item.Answer3);
        $('p.answer-' + (index) + '-4').text(item.Answer4);
        $('li.question-' + (index)).toggleClass('question-' + (index) + ' ' 
            + 'question-' + item.QuestionNum);
        $('p.answer-' + (index) + '-1').toggleClass('answer-' + (index) + '-1' + ' ' 
            + 'answer-' + item.QuestionNum + '-1');
        $('p.answer-' + (index) + '-2').toggleClass('answer-' + (index) + '-2' + ' ' 
            + 'answer-' + item.QuestionNum + '-2');
        $('p.answer-' + (index) + '-3').toggleClass('answer-' + (index) + '-3' + ' ' 
            + 'answer-' + item.QuestionNum + '-3');
        $('p.answer-' + (index) + '-4').toggleClass('answer-' + (index) + '-4' + ' ' 
            + 'answer-' + item.QuestionNum + '-4');
        $('input.' + (index) + '-1').toggleClass((index) + '-1' + ' '
            + item.QuestionNum + '-1')
        $('input.' + (index) + '-2').toggleClass((index) + '-2' + ' '
            + item.QuestionNum + '-2')
        $('input.' + (index) + '-3').toggleClass((index) + '-3' + ' '
            + item.QuestionNum + '-3')
        $('input.' + (index) + '-4').toggleClass((index) + '-4' + ' '
            + item.QuestionNum + '-4')
        if(getChosen()[item.QuestionNum-1] == 0) {
            $('input[name=radios-' + i + ']').prop("checked", false);
        } else {
            $('input.' + item.QuestionNum + '-' + getChosen()[item.QuestionNum-1]).prop("checked", true);
        }
        if(style[item.QuestionNum-1] == 1) {
            $("p.answer-" + item.QuestionNum + "-" + result[item.QuestionNum-1]).css("background-color", "green");
        } else if(style[item.QuestionNum-1] == -1) {
            if(getChosen()[item.QuestionNum-1] != 0) {
                $("p.answer-" + item.QuestionNum + "-" + getChosen()[item.QuestionNum-1]).css("background-color", "red");
            }
            $("p.answer-" + item.QuestionNum + "-" + result[item.QuestionNum-1]).css("background-color", "green");
        }
        i++;
    });
   
}

$('.displayTest2').on('click', () => {
    if(localStorage.getItem('test2') == null) {
        $.ajax({
            url: "http://localhost:3000/getdata2", 
            type: 'GET',
            success: function(response) {
                localStorage.setItem('test2', JSON.stringify(response));
                next(response);
            },
            error: function() {
                console.log('Error !')
            }
        });
    } else next(JSON.parse(localStorage.getItem('test2')));
    $('.displayTest2').hide()
    $('.displayTest3').show()
    $('.previousTest2').show()
})

$('.displayTest3').on('click', () => {
    if(localStorage.getItem('test3') == null) {
        $.ajax({
            url: "http://localhost:3000/getdata3", 
            type: 'GET',
            success: function(response) {
                localStorage.setItem('test3', JSON.stringify(response));
                next(response);
            },
            error: function() {
                console.log('Error !')
            }
        });
    } else next(JSON.parse(localStorage.getItem('test3')));
    $('.previousTest3').show()
    $('.previousTest2').hide()
    $('.displayTest3').hide()
    $('.submit').show()
})

$('.previousTest2').on('click', () => {
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
    $('.previousTest2').hide()
    $('.displayTest2').show()
    $('.displayTest3').hide()
})

$('.previousTest3').on('click', () => {
    previous(JSON.parse(localStorage.getItem('test2')))
    $('.previousTest3').hide()
    $('.displayTest3').show()
    $('.previousTest2').show()
    $('.submit').hide()
})

$('.submit').on('click', () => {
    $.ajax({
        url: "http://localhost:3000/getResult", 
        type: 'GET',
        success: function(response) {
            response.forEach((item) => {
                result.push(item.Result);
            });
        },
        error: function() {
            console.log('Error !')
        }
    });
    for(var i = 1; i<=10; i++) {
        if($('input[name=radios-' + i + ']:checked').length > 0) {
            setChosen(i+19, $('input[name=radios-' + i + ']:checked').val());
            console.log($('input[name=radios-' + i + ']:checked').val());
        }
    }
    console.log(getChosen());
    $('.evaluate').show();
})

$('.evaluate').on('click', () => {
    for(var i = 0; i<=29; i++) {
        if(getChosen()[i] == result[i]) {
            style[i] = 1;
        } else {
            style[i] = -1;
        }
    }
    
    for(var i = 20; i<=29; i++) {
        if(getChosen()[i] != result[i] && getChosen()[i] != 0) {
            $("p.answer-" + (i+1) + "-" + getChosen()[i]).css("background-color", "red");
        };
        console.log(result[i]);
        $("p.answer-" + (i+1) + "-" + result[i]).css("background-color", "green");
    };

    window.open("http://localhost:3000/test");

    self.close();
    
})

