
//Jquery function for formatting the datatable
$(document).ready( function () {
     $('#table-id').DataTable(
        {   
            "dom": 't<"#table-footer"ip>' ,
            language: {
                search:"",
                searchPlaceholder:"Search items"
                    },
            
            "columnDefs": [ {
                "targets": 0,
                "orderable": false

                },
            { className: "dt-center", targets: [0,1,2,3,4,5,6,7,8,9] }],             
            
            order: [[ 1, "asc" ]]
            
        }

        

    );
} );


//Jquery function that sets the searchbox to the customized searchbox created in the html
$(document).ready(function() {
    var dataTable = $('#table-id').dataTable();
    $("#searchbox").keyup(function() {
        dataTable.fnFilter(this.value);

    });  
 
});


//Datatable plug-in API that holds an array of function to filter the database
//Filters items based on if item's in-stock is greater than the user input in-stock
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#instock').val(), 10 );
        var amount = parseFloat( data[2] ) || 0; // Data for the in stock column. (based on #table-id)
 
        if ( ( isNaN( min )) ||
             ( min <= amount ) )
        {
            return true;
        }
        return false;
    },

    function( settings, data, dataIndex ) {
        var min = parseInt( $('#profession-level').val(), 10 );
        var amount = ( data[0] ) ; // Data for the in stock column. (based on #table-id)
        
        if (amount === "apprentice") {
            amount = 1
        }

        else if (amount ==="skilled") {
            amount = 2
        }

        else if (amount ==="professional") {
            amount = 3
        }

        else if (amount ==="artisan"){
            amount = 4
        }
        else if (amount ==="master") {
            amount = 5
        }
        else if (amount ==="guru"){
            amount = 6
        }

        if ( ( isNaN( min )) ||
             ( amount <= min ) )
        {
            return true;
        }
        return false;
    }
);


//Filter in stock whenever in stock input is changed
$(document).ready(function() {
    var table = $('#table-id').DataTable();
     
    // Event listener to the two range filtering inputs to redraw on input
    $('#instock').keyup( function() {
        table.column(3).search('').draw();
    } );
} );


//Filter box level requirement everytime profession level is changed
$(document).ready(function (){
    var table = $('#table-id').DataTable();
    $('#profession-level').on('change', function(){
        table.column(0).search('').draw(); 
     });
    });


//Color code profession level selection input
var select = $('#profession-level');
select.change(function() {
    if (select.val() == 1) {
        select.css('color','#b3ff7a');
    }
    else if (select.val() == 2) {
        select.css('color','#0391c4');      
    }
    else if (select.val() == 3) {
        select.css('color','#f6c232');      
    }
    else if (select.val() == 4) {
        select.css('color','#d42626');      
    }
    else if (select.val() == 5) {
        select.css('color','#ad3495');      
    }
    else if (select.val() == 6) {
        select.css('color','#ff8315');      
    }
});

function calculateTotalQuantity() {
    console.log($("#cp").val)
    total_quantity = Math.floor(($("#cp").val) / 2) * ($("#quantity").val)
    $("#total_quantity").val(total_quantity)
}

$(document).ready(function (){
    $("#cp").on("change keyup",calculateTotalQuantity)
});