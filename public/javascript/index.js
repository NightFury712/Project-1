var chosen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var style = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var check = 1;
var result = [];

var setChosen = (index, value) => {
    chosen[index] = value;
}

var getChosen = () => {
    return chosen;
}


// Chuyen trang
var next = (response) => {
    $('p').css("background-color", "white");
    var item = response[check];
    if($('input[name=radios-1]:checked').length > 0) {
        setChosen(check-1, $('input[name=radios-1]:checked').val());
        $('#btn-' + check).toggleClass('btn-secondary btn-primary');
    } 
    $('li.question-' + (check)).text(item.QuestionNum + '. ' + item.Question);
    $('li.question-' + (check)).toggleClass('question-' + (check) + ' ' 
        + 'question-' + item.QuestionNum);
    $('p.answer-' + (check) + '-1').text(item.Answer1);
    $('p.answer-' + (check) + '-2').text(item.Answer2);
    $('p.answer-' + (check) + '-3').text(item.Answer3);
    $('p.answer-' + (check) + '-4').text(item.Answer4);
    $('p.answer-' + (check) + '-1').toggleClass('answer-' + (check) + '-1' + ' ' 
        + 'answer-' + item.QuestionNum + '-1');
    $('p.answer-' + (check) + '-2').toggleClass('answer-' + (check) + '-2' + ' ' 
        + 'answer-' + item.QuestionNum + '-2');
    $('p.answer-' + (check) + '-3').toggleClass('answer-' + (check) + '-3' + ' ' 
        + 'answer-' + item.QuestionNum + '-3');
    $('p.answer-' + (check) + '-4').toggleClass('answer-' + (check) + '-4' + ' ' 
        + 'answer-' + item.QuestionNum + '-4');
    $('input.' + (check) + '-1').toggleClass((check) + '-1' + ' '
        + item.QuestionNum + '-1')
    $('input.' + (check) + '-2').toggleClass((check) + '-2' + ' '
        + item.QuestionNum + '-2')
    $('input.' + (check) + '-3').toggleClass((check) + '-3' + ' '
        + item.QuestionNum + '-3')
    $('input.' + (check) + '-4').toggleClass((check) + '-4' + ' '
        + item.QuestionNum + '-4')
    if(getChosen()[item.QuestionNum-1] == 0) {
        $('input[name=radios-1]').prop("checked", false);
    } else {
        $('input.' + item.QuestionNum + '-' + getChosen()[item.QuestionNum-1]).prop("checked", true);
    }
    if(style[item.QuestionNum-1] == 1) {
        $("p.answer-" + item.QuestionNum + "-" + result[item.QuestionNum-1]).css("background-color", "#00FF00");
    } else if(style[item.QuestionNum-1] == -1) {
        if(getChosen()[item.QuestionNum-1] != 0) {
            $("p.answer-" + item.QuestionNum + "-" + getChosen()[item.QuestionNum-1]).css("background-color", "red");
        }            
        $("p.answer-" + item.QuestionNum + "-" + result[item.QuestionNum-1]).css("background-color", "#00FF00");
    }
    console.log(getChosen());
    check++;
    if(check == 30) {
        $('.next').hide();
        $('.submit').show();
    } else {
        $('.next').show();
        $('.submit').hide();
    }
}

