//var definition
            
            var fname = window.prompt("Please Enter First Name: ");
            var num = window.prompt("Favorite Number?");
            var piValue = 3.1415926;

        

            //JavaScript
            if (fname != null)
            {
                document.getElementById("text").innerText = "Welcome, " + fname + ".";
            }
            if (num != null)
            {
                document.getElementById("text2").innerText = "Favorite Num: " + num + ".";
            }
            
            

            
            function circle(radius)
            {
                this.radius = radius;
                this.area = function() 
            {
                return piValue * this.radius * this.radius;
            };
}

var c = new circle(num);

            

document.getElementById("FavNum").innerText = "Area of Cirlce: " + c.area().toFixed(2) + ".";
        