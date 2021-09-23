$(document).ready(function() {
    //mastery input range using attributes
    $("#mastery").attr({
        "max" : 2000,        
        "min" : 0       
    });

    
    //cp input range using attributes
    $("#cp").attr({
        "max" : 5000,        
        "min" : 0          
    });

    var table = $('#table-id').DataTable();

    // Filter in stock everytime in stock is changed
    $('#instock').keyup( function() {
        $(this).val(parseFloat($(this).val()) || 0);
        table.column(3).search('').draw();
    });

    //Filter box profession level requirement everytime profession level is changed
    $('#profession-level').on('change', function(){
        table.column(0).search('').draw(); 
     });


     //Recalculate profit and revenue when cp changes by recalling data and recalculating. Also validates input
     $('#cp').on('keyup', function(){
        $(this).val(parseFloat($(this).val()) || 0);
        if ($('#cp').val() > 5000) {
            $('#cp').val(5000)
        }
        table.clear().rows.add(calculateAdditionalData(getPageType())).draw();
     });

     //Recalculate profit and revenue when mastery changes by recalling data and recalculating. Also validates input
     $('#mastery').on('keyup', function(){

        $(this).val(parseFloat($(this).val()) || 0);
        if ($('#mastery').val() > 2000) {
            $('#mastery').val(2000)
        }
        

        table.clear().rows.add(calculateAdditionalData(getPageType())).draw();
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
                 table.clear().rows.add(calculateAdditionalData(type,data.data)).draw();
                 $("#update-image").css({'color':'#5ff369'})
                 setUpdateTime()
                 locked= true
             })
 
             
         }
 
         else {
            $(".bi.bi-arrow-clockwise").css({'color':'#e02d48'})
            setTimeout(function() {
                locked= false
                $(".bi.bi-arrow-clockwise").css({'color':'white'})
            },20000)
            }
         
      });
})


