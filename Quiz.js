class Quiz{
    constructor(){}
   // play(){

   // }

    display(){
        var title=createElement('h2');
        title.html("My quiz");
        title.position(100,200);

        var input=createInput("Enter Your Name Here");
        input.position(130,260);

        
        var input2=createInput("Enter Correct Option");
        input2.position(100,160);
    }
}