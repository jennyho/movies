$(document).ready(function() {
    animateText();
    selectData();
});

function animateText() {
    $(".source").text("Book");
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Short Story");
    }, 1000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Comic");
    }, 2000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Graphic Novel");
    }, 3000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Game");
    }, 4000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Magazine Article");
    }, 5000);

    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Musical");
    }, 6000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Opera");
    }, 7000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Play");
    }, 8000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("True Story");
    }, 9000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Short Film");
    }, 10000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Toy Franchise");
    }, 11000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Television Show");
    }, 12000);

    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Disney Ride");
    }, 13000);

    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Original Film");
    }, 14000);

    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Legend");
    }, 15000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("FairyTale");
    }, 16000);
    
    setTimeout(function() {
        $(".source").text("");
    }, 17000);
    
    setTimeout(animateText, 17000);
}

function selectData() {
    $(".all").click(function(){
        $(".data").css("opacity", ".6");
    });
    
    $(".book").click(function(){
        $(".data").css("opacity", ".15");
        $(".d1").css("opacity", "1");
    });
    
    $(".comic").click(function(){
        $(".data").css("opacity", ".15");
        $(".d2").css("opacity", "1");
    });
    
    $(".fact").click(function(){
        $(".data").css("opacity", ".15");
        $(".d3").css("opacity", "1");
    });
    
    $(".game").click(function(){
        $(".data").css("opacity", ".15");
        $(".d4").css("opacity", "1");
    });
    
    $(".mag").click(function(){
        $(".data").css("opacity", ".15");
        $(".d5").css("opacity", "1");
    });
    
    $(".music").click(function(){
        $(".data").css("opacity", ".15");
        $(".d6").css("opacity", "1");
    });
    
    $(".play").click(function(){
        $(".data").css("opacity", ".15");
        $(".d7").css("opacity", "1");
    });
    
    $(".real").click(function(){
        $(".data").css("opacity", ".15");
        $(".d8").css("opacity", "1");
    });
    
    $(".short").click(function(){
        $(".data").css("opacity", ".15");
        $(".d9").css("opacity", "1");
    });
    
    $(".toy").click(function(){
        $(".data").css("opacity", ".15");
        $(".d10").css("opacity", "1");
    });
    
    $(".tv").click(function(){
        $(".data").css("opacity", ".15");
        $(".d11").css("opacity", "1");
    });
    
    $(".comp").click(function(){
        $(".data").css("opacity", ".15");
        $(".d12").css("opacity", "1");
    });
    
    $(".disney").click(function(){
        $(".data").css("opacity", ".15");
        $(".d13").css("opacity", "1");
    });
    
    $(".original").click(function(){
        $(".data").css("opacity", ".15");
        $(".d14").css("opacity", "1");
    });
    
    $(".remake").click(function(){
        $(".data").css("opacity", ".15");
        $(".d15").css("opacity", "1");
    });
    
    $(".spinoff").click(function(){
        $(".data").css("opacity", ".15");
        $(".d16").css("opacity", "1");
    });
    
    $(".legend").click(function(){
        $(".data").css("opacity", ".15");
        $(".d17").css("opacity", "1");
    });
}