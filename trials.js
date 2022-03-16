


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
        source: ['Dog','cat','mouse','giraffe', 'horse', 'donkey', 'zebra', 'snake', 'crocodile', 'chimpanzee', 'leopard', 'tortoise'],
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
/*
    //Item is each piece of element.
    //Array is the list of the item.
    //Index is the 
    let fruits = ['mango', 'apple', 'grape', 'pear', 'orange', 'pineapple', 'lemon', 'no fruit', 'banana'];
    let fig = fruits.map(function(index, array, item){
        return index.length;
    });
    console.log(fig); 
////////////////////////////////////////////////////////////////
/*    //Function to call the button of the inbedd quuery..
    $( "input, a" ).button();
    /*
    //Selectmenu overrides the normal HTML style.
    $('#date-validation').datepicker(isValidDate);
    function isValidDate( date ) {
        try {
        $.datepicker.parseDate( "yy-mm-dd", date );
        return true;
        } catch( error ) {
        return false;
        }
       }
       */
/*
    //Selectmenu overrides the normal HTML style.
    $('#date-format').datepicker(
        /*{showWeek: true}*//*
        {changeYear: true}
        );

    //Set Date Ui function for action to revoke...
    $('#date-ui').buttonset({icons:{primary:"ui-icon-calendar"}});

    //Selectmenu overrides the normal HTML style.
    $('#selectmenu').selectmenu();

    //Selectmenu overrides the normal HTML style.
    $('#doctor').selectmenu();

    //Datepicker overrides the normal HTML style. christmas 
    $('#appointment').datepicker(
        {changeMonth: true},
        /*
        {showOtherMonths: true},
        {
            buttonImage: "/",
            buttonImageOnly: true,
            showOn: "button"
        }*/
/*        );

    //Datepicker overrides the normal HTML style. 
    $('#christmas').datepicker(
        {beforeShowDay: function(date){
            if (date.getDate() == 25 && date.getMonth() == 11){
                return [false, "ui-christmas"];
            }
            else
            return[true];
        }});

    //Datepicker overrides the normal HTML style.
    $( "#weekends" ).datepicker(
        {
        beforeShowDay: $.datepicker.noWeekends
        });

    //Datepicker overrides the normal HTML style.
        $("showButton").datepicker({showButtonPanel: true});    

        //Datepicker overrides the normal HTML style.
    $( "#weekends" ).datepicker(
        {
        beforeShowDay: $.datepicker.noWeekends
        });

    //Datepicker overrides the normal HTML style.
    $("#absent").datepicker({
        beforeShowDay:  checkDate
    });
    function checkDate(abs) {
        var isWeekday = abs.getDate() > 0 && abs.getDate() < 6;
        if ($("#doctor").val() === "James") {
            return [ isWeekday && abs.getDay() !=2 ];
        }
        else{
            return[isWeekday];
        }
    };

    //Here, Dr james is absent from the office on Tuesday.
    /*$( "#absent" ).datepicker({
        beforeShowDay: checkDate
       });
    function checkDate( date ) {
        var isWeekday = date.getDay() > 0 && date.getDay() < 6;
        if ( $( "#doctor" ).val() === "James" ) {
        return [ isWeekday && date.getDay() != 2 ];
        }
        else {
        return [ isWeekday ];
        }
       };*/

       //A form to be submitted after Dr Smith.
       /*$( "#submit-dr-form" ).on( "submit", function( event ) {
        var date;
        try {
        date = $.datepicker.parseDate( "mm/dd/yy", $( "#absent" ).val() );
        } catch ( error ) { }
        if ( !date ) {
        event.preventDefault();
        alert( "Please provide a valid date." );
        }
        if ( date && !checkDate( date )[ 0 ] ) {
        event.preventDefault();
        alert( "Cannot select a weekend or Tuesday for Dr. Smith." );
        }
       });*/
       
