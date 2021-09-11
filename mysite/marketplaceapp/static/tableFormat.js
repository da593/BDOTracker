$(document).ready( function () {
     $('#table-id').DataTable(
        {   
            "dom": 't<"#table-footer"ip>' ,
            language: {
                search:"",
                searchPlaceholder:"Search items"
                    },

            
        }

    );
} );

$(document).ready(function() {
    var dataTable = $('#table-id').dataTable();
    $("#searchbox").keyup(function() {
        dataTable.fnFilter(this.value);


    });  
 
});

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#instock').val(), 10 );
        var amount = parseFloat( data[2] ) || 0; // use data for the age column
 
        if ( ( isNaN( min )) ||
             ( min <= amount ) )
        {
            return true;
        }
        return false;
    }
);
 
$(document).ready(function() {
    var table = $('#table-id').DataTable();
     
    // Event listener to the two range filtering inputs to redraw on input
    $('#instock').keyup( function() {
        table.draw();
    } );
} );