var coordinate = (response, oldCheck , check) => {
    $('p').css("background-color", "white");
    if($('input[name=radios-1]:checked').length > 0) {
        console.log(oldCheck-1);
        setChosen(oldCheck-1, $('input[name=radios-1]:checked').val());
        $('#btn-' + oldCheck).toggleClass('btn-secondary btn-primary');
    }
    $('p').css("background-color", "white");
    console.log(getChosen());
    var item = response[check-1];
    $('li.question-' + (oldCheck)).text(item.QuestionNum + '. ' + item.Question);
    $('li.question-' + (oldCheck)).toggleClass('question-' + (oldCheck) + ' ' 
        + 'question-' + item.QuestionNum);
    $('p.answer-' + (oldCheck) + '-1').text(item.Answer1);
    $('p.answer-' + (oldCheck) + '-2').text(item.Answer2);
    $('p.answer-' + (oldCheck) + '-3').text(item.Answer3);
    $('p.answer-' + (oldCheck) + '-4').text(item.Answer4);
    $('p.answer-' + (oldCheck) + '-1').toggleClass('answer-' + (oldCheck) + '-1' + ' ' 
        + 'answer-' + check + '-1');
    $('p.answer-' + (oldCheck) + '-2').toggleClass('answer-' + (oldCheck) + '-2' + ' ' 
        + 'answer-' + check + '-2');
    $('p.answer-' + (oldCheck) + '-3').toggleClass('answer-' + (oldCheck) + '-3' + ' ' 
        + 'answer-' + check + '-3');
    $('p.answer-' + (oldCheck) + '-4').toggleClass('answer-' + (oldCheck) + '-4' + ' ' 
        + 'answer-' + check + '-4');
    $('input.' + (oldCheck) + '-1').toggleClass((oldCheck) + '-1' + ' '
        + check + '-1')
    $('input.' + (oldCheck) + '-2').toggleClass((oldCheck) + '-2' + ' '
        + check + '-2')
    $('input.' + (oldCheck) + '-3').toggleClass((oldCheck) + '-3' + ' '
        + check + '-3')
    $('input.' + (oldCheck) + '-4').toggleClass((oldCheck) + '-4' + ' '
        + check + '-4')
    if(getChosen()[check-1] == 0) {
        $('input[name=radios-1]').prop("checked", false);
    } else {
        $('input.' + check + '-' + getChosen()[check-1]).prop("checked", true);
    }
    if(style[check-1] == 1) {
        $("p.answer-" + check + "-" + result[check-1]).css("background-color", "#00FF00");
    } else if(style[check-1] == -1) {
        if(getChosen()[check-1] != 0) {
            $("p.answer-" + check + "-" + getChosen()[check-1]).css("background-color", "red");
        }            
        $("p.answer-" + check + "-" + result[check-1]).css("background-color", "#00FF00");
    }
}

$(".btn").click(function() {
    oldCheck = check;
    check = this.textContent;
    if(localStorage.getItem('test2') == null) {
        $.ajax({
            url: "http://localhost:3000/getdata2", 
            type: 'GET',
            success: function(response) {
                localStorage.setItem('test2', JSON.stringify(response));
                coordinate(response,oldCheck , check);
            },
            error: function() {
                console.log('Error !')
            }
        });
    } else coordinate(JSON.parse(localStorage.getItem('test2')), oldCheck, check);
    if(check == 30) {
        $('.next').hide();
        $('.submit').show();
    } else {
        $('.next').show();
        $('.submit').hide();
    }
});

// var previous = (response) => {
//     $('p').css("background-color", "white");
//     response.forEach((item) => {
//         var check = item.QuestionNum + 10;
//         if($('input[name=radios-' + i + ']:checked').length > 0) {
//             setChosen(check-1, $('input[name=radios-' + i + ']:checked').val());
//             $('#btn-' + check).toggleClass('btn btn-primary');
//         } 
//         $('li.question-' + (check)).text(item.QuestionNum + '. ' + item.Question);
//         $('p.answer-' + (check) + '-1').text(item.Answer1);
//         $('p.answer-' + (check) + '-2').text(item.Answer2);
//         $('p.answer-' + (check) + '-3').text(item.Answer3);
//         $('p.answer-' + (check) + '-4').text(item.Answer4);
//         $('li.question-' + (check)).toggleClass('question-' + (check) + ' ' 
//             + 'question-' + item.QuestionNum);
//         $('p.answer-' + (check) + '-1').toggleClass('answer-' + (check) + '-1' + ' ' 
//             + 'answer-' + item.QuestionNum + '-1');
//         $('p.answer-' + (check) + '-2').toggleClass('answer-' + (check) + '-2' + ' ' 
//             + 'answer-' + item.QuestionNum + '-2');
//         $('p.answer-' + (check) + '-3').toggleClass('answer-' + (check) + '-3' + ' ' 
//             + 'answer-' + item.QuestionNum + '-3');
//         $('p.answer-' + (check) + '-4').toggleClass('answer-' + (check) + '-4' + ' ' 
//             + 'answer-' + item.QuestionNum + '-4');
//         $('input.' + (check) + '-1').toggleClass((check) + '-1' + ' '
//             + item.QuestionNum + '-1')
//         $('input.' + (check) + '-2').toggleClass((check) + '-2' + ' '
//             + item.QuestionNum + '-2')
//         $('input.' + (check) + '-3').toggleClass((check) + '-3' + ' '
//             + item.QuestionNum + '-3')
//         $('input.' + (check) + '-4').toggleClass((check) + '-4' + ' '
//             + item.QuestionNum + '-4')
//         if(getChosen()[item.QuestionNum-1] == 0) {
//             $('input[name=radios-' + i + ']').prop("checked", false);
//         } else {
//             $('input.' + item.QuestionNum + '-' + getChosen()[item.QuestionNum-1]).prop("checked", true);
//         }
//         if(style[item.QuestionNum-1] == 1) {
//             $("p.answer-" + item.QuestionNum + "-" + result[item.QuestionNum-1]).css("background-color", "#00FF00");
//         } else if(style[item.QuestionNum-1] == -1) {
//             if(getChosen()[item.QuestionNum-1] != 0) {
//                 $("p.answer-" + item.QuestionNum + "-" + getChosen()[item.QuestionNum-1]).css("background-color", "red");
//             }
//             $("p.answer-" + item.QuestionNum + "-" + result[item.QuestionNum-1]).css("background-color", "#00FF00");
//         }
//     });
// }