/*       //Setting a spinner for Jquery element, but can be done using the DOM elements.
       $("#spinner-ui").spinner({step:10});

       //Setting a Max and Min for a spinner.
       $("#spinner-min-max").spinner(/*{
           min: 0,
           max: 100,
           step: 10
       }*//*); 

       //Validating the soinner value.  
       /*$("submit-spinner-form").on('click', function(show){
           if(*//*$("#spinner-check-submit").spinner();/*"isValid")){
               show.preventDefault();
               alert("Wrong details.");
           }
       });*/

       ///CONTACT.HTML///////////////////////////////////////////////////////////////////////////////////////////////////
       //TIMETABLE FORM FOR CLASSROW IN index.html..
       $( "#dialog" ).dialog({
        autoOpen: false,  
        buttons: {
            Update: function() { 
                var firstName = $( "#firstName" ).val(),
                    lastName = $( "#lastName" ).val(),
                    row = $( this ).data( "editingRow" );
    
                row.find( "td" ).eq( 1 ).text( firstName );
                row.find( "td" ).eq( 2 ).text( lastName );
                $( this ).dialog( "close" );
            }, 
            Cancel: function() {
                $( this ).dialog( "close" );
            }
        }
    });
    
    $( "table" ).on( "click", "button", function() {
        var row = $( this ).parents( "tr" ),
            firstName = row.find( "td" ).eq( 1 ).text(),
            lastName = row.find( "td" ).eq( 2 ).text(),
            admin = row.find( "td" ).eq( 3 ).text() === "Admin";
        
        $( "#firstName" ).val( firstName );
        $( "#lastName" ).val( lastName );
    
        $( "#dialog" )
            .dialog( "option", {
                title: "Editing " + firstName + " " + lastName,
                dialogClass: admin ? "admin-dialog" : ""
            })
            .data( "editingRow", row )
            .dialog( "open" ); 
    });
