/*leftmenu*/

$('.openNav').on('click' , function(){
    $('#leftMenu').animate({ width:'250px'},50)
    $('#home-content').animate({marginLeft :'250px'},50)
})

$('.closebtn').on('click' , function(){
    $('#leftMenu').animate({ width:'0px'},50)
    $('#home-content').animate({marginLeft :'0px'},50)
})


/*Accordion*/

$('#sliderDown h3').on('click' , function(e){
    $(e.target).next().slideToggle();

    $('#sliderDown div').not($(e.target).next()).slideUp();
})



/*counter*/

let time = setInterval(() =>{
    let now = new Date().getTime();

    let countDownDate = new Date("2024-07-26 14:00:00").getTime();

    let distance = countDownDate - now ;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

    let seconds = Math.floor((distance % (1000 * 60)) / 1000 ) 
    
    displayCounterData(days ,hours , minutes , seconds)
},1000);


function displayCounterData(days ,hours , minutes , seconds){
    let cartona =`
                <div class="col-md-3">
                    <div class="tim">
                        <span class=" days">${days}</span>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="tim">
                        <span class=" hours">${hours}</span>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="tim">
                        <span class=" minutes">${minutes}</span>
                        </div>
                </div>
                
                <div class="col-md-3">
                    <div class="tim">
                        <span class="seconds">${seconds}</span>
                        </div>
                </div>
    `
    document.getElementById('counterData').innerHTML=cartona
}


/*textarea*/

$('textarea').on('keyup',(e)=>{
    let myLength = $(e.target).val().length;
    console.log(myLength)
    $('#chars').text( 100 - myLength <= 0 ? "your available character finished" : 100 - myLength)
})