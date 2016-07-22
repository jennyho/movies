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
        $(".data").animate({
            opacity: .6
        }, 500);
    });
    
    $(".book").click(function(){
        $(".d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10, .d11, .d12, .d13, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d1").animate({
            opacity: 1
        }, 500);
    });
    
    $(".comic").click(function(){
        $(".d1, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10, .d11, .d12, .d13, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".fact").click(function(){
        $(".d1, .d2, .d4, .d5, .d6, .d7, .d8, .d9, .d10, .d11, .d12, .d13, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d3").animate({
            opacity: 1
        }, 500);
    });
    
    $(".game").click(function(){
        $(".d1, .d2, .d3, .d5, .d6, .d7, .d8, .d9, .d10, .d11, .d12, .d13, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d4").animate({
            opacity: 1
        }, 500);
    });
    
    $(".mag").click(function(){
        $(".d1, .d2, .d3, .d4, .d6, .d7, .d8, .d9, .d10, .d11, .d12, .d13, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d5").animate({
            opacity: 1
        }, 500);
    });
    
    $(".music").click(function(){
        $(".d1, .d2, .d3, .d4, .d5, .d7, .d8, .d9, .d10, .d11, .d12, .d13, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d6").animate({
            opacity: 1
        }, 500);
    });
    
    $(".play").click(function(){
        $(".d1, .d2, .d3, .d4, .d5, .d6, .d8, .d9, .d10, .d11, .d12, .d13, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d7").animate({
            opacity: 1
        }, 500);
    });
    
    $(".real").click(function(){
        $(".d1, .d2, .d3, .d4, .d5, .d6, .d7, .d9, .d10, .d11, .d12, .d13, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d8").animate({
            opacity: 1
        }, 500);
    });
    
    $(".short").click(function(){
        $(".d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d10, .d11, .d12, .d13, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d9").animate({
            opacity: 1
        }, 500);
    });
    
    $(".toy").click(function(){
        $(".d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d11, .d12, .d13, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d10").animate({
            opacity: 1
        }, 500);
    });
    
    $(".tv").click(function(){
        $(".d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10, .d12, .d13, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d11").animate({
            opacity: 1
        }, 500);
    });
    
    $(".comp").click(function(){
        $(".d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10, .d11, .d13, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d12").animate({
            opacity: 1
        }, 500);
    });
    
    $(".disney").click(function(){
        $(".d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10, .d11, .d12, .d14, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d13").animate({
            opacity: 1
        }, 500);
    });
    
    $(".original").click(function(){
        $(".d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10, .d11, .d12, .d13, .d15, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d14").animate({
            opacity: 1
        }, 500);
    });
    
    $(".remake").click(function(){
        $(".d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10, .d11, .d12, .d13, .d14, .d16, .d17").animate({
            opacity: .15
        }, 500);
        $(".d15").animate({
            opacity: 1
        }, 500);
    });
    
    $(".spinoff").click(function(){
        $(".d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10, .d11, .d12, .d13, .d14, .d15, .d17").animate({
            opacity: .15
        }, 500);
        $(".d16").animate({
            opacity: 1
        }, 500);
    });
    
    $(".legend").click(function(){
        $(".d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10, .d11, .d12, .d13, .d14, .d15, .d16").animate({
            opacity: .15
        }, 500);
        $(".d17").animate({
            opacity: 1
        }, 500);
    });
}