/////////////////////////////////////////////////////////

    //DOCTORS APPOINTMENT FORM IN THE contact.html...
       $( "#buttonset" ).buttonset();
       $( "[name='language']" ).on( "change", function() {
           $( "#date" )
               .datepicker( "option", $.datepicker.regional[ this.value ] );
       });
   
       $( "#doctor" ).selectmenu();
   
       $( "#insurance" ).autocomplete({
           minLength: 2,
           source: "search.php"
       });
   
       function checkDate( date ) {
           var isWeekday = date.getDay() > 0 && date.getDay() < 6;
           if ( $( "#doctor" ).val() === "Smith" ) {
               return [ isWeekday && date.getDay() != 2 ];
           } else {
               return [ isWeekday ];
           }
       };
   
       $( "#date" ).datepicker({
           beforeShowDay: checkDate
       }).datepicker( "option", $.datepicker.regional[ "" ] );
   
       $( "#button" ).button({
           icons: {
               primary: "ui-icon-calendar"
           }
       });

       $( "#days" ).spinner({ min: 1 }); 
   
       $( "#doctors-form-contact").on( "submit", function( event ) {
           var date,
               daysValid = $( "#days" ).spinner( "isValid" );
           
           try {
               date = $.datepicker.parseDate( "mm/dd/yy",
                 $( "#date" ).val() );
           } catch ( error ) { } 
   
           if ( !date ) {
               event.preventDefault();
               alert( "Please provide a valid date." );
           }
           if ( date && !checkDate( date )[ 0 ] ) {
               event.preventDefault();
               alert( "You cannot select a weekend or Tuesday for Doctor Smith." );
           }
           if ( !daysValid ) {
               event.preventDefault();
               alert( "Please provide a valid number of days." );
           }
       });
       $(".Newsletter-form").on("submit", function(){
           document.write();
       });
    //////////////////////////////////////////////

    ////ALL PAGES////////////////////////////////
    //TIME RENDERING
       function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
        setTimeout(startTime, 1000);
      
      }
      function checkTime(i) {
        if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
        return i;
      }
    ////////////////////////////////////////////////
       
    ////ABOUT.HTML//////////

    //ACCORDION
    $("#accordion-1-about").accordion({ active:true /*collapsible:true*/ });
    ////////////////////////////////////////////////

    $("#accordion-2-about").accordion({collapsible: false});
    ////////////////////////////////////////////////

    $("#accordion-3-about").accordion({active:true});
    $("#btn-1-about").on("click", function() {
        $("#accordion-3-about").accordion("option", "active", 0);
    });

    $("#btn-2-about").on("click", function() {
        $("#accordion-3-about").accordion("option", "active", 1);
    });
    /////////////////////////////////////////////////

    //ACCORDING NEW TABS
    var newAccordion = $("#accordion-4-about").accordion();
    $("#form-1-about").on("submit", function(event){
        event.preventDefault();
        newAccordion .append(
            "<h4>" + $("#header-1-about").val() + "</h4>" + 
            "<div>" + $("#content-1-about").val() + "</div>"
            ).accordion("refresh");this.reset();
    });
    ////////////////////////////////////////////////

    //PROGRESS BAR
    $("#progressbar-1-about").progressbar();

    var button = $("#progressbarBtn").button().on('click', function(){
        var value = $("#progressbar-1-about").progressbar('value');

        value += 2;
        $("#progressbar-1-about").progressbar('value', value );
        $("#progressbar-label-1-about").html(value + "%");
        if ( value === 10){
            button.button("disable");
        }
    });
    /////////////////////////////////////////////////

    //MENU
    $("#menu-1-about").menu();
    //////////////////////////////////////////////////

    //Menu Previewing
    $("#movie-list-2").on("click", "a", function(event){
        event.preventDefault();
    });

    var index,
    movie = this.innerHTML,
    existing = tabs.find( "[data-movie='" + movie  + "']");

    if (existing.lenght == 0){
        tabs.find(".ui-tabs-nav").append( "<li data-movie='" + movie + "' >" + "<a href='" + this.href + "'>" + movie + "</a>" +
        "<button class=='ui-icon ui-icon-close'>" + "Remove Tab </button>" + "</li>" ); tabs.tabs("refresh");
    }
    ///////////////////////////////////////////////////

    //DELEGATED TOOLTIP
    $("#tooltip-1-about").tooltip({content: "<strong>Hi!</strong>"});
   //////////////////////////////////////////////////////

    //MESSAGE COMPOSER
    /*$("#confirmDelete-1-about").dialog({
        autoOpen: false,
        buttons: [
            {
                text: "Cancel",
                click: function(){$(this).dialog("close");}},
            {
                text: "Yeah, Let's Do It",
                click: function(){deleteMessage();
                $(this).dialog("close");},
                class: "primary"
            }
        ],
        minWidth: 400,
        modal: true
    });

    $("#settingsDialog-1-about").dialog({
        range: "min",
        value: 1,
        min: 0.5,
        max: 2.5,
        step: 0.1,
        slide: function(event, ui){$("#textarea-1-about").css("font-size", ui.value + "em");}
    });

    function loadMessage(){
        var message,
        dialog = $("<div/>").dialog({modal: true, title: "Loading..."}),
        progressbar = $("<div/>").progressbar({value: false});

        dialog.append(progressbar);
        setTimeout(function(){dialog.remove();
        message = localStorage.getItem("message");
        $("#textarea-1-about").val(message);}, Math.random() * 5000 );
    };

    $("#menu-1-about #li-1-about").tooltip({
        content: function(){
            var message = localStorage.getItem("message");
            if (message && message.lenght > 20){
                return message.substring(0, 20) + "...";
            }else{
                return message;
            }
        },
        show: {delay: 300},
        items: "*",
        position: {my: "left center", at: "right center"}
    });

    function deleteMessage(){
        $("message").val("");localStorage.remove("message", "");
    };

    var menu = $("#menu-1-about").menu({
        select: function(event, ui){
            var selection = $trim(ui.item.text() ),
            message = $("message").val();

            switch(selection){
                case "Load": loadMessage();
                break;
                case "Save": localStorage>setItem("message", message);
                break;
                case "Setting": $("#settingsDialog-1-about").dialog("eopn");
                break;
                case "Delete": $("#confirmDelete-1-about").dialog("open");
                break;
            }
        }
    });

    $("#textarea-1-about").on("keyup", function(){
        var message = $(this).val();
        if (message.lenght === 0){
            $("#save-option-1").addClass("ui-state-disabled");
        }
        else{
            $("#save-option-1").removeClass("ui-state-disabled")
        }
        menu.menu("refresh");
    });*/
    //////////////////////////////////////////////////

    //SIMPLE DRAGGABLE:
    $("#simple-draggable-1").draggable();
    $("#simple-draggable-2").draggable();
    //////////////////////////////////////////////////

    //AXIS DRAGGABLE:
    $("#x1").draggable({axis: "x"});
    $("#y1").draggable({axis: "y"});
    //////////////////////////////////////////////////

     //RANGE SLIDER
     $("#spinner-range-1-about").slider({range: true, values: [25, 75]});
     $("#spinner-range-min-1-about").slider({range: "min", value: 25});
     $("#spinner-range-max-1-about").slider({range: "max", value: 75});
     //////////////////////////////////////////////////
 