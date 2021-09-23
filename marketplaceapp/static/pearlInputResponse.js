$(document).ready(function() {
    var table = $('#table-id').DataTable();

    // Filter in stock everytime in stock is changed
    $('#item-type').on("change", function() {
        table.draw();
    });

    //Update table prices if update button is pressed by fetching data from database. Also prevent spamming the button by locking button for 1mi
    var locked = false
    $('.update-button').on('click', function(){
        type = getPageType()
        if (locked === false) {
            $("#update-image").css({'color':'#efb700'})
            $('#update-time').text("loading data")
            fetch_data(getPageType(type)).then( data => {
                $("#update-image").css({'color':'#efb700'})
                table.clear().rows.add(data.data).draw();
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
});
