var jop = "students";
var money;

switch(jop){
  case "teacher":{
     money = 10000;
     break;
   }
  case "principal":{
     money = 15000;
     break;
   }
  case "students":{
     money = 6000;
     break;
   }
   default:{
     money = 0;
     break;
   }
};

document.writeln( "" );
document.writeln( "현재금액 : " + money);

document.writeln("muliplation theory");
for(var i =1;i<10;i++){
  for(var j=1;j<=10;j++) {
    document.writeln(i+" x "+j+ " = "+ i*j);
  }
  document.writeln();
}
