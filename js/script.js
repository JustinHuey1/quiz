/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var door = "";
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = 0;
    
        if(q1Result === "Winter"){
            totalScore = totalScore + 1;
        }else if(q1Result === "Fall"){
            totalScore = totalScore + 2;
        }else if(q1Result === "Spring"){
            totalScore = totalScore + 3;
        }else if(q1Result === "Summer"){
            totalScore = totalScore + 4;
        }else{
            totalScore = totalScore + 5;
        }
        
        if(q2Result === "Read books"){
            totalScore = totalScore + 1;
        }else if(q2Result === "Play games"){
            totalScore = totalScore + 2;
        }else if(q2Result === "Play sports"){
            totalScore = totalScore + 3;
        }else{
            totalScore = totalScore + 4;
        }
        
        if(q3Result === "Sloth"){
            totalScore = totalScore + 1; 
        }else if(q3Result === "Owl"){
            totalScore = totalScore + 2;
        }else if(q3Result === "Cat"){
            totalScore = totalScore + 3;
        }else if(q3Result === "Dog"){
            totalScore = totalScore + 4;
        }else{
            totalScore = totalScore + 5;
        }
        
        if(totalScore <= 5){
            var door = "Regular Door";
        }else if(totalScore > 5 && totalScore < 7){
            var door = "Garage Door";
        }else if(totalScore >= 7 && totalScore < 9){
            var door = "Sliding Door";
        }else if(totalScore >= 9 && totalScore < 11){
            var door = "Automatic Sensor Door";
        }else if(totalScore >= 11 && totalScore < 13){
            var door = "Revolving Door";
        }else if(totalScore === 13 || totalScore === 14){
            var door = "Dog Door";
        }else{
            
        }
         
        function congrats(name, door){
            return "Congrats " + name + " you are a " + door + "!";
        }
         
        $(".result").text(congrats(name, door));
        
        if(door === "Regular Door"){
            $(".end").append("<img src= https://images.homedepot-static.com/productImages/0a82fed5-3456-4e6a-a906-13fe25e48af6/svn/prefinished-rosewood-steves-sons-doors-with-glass-tofhlect3680li-64_1000.jpg'>");
        }else if(door === "Garage Door"){
            $(".end").append("<img src= https://www.overheaddoor.com/Lists/Product%20Collections/windload-thermacore-resi-MAIN-model.jpg");
        }else if(door === "Sliding Door"){
            $(".end").append("<img src= https://www.milgard.com/sites/default/files/styles/two_columns_grid_image/public/general_cms/photo-grid-image/photogrids_2col_sliding_essence.jpg?itok=ULoooHrr'>");
        }else if(door === "Automatic Sensor Door"){
            $(".end").append("<img src= data:image/jpeg;base64,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'>");
        }else if(door === "Revolving Door"){
            $(".end").append("<img src= 'https://www.preferredwindowanddoor.com/wp-content/uploads/2015/10/Old-Revolving-Door.jpg>");
        }else if(door === "Dog Door"){
            $(".end").append("<img src= 'https://images-na.ssl-images-amazon.com/images/I/81jVa9ozpQL._SX425_.jpg'>");
        }
        
    });

});
