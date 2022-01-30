
$('button').on('click', 'alert: Template has no value');

//Autocomplete form with labels.
    $("#autocomplete").autocomplete({
        source: [
            "Akweter", "Ata", "Abena", "Ante", "Amphilo", 'Brit'
        ]
    });

//Adding value to a source-labels in a form.
    $('#autocomplete-with-value').autocomplete({
        source: [
            {label: 'United Kingdom "UK"', value: 'UK'},
            {label: 'United States of America "USA"', value: 'USA'},
            {label: 'Ghana "GH"', value: 'GH'},
            {label: 'Togo "TG"', value: 'TG'},
            {label: 'South Africa "SA"', value: 'SA'},
            {label: 'Germany "GE"', value: 'GE'},
            {label: 'Cote D`Voire "CD"', value: 'CD'}
        ]
    });

//Adding a deyalay period to a search.
    $("#delay").autocomplete({
        source: [
            "Pear", "Mango", "Pineappe", "Apple", "Banana", 'Grape', 'Lemon'
        ],
        delay: 3000
    });

//minLenght set a value for a number of input before a server display a result..
    $('#minLenght').autocomplete({
        source: [
            'Dog','cat','mouse','giraffe', 'horse', 'donkey', 'zebra', 'snake', 'crocodile', 'chimpanzee', 'leopard', 'tortoise'
        ],
        delay: 0,
        minLength: 2
    })

//Return value is set to matching input value..
    var data = [
        "Mensah Otabil", "T.T. Offei", "Suleiman", "Duncan William", "T.B. Joshua",
        "Brian Tracy", 'Ken Blanchard,', 'Mike Roberto', 'Ed Boswell', 'W. Ascherman',
        'Kathleen M. Eisenhardt', 'Jonathan Kraft', 'Wilbur L. Ross, Jr', 'Dr. David Sirota',
        'Sue Annis Hammond', 'Matthew R. Simmons', 'Lawrence N. Stevenson', 'Richard Sands',
        'Luke O`Neill', 'Shozo Hashimoto', 'Gerardine Ferlins', 'Donald Trump', 'Barack Obama',
        'Michael Useem', 'Joel Osten', 'Donald C. Hambrick', 'Dr. Drea Zigarmi',
        ];
        
//Request has a single term property <input> whilst response is a callback function that filter the input to match the same input of the user..
//$.ui.autocomplete is a function in Jquery..
//If RegExp is not called, the function will treat the input terms as an ordinary statements.
//The "^" tells the RegExp to match all input by the user at the start.
//The "i" tells RegExp to be insensitive.
//-$.grep( data-  Loops over all data array..
//The function adds any matching array return the $.grep()..
//The return valua display the value input by the user insentively..
//The source function is now invoked...
    $( "#exact-value" ).autocomplete({
        source: function( request, response ) {
        var results = [],
        term = $.ui.autocomplete.escapeRegex( request.term ),
        matcher = new RegExp( "^" + term, "i" ),
        matches = $.grep( data, function( item ) {
        return matcher.test( item );
        });
        response( matches );
    }});

    //Extracting git repos with it's full names.
    //In this case, we 'q' iis the searched word by which the "in:name" tells GitHub to select only names.
    $( "#repos" ).autocomplete({
    minLength: 2,
    source: function( request, response ) {
    $.getJSON( "https://api.github.com/search/repositories",
    { q: request.term + " in:name" })
    .then( function( data ) {
    var matches = $.map( data.items, function( repo ) {
    return repo.full_name + " (Forks: " + repo.forks + ")";
    });
    response( matches ); 
    });
    }
    });
    
    //Item is each piece of element.
    //Array is the list of the item.
    //Index is the 
    let fruits = ['mango', 'apple', 'grape', 'pear', 'orange', 'pineapple', 'lemon', 'no fruit', 'banana'];
    let fig = fruits.map(function(index, array, item){
        return index.length;
    });
    console.log(fig); 

    $( "button, input, a" ).button();
