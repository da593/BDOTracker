$(document).ready( function () {

    $('#table-id').DataTable(
        {   
            "dom": 
            "<ti>",

            language: {
                search:"",
                searchPlaceholder:"Search items"
                    },
            paging:false,

            "columnDefs": [ {
                "targets": [0,1],
                "orderable": false
                }
               
                ,
            { className: "dt-center", targets: [0,1,2,3,4,5,6,7,8] }],             
            
            order: [[ 6, "dsc" ]],
            
            "data":calculateFarmingData(),
            
            "columns": [
                
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
                        return '<span style="color:' + color + '">' + data.item_name + '</span>';
                    }
                },
                    {"data":"fruit",},
                    {"data":"growth_time",},
                    {"data":"harvest_day",
                    render: function(data) {
                        return data.toFixed(2)
                    }
                },
                    {"data":"in_stock",},
                

                    {"data":"market",
                    render: DataTable.render.profit()
                },
                    {"data":"vendor",
                    render: DataTable.render.profit()
                },

                {"data":"crate",
                render: DataTable.render.profit()
            },

                { "data": undefined, "defaultContent": '<input "type="number" value="0" min = 1 max = 2400 style = "background-color:rgb(55, 59, 62); text-align:center;"        >'},

            ]
        } 
    );

    //sets the searchbox to the customized searchbox created/styled in the html/css
    var table = $('#table-id').dataTable();
    $("#searchbox").keyup(function() {
        table.fnFilter(this.value);

    });

    setUpdateTime() 
} );

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

//Sets current updated time on loadup and on call
function setUpdateTime() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const currentTime = moment().tz(timezone).format('hh:mm:ss A');
    $('#update-time').text("prices updated at".concat(" ",currentTime))
}

