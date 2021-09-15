//Jquery function for formatting the Datatable
$(document).ready( function () {
     $('#table-id').DataTable(
        {   
            "dom": 
            "t<'#table-footer'ip>",

            language: {
                search:"",
                searchPlaceholder:"Search items"
                    },
            
            "columnDefs": [ {
                "targets": 0,
                "orderable": false
                }
               
                ,
            { className: "dt-center", targets: [0,1,2,3,4,5,6,7,8] }],             
            
            order: [[ 6, "dsc" ]],
            
            "data":parsedData(),
            
            "columns": [
                
                    {"data":"profession_level",
                    render: function(data) {
                        let color = "white";
                        if (data === "apprentice") {
                            color = '#b3ff7a';
                        }
                        else if (data === "skilled") {
                            color = '#0391c4';      
                        }
                        else if (data === "professional") {
                            color = '#f6c232';      
                        }
                        else if (data === "artisan") {
                            color = '#d42626';      
                        }
                        else if (data === "master") {
                            color = '#ad3495';      
                        }
                        else if (data === "guru") {
                            color = '#ff8315';      
                        }

                        return '<span style="color:' + color + '">' + data + '</span>';
                    }
                    
                },
                    {"data":null,
                    render: function(data) {
                        let color = "white";
                        if (data.grade == 1) {
                            color = '#b3ff7a';
                        }
                        else if (data.grade == 2) {
                            color = '#0391c4';      
                        }
                        else if (data.grade == 3) {
                            color = '#f6c232';      
                        }
                        else if (data.grade == 4) {
                            color = '#ff8315';      
                        }
                        return '<span style="color:' + color + '">' + data.item_name + " x" +data.quantity  + '</span>';
                    }
                },
                    {"data":"in_stock",},
                    {"data":"base_price",},
                  
                    {"data":"total_quantity",},
                    {"data":"profit_box",
                    render: function(data) {
                        var number = $.fn.dataTable.render.number( ',', '.'). display(data);
                        let color = "white"; 
                        if (data < 0) {
                            color = "#ff6367"
                        }
                        else {
                            color = "#b3ff7a"
                        }

                        return '<span style="color:' + color + '">' + number + '</span>';
                    }
                },
                    {"data":"total_profit",
                    render: DataTable.render.profit()
                },
                    {"data":"revenue_box",
                    render: DataTable.render.profit()
                },
                    {"data":"total_revenue",
                    render: DataTable.render.profit()
                },

            ]
        } 
    );
} );


//Jquery function that sets the searchbox to the customized searchbox created/styled in the html/css
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
    });
});


//Filter box level requirement everytime profession level is changed
$(document).ready(function (){
    var table = $('#table-id').DataTable();
    $('#profession-level').on('change', function(){
        table.column(0).search('').draw(); 
     });
});

//Recalculate profit and revnue when cp changes by recalling data and recalculating
$(document).ready(function() {
    var table = $('#table-id').DataTable();
    $('#cp').on('keyup', function(){
        if ($('#cp').val() > 5000) {
            $('#cp').val() = 5000
        }
        table.clear().rows.add(parsedData()).draw();
       
     });
});

//Recalculate profit and revenue when mastery changes by recalling data and recalculating
$(document).ready(function() {
    var table = $('#table-id').DataTable();
    $('#mastery').on('keyup', function(){
        
        table.clear().rows.add(parsedData()).draw();
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

//Customized helper render function to style profit numbers
DataTable.render.profit = function () {
    return function ( data ) {
        var number = $.fn.dataTable.render.number( ',', '.'). display(data);
        let color = "white"; 
        if (data < 0) {
            color = "#ff6367"
        }
        else {
            color = "#b3ff7a"
        }

        return '<span style="color:' + color + '">' + number + '</span>';
    };
};


var goodNumber = /^(\+|-)?((\d+(\.\d+)?)|(\.\d+))$/
var goodPrefix = /^(\+|-)?((\d*(\.?\d*)?)|(\.\d*))$/
    
$('input')
    .data("oldValue",'')
    .bind('input propertychange', function() {
        var $this = $(this);
        var newValue = $this.val();
        
        if ( !goodPrefix.test(newValue) )
            return $this.val($this.data('oldValue'));
        if ( goodNumber.test(newValue) )
            $this.removeClass("redborder");
        else
            $this.addClass("redborder");
        
        return $this.data('oldValue',newValue)
    });



