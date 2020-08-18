  var score=new Array();
        var array=new Array();
        var image=new Array("oni4.jpg","oni5.jpg","oni6.jpg","oni7.jpg","oni8.jpg","oni9.jpg","oni10.jpg","b4.jpg","b3.jpg","b2.jpg","b1.jpg","b0.jpg");
        var x="";
          var counter="";
          counter=0;
        function makeshapeappear()
        {
                x=Math.floor(Math.random()*12);
                 var y=Math.floor(Math.random()*940);
                var z=Math.floor(Math.random()*700);
               document.getElementById("oni").src=image[x];
                document.getElementById("oni").style.display="block";
                document.getElementById("oni").style.width="240px";
                document.getElementById("oni").style.height="240px";
               document.getElementById("imageshift").style.top=y+"px";
             document.getElementById("imageshift").style.left=z+"px";







        }
        setTimeout(makeshapeappear,Math.random()*500);
       document.getElementById("oni").onclick=function()
       {
            if((x==7)||(x==8)||(x==9)||(x==10)||(x==11))
            {
            document.getElementById("oni").style.display="none";
            counter++;
             document.getElementById("time").innerHTML="<h1>"+"Your Score is-"+counter+"</h1>";
            makeshapeappear();
             }
             else
             {
                alert("Game Over!");
                document.getElementById("time").innerHTML="<h1>"+"Your Score is-"+counter+"</h1>";
                counter=0;
             }
       }
       document.getElementById("end").onclick=function()
       {
                if((x==7)||(x==8)||(x==9)||(x==10)||(x==11))
                {
                   alert("Game Over!");
                document.getElementById("time").innerHTML="<h1>"+"Your Score is-"+counter+"</h1>";
                counter=0;
                }
                else
                {
                    document.getElementById("oni").style.display="none";
                     counter++;
                         document.getElementById("time").innerHTML="<h1>"+"Your Score is-"+counter+"</h1>";
                     makeshapeappear();
                }

       }




