$(document).ready(function() {
    //slots input range using attributes
    $("#farming-slots").attr({
        "max" : 100,        
        "min" : 0       
    });

    
    //hours online input range using attributes
    $("#hours-online").attr({
        "max" : 24,        
        "min" : 0          
    });

    //replants range using attributes
    $("#harvest-day").attr({
        "max" : 24,        
        "min" : 0          
    });

    //family fame range using attributes
    $("#family-fame").attr({
        "max" : 100000,        
        "min" : 0          
    });

    //profession number range using attributes
    $("#profession-number").attr({
        "max" : 50,        
        "min" : 1          
    });

    var table = $('#table-id').DataTable();

    //Change profession number value based on profession and its respective range and recalculate values
    $('#trade-profession').on('change', function(){
        if ($(this).val() >= 1 && $(this).val() <= 5) {
            if ($('#profession-number').val() > 10) {
                $('#profession-number').val(10)
            }
        }

        else if ($(this).val() == 6) {
            if ($('#profession-number').val() > 30) {
                $('#profession-number').val(30)
            }
        }
        table.clear().rows.add(calculateFarmingData()).draw();
     });

    //Recalculate values when professio number changes. Also validates the value with its respective profession range
    $('#profession-number').on('keyup', function(){
        $(this).val(parseFloat($(this).val()) || 0);
        var tradeProfession = $('#trade-profession').val()
        if (tradeProfession >= 1 && tradeProfession <= 5) {
            if ($('#profession-number').val() > 10) {
                $('#profession-number').val(10)
            }
        }

        else if (tradeProfession == 6) {
            if ($('#profession-number').val() > 30) {
                $('#profession-number').val(30)
            }
        }

        else if (tradeProfession == 7) {
            if ($('#profession-number').val() > 50) {
                $('#profession-number').val(50)
            }
        }
        table.clear().rows.add(calculateFarmingData()).draw();
    });

    //Recalculate when any of the select box changes (origin town, value pack, merchant ring, fertilzier used)
    $('#origin-town,#crates-per-task,#value-pack,#merchant-ring,#fertilizer').on('change', function(){
        table.clear().rows.add(calculateFarmingData()).draw();
     });

    //Recalculate values when farming slot changes
    $('#farming-slots').on('keyup', function(){
        $(this).val(parseFloat($(this).val()) || 0);
        if ($('#farming-slots').val() > 100) {
            $('#farming-slots').val(100)
        }
        table.clear().rows.add(calculateFarmingData()).draw();
    });


    //Recalculate values when family-fame changes
    $('#family-fame').on('keyup', function(){
        $(this).val(parseFloat($(this).val()) || 0);
        if ($('#family-fame').val() > 100000) {
            $('#family-fame').val(100000)
        }
        table.clear().rows.add(calculateFarmingData()).draw();
    });

     //Recalculate values when hours online changes
     $('#hours-online').on('keyup', function(){
        $(this).val(parseFloat($(this).val()) || 0);
        if ($('#hours-online').val() > 24) {
            $('#hours-online').val(24)
        }
        table.clear().rows.add(calculateFarmingData()).draw();
     });

    //Recalculate values when Max harvest changes
     $('#harvest-day').on('keyup', function(){

        $(this).val(parseFloat($(this).val()) || 0);
        if ($('#harvest-day').val() > 24) {
            $('#harvest-day').val(24)
        }
        table.clear().rows.add(calculateFarmingData()).draw();
     });





     //Update table prices if update button is pressed by fetching data from database. Also prevent spamming the button by locking button for 1min
     var locked = false
     $('.update-button').on('click', function(){
         type = getPageType()
         if (locked === false) {
             $("#update-image").css({'color':'#efb700'})
             $('#update-time').text("loading data")
             fetch_data(getPageType(type)).then( data => {
                
                 $("#update-image").css({'color':'#efb700'})
                 table.clear().rows.add(calculateFarmingData(data.crop,data.fruit,data.stonetail,data.bsp)).draw();
                 $("#update-image").css({'color':'#5ff369'})
                 setUpdateTime()
                 locked= true
             })
 
             
         }
 
         else {
            setTimeout(function() {locked= false},20000)
         }
         
      });
})

function getPageType () {
    console.log()
    if (document.getElementById('title').textContent.toUpperCase().includes("cooking".toUpperCase())) {
        return "cooking"
    }

    else if (document.getElementById('title').textContent.toUpperCase().includes("alchemy".toUpperCase())){
        return "alchemy"
    }

    else if (document.getElementById('title').textContent.toUpperCase().includes("farming".toUpperCase())){
        return "farming"
    }

    else if (document.getElementById('title').textContent.toUpperCase().includes("pearl".toUpperCase())){
        return "pearlmarket"
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

