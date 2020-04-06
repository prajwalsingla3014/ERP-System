$(document).ready(function() {
    $('#example').dataTable( {
        "columnDefs": [
            { "type": "numeric-comma", targets: 3 }
        ]
    } );
} );