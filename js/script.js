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
            return "Congrats " + name + " you are a " + door;
        }
         
        $("body").text(congrats(name, door));
        
        if(door === "Regular Door"){
             $("img").attr("src", "https://s7d2.scene7.com/is/image/homedepotcanada/p_1000108114.jpg?$plpProduct$");
        }else if(door === "Garage Door"){
             $("img").attr("src", "https://www.overheaddoor.com/Lists/Product%20Collections/windload-thermacore-resi-MAIN-model.jpg");
        }else if(door === "Sliding Door"){
             $("img").attr("src", "https://i.pinimg.com/736x/a3/b5/30/a3b5303d345b28817d041b77f12e77f7--sliding-wood-doors-interior-sliding-doors.jpg");
        }else if(door === "Automatic Sensor Door"){
             $("img").attr("src" ,"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIWFRUVFxUVFRUXFRYXFRUWFxUXFxUXFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHSYtLS0tLS0tLS0tLS0tKy0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAECAwQGB//EAEcQAAEDAQQDCgsGBQQDAQAAAAEAAhEDBBIhMQVBUQYTIlJhcYGRsdEUIzJCU3KSoaKywRUzYoLh8AcWc5PCQ7PS4jSD8VT/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAC0RAAICAAQEBQQCAwAAAAAAAAABAhEDEiExEzJBcQQUIjNRQmGBwSNDUpHh/9oADAMBAAIRAxEAPwDly0jlHv6U7StJaqH0tY6tRTszoYlMVAu6FIJ2Kh1IJg1TFMosKGCkFIUzsUxROxFhRBOFZvDticWd2xFjoqSV3gztil4M7Z2IsdFCdXiyu2J/BXcVFhRnSWjwV3FKfwZ2wosKMyS0+Cu4pTGzO4pRYUZklp8GdxSmNmdxT1JWBmTOWjwZ3FPUVF1ndxT1FOxUZymVxoO2HqKiaJ2HqTsVFYSUzSOwqJYUWFECmcpXVFwTsVECmKchRSsKGKg5SJUSixkEkkkrALuaokLQ5iqLVBSB9sJGWZIGU6lktNeo1xAd8IW+1N8n1x2LFbRw3c6TY0Z/DqvG9ze5S8Pq8f3N7lBzFG4pzMdGuna3nzz8PctdlrPLmgvOY2Y48yFNEIlot01GD8Q7U8wUX169S++HuADiABGHuTCvU9I73dyjaDw3+u75inahsKJitU9I/rHcnFep6V/WO5MAnARYFtDf3m6x9Rx2DE9QCnaGWimYqOqsOxwjtCqZgZBgqdSo52LnF3OSe1FsKIb9U9K/rHcn3+p6R/WO5KEoRYC3+p6R/u7kt/qekd7u5KExhFhQ5tFX0jvh7lHf6vpHfD3KUKJCLChjaKvpXfD3K23mpvhDXuAwhoDTqG0Sqw3Fa7bUcysXMJa4EQQYIwGtFgYaorNwc57fWY0H3tVZrVPSH2Wdy22231axmrUc8jK84mOtZCEWBHfanH+Fvcm3ypx/hCnCUJ2KiFN77zQXAgmDwQo1qrwTi3Mxwf1V1ATUZ6w7Cq7Q3hO5z2osDMaz/wAPUe9QNV2xvv71aGKbqCdiMpqu2DrKjvjtnvPctJoKIpozAUX3cX4v0SV91JFgdG5iqcxbLqiWK2iUwRaWYs9c/VD7WOG7nKK6SY8XCwSQXHIkIaaFUkksdJxkNKiSKTM11K4trbFU4jvZKm3R9T0b/ZPcoysqwdcW7QjZr0x+IfVXt0XU9G/2XdyM7n9EQ++9jmlrgQSCBkZzVRg2wckgHaHeMePxv+YqTQuns+51jwXPpOLi55Pljz3RhzQtLNzVL0Tut/etvLyetoy4yWhyQCkGrrxuapejd1vUv5apejf1uS8tL5QcaP3OPAUg1dcNzdL0b+tyf+W6XEf1uR5eX2HxonI3UiF2NTc7ROVNzeZz8euVWdzVPiv6z3IXh5hxYnIq+hVYAQ6k151F1+RzXXALpjuap7H9f6KP8r0/x9f6J+XkLjI5QpiF1f8ALVMa3jpH/FRO5unxn9Y7kn4eQ+NE5ik3hDnHar9Lt8c/nHYEedoCmzhXnkggiS2JvDPgq216Cpve55c4EnGCIyjZyJcGWw+JHc48tTXV1g3NUzhef1t7kz9zLGxJfidre5Hl5i40TmaVjc4SBh0KXgL+L7wuvs2iaTWxedntb3J61gpDzzzS3uT4DFxTkLPZCKtORHCHYVTamcJ3Oe1dJWszRUpEFx4YGPqk7EO0jo0C+68dbogaypeG0hqVgJrcQry1QYMQtBasiyksVJatZaqnMQhGYtSV11JVQWdHCQCsIUIXRRmZ6tpYyA8xMxgT2DlTs0jR43wO7ll0qyXUx+F3aFjNOFEpU6GlYdZpGjtPsP7lc3S1AZu+B/cubvxgVa0gpcQeQ6elpiznJ8/kf/xRKyWim/Bsn8jwB0kQFyOiLON/pn8S6zRNscXVGGIvkCBqGXYtYPMRLQsp6Socbk8h+Y/Kr26So8b4X9yB6D0m4teCWgNeQODqnXjyo3QtLj5zfZ/VUtQbotGkqPH+F3crBpOj6QdTu5MKzuM32f8AslWtT2iQWH8v/ZOvuJNMl9qUB/qD4u5QOn7IMDaKYPrLBZ9MPe8U3NZBkGGmcBOGPIuM3S0Jr1SBkcfZCxniZY2jWMLdM78bprF/+qliYHD1jMc6vZpuzHK0Uz+deOby2ZgA7V024KkDaXCQ7xbvmZtCmONmdUU8KlZ6H9p0fTM9tONJUfTM9v8AVVU7YY8hnV+qmLYeIw9C6srMM8SY0lR9Mz+4O9L7Qo+nZ/cHeh1p05dN3eWE9X0UaWnQfKosbskz2NU30L6WEjbKJw35hnCN8GM9KY2qi3g76wEajUaCOiVhtdpBa070wS5g5RLwNiP2YC63gjGBOvPmVUZylQLNvo+mp/3G96rdbKPpaf8Acb3rLpyuG1KjcschzBCKEXpIGR+iyliJOi4xbVhx1eif9Sn7TVU+pS47Paag7mMk4A+VqGvAe9VuDCDgNmQ42PuQsRDcQo8UycC0nVBbM8iE2ynwXNESZGY6ErKxu+UjAl1QxgMgx/6ohUqta0FwmRqE6pVaNE7M5H7NqA5DrCm6yu2e8IzV0tZzrPsnuWWrbKJ1/Ce5ZrCj0Y8zBxonYqXUTsW2paqO0eye5V7/AEto6j3I4aDMzHvJ2JLVv1LjBJGRCzBcqEKwqIWgA/SI8Yz1D2qmoxaNIDxrf6f+SrcFlNalR2B9dmKiAtVZuKqurmaNUatCOO/08fO+hXR6BrzUqAx5b45YLlz+hR4+nzn5Suj3N0QRVfIBbVfhrIMjALbCei7mclr+APop4DXA66jz3diKULcGnEkierHXsGSzbm2gEE1GsvOqBxdEAYRnznqXR6TfQFleyjUbEgyXNL3FzgcAIgLKTeZmqWhkpaRpH/Ub1haRaaZHltP5guQsry1xxF3Xn1hE7JfN8k3mk8DDCJEQYCyeK/g1WGn1N9nYN/aBECT8JXM6aqEWmrHG/wAQjejjFpptgefOGMhhXK7qKzha6sOIBf3BWnmwfz+iWqxK+xlt1PG8BnmIyPIuh/h0JtD8B92dX42IPSsodBFsp46iHA9IhdVuFshbWcTWZU8WcGzI4TcTIRgJZ0PEbys1WS3iS2cZOrljFXG0FgdlJLiB1Yqmy6OIm9Ro1JJMuFYZknzRCJvpsbgLJZ4gedVByx+qJYrv/oowAGkarjgYMYzCpdaboBDWjaf0R23uawAmxU3bYfVy6UNttrpEEeDtpnE4OcZxzM5ZBRHFadlONoawW51R2I4N6lA1g32x9UebpZxqtpARD2tnkvCelDdH6Jc2nSrktio5sNEyIeM+pGaWimCoypfxNRro1eViMtsLojiSy3fUwlCN7HP6drHf6gOpxWGpUjXqRLTtnbv9ThRwnHqQaqRkCZ5Vzzk8zNYr0oia+OfR0qDXYZfuP1UQ0SZO3rhJwGEO/f7CVsdGvR5BrUsZN8/7b8kQtwFxpPFMcuA1ofowDfqWPnO/2nrZpWLjPV+gXZD2TnlznJOGPSkZVzG8Ic60mgoimEmga5M1kgLe6gq208FSTJtA2qyCkrLSOEejsSXQloZs6kpgnKTM1VDMGkPvh/THzFVuU7efHfkb2uVbisprUcdiqoMVWQtjdEPcC+8IMOGJwA1J/sh72EtIGzhOw51k8KTN1k/yG0M3x9PnPylGdzgE1Drl+M6sdSE6Gb45nOflKK7nmi7UdrAfHTM9gRDp3M5bvsDbDBaxpwl9STOqMP3yrfaqTeCSLsEtMQdWWOrlVeirO00mkgEhziMBtK01wHSHY4nPHzjt5Fy4j9TN47GOhRY6bxIx4rcIIgDFbqNkpwGtxMg+S6YwwwB1rG2xtzuty4rc4nWEQe4kGT7gOwcizvUo22CwNFUOjFkzg4QXNIMyBtXA7p6ZNqrH8btWwwu50TTio0ydevDyT3Bc7pJk1qv9R/zFdH9P5/RH1/g5S4WuxEEHWu2/ho6a1X+n/m1BLbS4PT3roP4cUwKtWOIPmCnw/uorE5GPZa7w5w8IeCDg2/U27BhkiVlNR75dUe0DOHvETkdaF6FDqt94aJ2gxgJGI5gegLuRvNnuNeWyS67jMkQ0TGQwGaFC2FkTo68ATXrhuX3hF6BzTqQ6y6CoVCS5783jNpgNwOJCIaStcFokNGLvKE4gHPmKC6Ntplwa4GHPOBGLZnAfvJNwXwSpMtLaVOoKDHvLmuaeFkAXZDIbdSvpWylvzGib1+Dsm99ChL8bW0zOLB2o5oyyWffL7qsOvkhuAM3tmJI5Qq1SVfInTb7HN6arN3+phiHO65OfuWSvQk7THaJxO3FFtLU7Nv8AVuvvOL3ANBiXG5AxG0v6gsFRtW+6pTpVJPm8GDhkcZ1KMkpSdI0VUtTHSs4NyGyTIIOt2zqHarfAZc90gNaGmJx4Rj6EqD7RUa4VAG3g+XNOAEi6XeUSM8u5UVK7uGRBMtEgkThGHJnilKLjoxSNthotbWpRi68+dgG9Pgc6v0rSBoXiPJp56xICyWGs7wimwtADTUxBJBIpuynnKs03ay2i1gAIewA44jAata6Y+yc/1nJaIb4z97Qj0ILokeMRyE8LYWJuVOCzEYLY8LKcloQgbaBwj+9SSnXHCKdbJaEtnQlKnmmUqeaBg3SP3x9RvaVTKutomu71WfVVOasMTcuOwSstqllwkDJo5edat9bTY669rtgkYzhhCAOzSS4rSDh2bNEnxzOc/KUQ0BV4FQfgce1DtF/et6flK2aEeLjxr3t5noSw+nccupp0R9y3nd2lWuGJ5z8xWXRXksE+VeEcuOKIvsTzMEfsrjxY6s3i9Ae97WsJcYA+oA+qpZpQESGEiYm8OX99CJ07KWTeewG6bpLGvBxaCLrtcTjqxWR76GEgkzmLjQc9QCUYaWDl0LdzmkBUq3QIgHWDqKwW77yp67/nKt3Nv8eMvJOQg5RiqbWZe/13/MVvKKWFp8/omPP+DFahlz/Qo3/D7B9X1G/MUCtbsudFdwNV160S2AGsg7fKUeH9xF4nIwZozSLabMQ7ywMAIIgm7jzFFdL6WMMLgKYeyWtNNrQQ9zYyzIbjPIm0foumbwIPBc0kAeVwNYPOQsO6S8PA5pFt1o1NF8Xr3m6zOvammknTFreo+m7aHVQG1A4XWnxQPAmduZE4nJLR7rsFr34Y5YAxGrIprG0MYHAvYXC64zBIByO0YDBWNtNMAk1iDsLW3c+URMQcAs5YqWmp0R8O2rtBrR9ovVGbbzD8LoU7IXOtbTqDnCTAmHZA7eRYtD1PGMyi8CMcfIeco5ETpWRlO0MN4EueTtIJY9xjZl7l0YcvSu5y4kKk19gDb7QBanOdMCq7HkDzqhEX6caXcF8AzJ4WJ1Tgh2kqVImo/fgH75UBplriQQ868oxWGhTgFxaSPNlpAOImDkcEPFyNoWS6Yada6bqNRsC9iTntAOJGBnUg9O0EkAvDRAl12c8ZgDZCxWau+89rfJc4FwwmAZAmJVppucSY2RBGwJSk5agkloE9D1CazJJIh+oDzCNSjumc67SDTAuGdmQhS0VXqX2Mc43GtqFrTEAxjHWo7o677tNgJuFt5w1EgQPqtl7Rn9YD0KDfE4rfpcm6LryzHMRPNiseiPLRuEYXKLE3M9GbjZMmBjrOGaqK1vCyuVszRiqNxKSvA+vamW8VoJhVTpnFVypUs0hmC0Hx7/VZ9VF4TVj45/qs+qk5yxnuylsUuCZTc5Ne96waNEadHfeN6ewq7Q54FT+i76qixu4Y6fcFbos+Lqf0j9VpDp3FLqWUqwbTY6MQD2q37SqRHB6QsVR/ApjaDqTeEj9hc+IlZrBuiy3V31QA4xBngyDzKhtE4Abcy505FP4SMOTk7VIWhuHScuQqEkVZr3NUS2tJPmu+ix2x3DfifLfr/EVs3PVgasA+ae0LFaH8J3rO+YrSWmCu4lz/AIKajZiUb3IgDfj+Fv8AkgNV+SM7ln8Gufwjsep8PXEQ8XkNdj0oJxptznzk26XSFO0CkJI3rBsA7WjEkbEGoVZmMVGvZ6oImkcRhjOsY4cupJaLQbJ28XmhoJgDCZ5cSh32ZIxPat9etdi8wiBB5e5Qp21uGB5eXuU5UPMye5mnVZaKbX1LzZdA1YMJHuKzaAeftAY4b5VOeBwetuhbUHWpjQDm8z/64hCdzrj4cPWqn4XwuqC9Me5jKTt9h9Ih2/VS18E1HmDiDwjyYKNGvUIul2A1SbvQMlO11qZqvkHynahnexnkzV1tFJt0wRLZw28yiWHbbL4miQ1B8YyFfTrEAAEYciH2aq2MzGvLkyVRtMDMzPRClWg3D+jqpNTE5MqdjVVulebzB+AoSGuqt4LwwgOMkkAwW4YbUS3U/eN9T6ldH9Jl/YY9Dnh/vlRxA9D+Uf3qKNSngr0meLzDPWV60VCszirkQmNSy6T2lJLR5lgPK75iktlsJs2p6ZxUJT0zikMw1D45/MzsUnKpx8c/mZ2FWuWM92XHYrKcBMpNzWLNEdfYtztOAZdO2do2BWt3P02AtAMFt046tnIili8kK6qcFV0TRwO6CzNpua1swBrQZxR7dWfGDm+q540icz0LCe5rHYiauzFOJ18vYpCkpCnyrM0CW5g+N/Ie1qz1Tiec9pV+50RVPqntasL6ok46z2rWS/iXciPuPsNWjBFtzpAp1/V/xeglWq3aEV0DUG9V4Pm/4uUeH9xFY3IDLKQOvk+q01bSCWkzhHF2jkWFpG0daT3DaOtZ0yi63VQT/wDNnIqWQq6h5R1p2ZakNMApufA8KYdgf8qE7myRbROXjCOTAyPei2gf/IB/C7sWHQX/AJAPI/sK6sPaPcwnvLsCjXvVnCDg52O3hLbph925eyuhD6llkkgRJJ6yqLZZHGLxJgAQZ70OS1GlsbqLgW8EyD++grZo7RD7Q4tpkC6JlxPNqC56nTueQ8tJzGIBXZfw2qOdUqyZgM18rlKihttBKzbjXtbDng4OAiRiYjHoUd0OgbQ919jQ4BsReAOZOuNq7ukqLa7glbX6cvQy62eW6MvXjEAjOZO1EvGcZvsnvWHRflO/e1EyrwuUjF5ih5qbW+ye9Z3X9reo962VDgsxVMmJdo1sUwNhd8xSTWN3AHO75iktVsQ9zSCnYcVCUmnFSUYifHP5mdhVrlRPjXczfqrnFZT3NFsQJTtdj1KmrWAVLHlzhqEhYs0R6rZDgFZWdgqLK7AKdZ2CoRxO6eN96PqUGlFd0x8b0DtKE3ljPc0jsOkXJByyVa7p8iRyqaKsKbnnHfidV0wPzNQqo5948I5nU7bzIlufqk1DLLvBOMcoQg1cfup6M/ctZr+JdyY87I1HVD53uPcjmgy4WevJxgx7B5EIFqb6AdRRfR1cGhWIZdABkbeCUvDx9f8AsMV+kFse7aPclwp833K2na6fEI6SrRWpHK97RWJZgfexwb8KhLtjfh71tqkTwZ6XfqqqjmjW7rSsZt3PvO/YgDguyjZyFZNBOIrCQPJccFr0FVbfMEzcdnsWXRdRt/CZunNdMNo92Yz+oppqy2My5lXQrMMAZwrqplZWXQPq2ca4C6f+HlC6+r+SPiXPuC6jcUyTUxIxblhtVQYpbHdUysukncB3MexaGZIfpd8U3n8J7FsZHnmhzmiZKE6JeMcQt5qBXhcpnicxOocFRKVWsIzCoq1YaSBMAmNqcgii2zv4ISQ2jbDdHAOQ1FJaZ0U8KQeBTtOKgCouqhuJQZmR7/Gu9Vv1UK1o1BVVYc4uvRkIjYk2mOOFnJNvQ0QwbrKuojhDnHaotYdretX0bO68Dwcxr5Vm8ORWZHo1FxAECctYVtY4KqzHAKdYoA4fdKfHdA+qDuK6HS7mb4b0ThmFgLqGu57lXAvWw4laUc1bLe4G6w5ZnPoVA0hV2jqC6jwey8Wn1hP4DZj5rOv9VSwELiGDcxanOqOvam/UIQ7SDwSMMMMv1XV0LNRpklgAJwOM4da5gaOBxlyWLGMYpMqDbbZW3Sb+TqPejejLWTZ6zjGEx0NHehX2YNp9yM6Gsjd7fTJMOJB1HEBRgqObQeI3lAn2m7YOspfajuKOv9F0R3N0Nr+sdyj/ACxR4z+sdyvyxHGAH2ueKOv9Ex0t+Adf6LoHbk6XGf7u5VnclT9I/qCPLD4xk0Fb7738GIpuOfNyLNoq2BzncGIYT2ciLWXQraBeWvJvMc3EDDJYqOihSDnhxMsLYiM8dvIq4VJfYh4l2CW6VaP9PsW2hag9t4dWxD/sp3GHUr7LYnMMyCDmMVyuMehumzVeXV7ixg88o7Fyt1dduKbwHet9AiK1CT0OracEM0++KNT1XdiJEYILugbFB4kngkY80LUzPHLc43zCymodp610lbRwJkhqodotuxqai0thtoAtqkEEFHbFpZ3kvx2EZqp+iW6oCi3Rjh5w96pJibQXbkOYdiZUuJSWpnQYrW0DAYnbq/VY6jyczKC2Wxkm9UJk6p7e5E70JFVRN7oGR6BiqDaxxX+ypl6V5IZW23N2OHO0rRZrcy83E5jUdqi1yuoeUOcdqKA9SsxwCeu5VWY8EJ67sFkBw26O0gViC4DAa4Ql1oBycOtbN01Nrq5loJgYkIQ6zU+KFaGaDU5QqHxyFVGy0+L2qBszdU9ZQMm9g4o6lS9/KmfQG13WVSbOOM7rUNDTLBWdqJ6yrWVXcZ3Q4j6rKKP4ndak1h4xQlQN2bm2l3Hf/cf3q5lqf6Sp/cf3odcPG9wTi9x/cFVv5EG6dtf6R/8Acd3rQ21u47/bPegDb/H+EKYNTjj2VSk/kVB+hajMkl0gghzpGatdaqeW9NXOsq1B57fZWzf1SmyXFBJ1ppeiHWVE16fox7RQ51Sc1EVDtSzBlCe+UvR/EV0u5UtuG6IF7KZ1BcRvi7Tch91O1xUyeg6OlJQHdPUii9GnOXN7rKnijykdqhAcc6qeTqVZcf2FFyrlaWwpEnOKiH8vuUKjlQ5yVsKNJef2ElRf5ElVk0XkqcpJIZRE5qYSSQwJNVtLMc47UkkgPULPkEq6ZJZAefbpPvzzBCikkrGiJUUkkMZWVUSnSSAgClOISSSA1Qk8J0kxCapNSSQMTgkkkmIRyTtSSQBYF3G5D7kc57UkkS2EHnLl9133fSE6SSEca9VFOkqKKiqXJJJCK5TJJIGf/9k=");
        }else if(door === "Revolving Door"){
             $("img").attr("src" ,"http://www.slate.com/content/dam/slate/blogs/the_eye/2013/11/07/131107_EYE_revolvingDoor.jpg.CROP.original-original.jpg");
        }else if(door === "Dog Door"){
             $("img").attr("src", "https://smhttp-ssl-21800.nexcesscdn.net/media/catalog/product/cache/1/image/650x/9df78eab33525d08d6e5fb8d27136e95/i/d/ideal_fast_fit_patio_pet_door_doggie_door_1100.jpg");
        }else{
             
        } 
    });

});
