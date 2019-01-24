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
            return "Congrats " + name + "," + " you are a " + door + "!";
        }
         
        $(".answer").text(congrats(name, door));
        
        if(door === "Regular Door"){
            $(".end").append("<img src= 'https://images.homedepot-static.com/productImages/0a82fed5-3456-4e6a-a906-13fe25e48af6/svn/prefinished-rosewood-steves-sons-doors-with-glass-tofhlect3680li-64_1000.jpg'>");
        }else if(door === "Garage Door"){
            $(".end").append("<img src= 'https://www.overheaddoor.com/Lists/Product%20Collections/windload-thermacore-resi-MAIN-model.jpg'>");
        }else if(door === "Sliding Door"){
            $(".end").append("<img src= 'https://www.milgard.com/sites/default/files/styles/two_columns_grid_image/public/general_cms/photo-grid-image/photogrids_2col_sliding_essence.jpg?itok=ULoooHrr'>");
        }else if(door === "Automatic Sensor Door"){
            $(".end").append("<img src= 'https://4.imimg.com/data4/QO/FE/MY-8390352/automatic-sliding-glass-door-500x500.jpeg'>");
        }else if(door === "Revolving Door"){
            $(".end").append("<img src= 'https://www.preferredwindowanddoor.com/wp-content/uploads/2015/10/Old-Revolving-Door.jpg>");
        }else if(door === "Dog Door"){
            $(".end").append("<img src= 'https://images-na.ssl-images-amazon.com/images/I/81jVa9ozpQL._SX425_.jpg'>");
        }
        
    });

});
