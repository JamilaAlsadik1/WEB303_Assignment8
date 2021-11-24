$(document).ready(function (){
    getJsonMethod();
    var aTomArr=['a','b','c','d','e','f','g','h','i','j','k','l','m'];
    var nTozArr=['n','o','p','q','r','s','t','u','v','w','x','y','z'];
    ///////////////////////////////////////////////////////////////////////////////
    //first try to search but Iam facing a problem with removing yoello background 
    // $('#name').keyup(function(){
    //    //input searching and highlighting
    //     var rows=$("tbody").find("tr");
    //     rows.css("background-color","white");
    //     var info=this.value.toLowerCase().split(" ");
       
    //     $.each(info,function(i,v){
    //         rows.filter(function(){
    //             if($(this).children(':eq(0)').text().toLowerCase().indexOf(v)!==-1){
    //                 $(this).css("background-color","yellow");
    //             }
    //             else{
    //                 rows.css("background-color","");
    //             }
    //             return $(this).children(':eq(0)').text().toLowerCase().indexOf(v)!==-1;
                
    //         });
          
    //     });
    // });
    /////////////////////////////////////////////////////////////////////////////////
    //second try to search by input value and it works fine :)
    $("#name").keyup(function(i){
      
        $("tbody tr").each(function () {
            let nameCol = $(this).children().first().text().toLowerCase();
               if(i.target.value === "") {
                   $(this).css("background-color", "");
               }
               else if(nameCol.includes(i.target.value.toLowerCase())) {
                $(this).css("background-color", "yellow");
            } else {
                $(this).css("background-color", "");
            }
        }); 
    });
    /////////////////////////////////////////////////////////////////////////////////////////
   //click event for A-M button 
    $(".btn.a").click(function(){
       
        var rows=$("tbody").find("tr").hide();
       $.each( aTomArr,function(i){
           rows.filter(function(){
                return $(this).children(':eq(0)').text()[0].toLowerCase()==aTomArr[i];
            }).show();
           
           
        });
        
    });
    //////////////////////////////////////////////////////////////////////////////////////
    //click event for A-M button
    $(".btn.b").click(function(){
        
        var rows=$("tbody").find("tr").hide();
       $.each( nTozArr,function(i){
           rows.filter(function(){
                return $(this).children(':eq(0)').text()[0].toLowerCase()==nTozArr[i];
            }).show();
        });
    });

    $(".btn.all").click(function(){
        $("tbody").find("tr").show();
    });
    });
    //////////////////////////////////////////////////////////////////////////////////////
    
    //retrieve the data from json file 
     function getJsonMethod() {$.getJSON("fictionalCharacterBook.json",function (data){
    
         
            var fictionalCharacterBook_data='';
            $.each(data.fictionalCharacterBook,function (index,value){
                fictionalCharacterBook_data+='<tr>';
                fictionalCharacterBook_data+='<td class="name">'+value.name +'</td>';
                fictionalCharacterBook_data+='<td>'+value.year +'</td>';
                fictionalCharacterBook_data+='<td>'+value.book +'</td>';
                fictionalCharacterBook_data+='<td>'+value.otherName +'</td>';
                fictionalCharacterBook_data+='</tr>';
                $('tbody').append(fictionalCharacterBook_data);
              
               fictionalCharacterBook_data='';
            });

             var aTomArr=['a','b','c','d','e','f','g','h','i','j','k','l','m'];
            var nTozArr=['n','o','p','q','r','s','t','u','v','w','x','y','z'];
            var arraya=[];
            var arrayb=[];
            //grabing the first letter of the namae record and store it in arry
            var firstLetter= $("td.name").map(function(){
            
                return $(this).text()[0].toLowerCase();
              }).get();
            //   console.log(firstLetter);

            //comparing firstletter array with A_M array and add the length of the matching result in the A-M button 
            for(let i=0;i<firstLetter.length;i++){
                for(let j=0;j<aTomArr.length;j++){
                    if(firstLetter[i]==aTomArr[j]){
                        arraya.push(firstLetter[i]);
                    }
                }
            }
            $(".btn.a").append(" ("+arraya.length+")");
             //comparing firstletter array with N_Z array and add the length of the matching result in the N-Z button 
            for(let i=0;i<firstLetter.length;i++){
                for(let j=0;j<nTozArr.length;j++){
                    if(firstLetter[i]==nTozArr[j]){
                        arrayb.push(firstLetter[i]);
                    }
                }
            }
            $(".btn.b").append(" ("+arrayb.length+")");
            $(".btn.all").append(" ("+firstLetter.length+")");
     });
    
    
          
   }
  