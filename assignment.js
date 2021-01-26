  
  
  function kilometerToMeter(kilometer){
     var meter=kilometer*1000;
     return meter;
 }
 var result= kilometerToMeter(50);
 console.log(result);




  function budgetCalculator(watch,phone,laptop){
      var sum=watch+phone+laptop;
    
      return sum;
  }
  var result=budgetCalculator(50,100,500);
  console.log(result);




 function hotelCost(day){
     var rent=0;
     if(day<=10){
         rent=day*100;
     } else if(day<=20){
         var first=10*100;
         var left=day-10;
         var second=left*80;
         rent=first+second;
     } else{
         var first=10*100;
         var second=10*80;
         var left=day-20;
         var third=left*50;
         rent=first+second+third;

     }
     return rent;

 }
 var totalRent=hotelCost(13);
 console.log(totalRent);