$('.next').on('click', () => {
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

// $('.displayTest3').on('click', () => {
//     if(localStorage.getItem('test3') == null) {
//         $.ajax({
//             url: "http://localhost:3000/getdata3", 
//             type: 'GET',
//             success: function(response) {
//                 localStorage.setItem('test3', JSON.stringify(response));
//                 next(response);
//             },
//             error: function() {
//                 console.log('Error !')
//             }
//         });
//     } else next(JSON.parse(localStorage.getItem('test3')));
//     $('.previousTest3').show()
//     $('.previousTest2').hide()
//     $('.displayTest3').hide()
//     $('.submit').show()
// })

// $('.previousTest2').on('click', () => {
//     if(localStorage.getItem('test1') == null) {
//         $.ajax({
//             url: "http://localhost:3000/getdata1", 
//             type: 'GET',
//             success: function(response) {
//                 localStorage.setItem('test1', JSON.stringify(response))
//                 previous(response)
//             },
//             error: function() {
//                 console.log('Error !')
//             }
//         });
//     } else previous(JSON.parse(localStorage.getItem('test1')));
//     $('.previousTest2').hide()
//     $('.displayTest2').show()
//     $('.displayTest3').hide()
// })

// $('.previousTest3').on('click', () => {
//     previous(JSON.parse(localStorage.getItem('test2')))
//     $('.previousTest3').hide()
//     $('.displayTest3').show()
//     $('.previousTest2').show()
//     $('.submit').hide()
// })

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

    if($('input[name=radios-1]:checked').length > 0) {
        setChosen(check-1, $('input[name=radios-1]:checked').val());
        $('#btn-' + check).toggleClass('btn-secondary btn-primary');
    }
    
    $('.evaluate').show();
})

$('.evaluate').on('click', () => {
    for(var i = 0; i<=29; i++) {
        if(getChosen()[i] == 0) {
            style[i] = -1;
            $('#btn-' + (i+1)).toggleClass('btn-secondary btn-danger');
        }else if(getChosen()[i] == result[i]) {
            style[i] = 1;
            $('#btn-' + (i+1)).toggleClass('btn-primary btn-success');
        } else {
            style[i] = -1;
            $('#btn-' + (i+1)).toggleClass('btn-primary btn-danger');
        }
    }
    
    if(getChosen()[29] != result[i] && getChosen()[29] != 0) {
        $("p.answer-" + (30) + "-" + getChosen()[29]).css("background-color", "red");
    };
    $("p.answer-" + (30) + "-" + result[29]).css("background-color", "#00FF00");
    $('.submit').hide();
    $('.evaluate').hide();
})

var startTimer = (duration, display) => {
    var timer = duration, minutes, seconds;

    setInterval( () => {
        minutes = parseInt(timer / 60, 10);
        seconds = timer % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if(--timer < 0) {
            timer = duration;
        }
    }, 1000)
};

window.onload = () => {
    var time = new Date();
    var date = time.toUTCString();
    console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getHours());
    $(document).ready(() => {
        $.post("http://localhost:3000/postTime",
                {date: date},
                (data) => {
                    if(data = 'done') {
                        alert("login success");
                    }
                })
    })
    var tenMinutes = 60 * 30;
    var display = document.querySelector('#time');
    startTimer(tenMinutes, display);
}




