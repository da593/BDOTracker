$('.bi.bi-question-circle').ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
});
function getPageType () {
    console.log()
    if (document.getElementById('page').textContent.toUpperCase().includes("cooking".toUpperCase())) {
        return "cooking"
    }

    else if (document.getElementById('page').textContent.toUpperCase().includes("alchemy".toUpperCase())){
        return "alchemy"
    }

    else if (document.getElementById('page').textContent.toUpperCase().includes("farming".toUpperCase())){
        return "farming"
    }

    else if (document.getElementById('page').textContent.toUpperCase().includes("pearl".toUpperCase())){
        return "pearlmarket"
    }
    else if (document.getElementById('page').textContent.toUpperCase().includes("home".toUpperCase())){
        return "home"
    }
    
}

//When update button hits, Fetch is used to retrieve updated data from database and starts an async promise chain in order to update the table values displayed
function fetch_data(type) {
    return  fetch('/'.concat(type), {
        headers:{
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
        },
    }).then(response => {
      if (response.headers.get('content-type') != 'application/json') {
        throw new TypeError();
      }
      return response.json()         
    }) 
}

//Sets current updated time on loadup and on call
function setUpdateTime() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const currentTime = moment().tz(timezone).format('hh:mm:ss A');
    $('#update-time').text("prices updated at".concat(" ",currentTime))
}
//Get dom elements of various contact buttons (close,open,copy email)
var popup_box = document.getElementsByClassName("popup-container")

var open_contact = document.getElementById("contact-button")
var open_feedback= document.getElementById("feedback-button")
var side_open_contact = document.getElementById("side-contacts-button")
var side_open_feedback= document.getElementById("side-feedback-button") 

var copy_email = document.getElementById("copy-email")
//Open contact/feedback popup depending on linked click
open_contact.onclick = function(){
  
    popup_box[0].style.display = "block";
}

open_feedback.onclick = function(){
    popup_box[1].style.display = "block";
}

side_open_contact.onclick = function(){
  
    popup_box[0].style.display = "block";
}

side_open_feedback.onclick = function(){
    popup_box[1].style.display = "block";
}

//copy email to clipboard
copy_email.onclick = function(){
    navigator.clipboard.writeText(document.getElementById("email-value").textContent)
}


//Close popups and return to the "main" page for feedback popup
$('.close-button').on("click",function(){
    $('.popup-container').css("display","none")
    $('#form-sub').css('display','none')
    $('#submit-finished').css('display',"none") 
    $('#feedback-sub').css('display',"block") 
    $('#feedback-text').val("")
})
var feedback_type = ""
//Open the form div for users to enter feedback
$('#like-button,#suggest-button,#problem-button').on("click",function() {
    if ($(this).attr("id") == "like-button") {
        $('#form-header').text("What do you like?")
        feedback_type = "likes"
    }

    else if ($(this).attr("id") == "suggest-button") {
        $('#form-header').text("What is your suggestion?")
        feedback_type = "suggest"
    }

    else if ($(this).attr("id") == "problem-button") {
        $('#form-header').text("What is the problem?")
        feedback_type = "problem"
    }
    if($('#form-sub').css('display') == 'none') {
        $('#feedback-sub').css('display','none')
        $('#form-sub').css('display',"block") 
    }
});

//Return to the "main" page for feedback
$('.back-button').on('click',function(){
    $('#form-sub').css('display','none')
    $('#feedback-sub').css('display',"block") 
    $('#feedback-text').val("")
})

$('#submit-feedback').on('click',function(){
    var text = $('#feedback-text').val().trim()
    if (text == "" || text.length < 10){
        $('.validity').css("display","block")
    }
    else{
        $('#form-sub').css('display','none')
        $('.validity').css("display","none")
        $('#submit-finished').css('display',"block") 
        var data = {type:feedback_type,feedback:text}
        post_data(getPageType(),data)
    }

})

function post_data (type,data) {
    return  fetch('/'.concat(type), {
        method:"POST",
        credentials: "same-origin",
        headers:{
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
            'X-CSRFToken': getCookie('csrftoken'),
        },
        body:JSON.stringify({'post_data':data})
    })
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


