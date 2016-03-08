$(document).ready(function() {
            // console.log to let me know the document is ready.
            console.log('I\'m ready to go')
            
// 1. Make a button appear on the page when it's first loaded. The button cannot already be in your html. When the button is clicked, you should display an Alert box with any (nice) message.
            
            $('body').prepend('<button>Click me!</button>');
            var firstButton = $('body button').first();
            var firstClass = $(firstButton).addClass('firstclass');
            $(firstClass).on('click', function(){
                alert('You found me!');
            });
            
// 2. Make a button and text box (you can just put them in your HTML). When the button is clicked, display an alert with the message that is typed in the text box.
            
            $('#button2').on('click', function(){
                var info = $('#myValue').val();
                alert(info);
            });
            
// 3. Create a `div` in HTML. Using JavaScript, make it change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
            
            $('#div').on('mouseenter', function() {
                $('#div').addClass('div1');
            });
            $('#div').on('mouseleave', function() {
                $('#div').removeClass('div1');
            });
            
// 4. Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red. Once you get that working, try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working).
            
            $('#para').on('click', function() {
                var colors = ['green', 'grey', 'blue', 'pink', 'yellow', 'red', 'purple', 'orange'];
                var num = Math.floor(Math.random() * 7) + 1;
                var randomColor = String(colors[num]);
                $('#para').css('color', randomColor);
            });
            
// 5. Add a button and an empty div. When the button is clicked, add a `span` that contains your name to the empty div.
            
            $('#forEmpty').on('click', function() {
                $('#empty').prepend('<span>My name is James!</span>');               
            });
        
// 6. Create a button and a `ul` in your HTML. In JavaScript, create an array containing the names of your friends (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an `li` to the `ul` on the page.
        
        var friends = ['Me','Myself','JR','Betsy','Fluffy','Francis','Francois','Spirit','Cheyenne','Kiante'];
            $('#forList').on('click', function() {
                for(var i = 0; i < friends.length; i++){
                var line = $('<li></li>').text(friends.shift());
                $('#ul').append(line);
                break;
                };
            });
});


         