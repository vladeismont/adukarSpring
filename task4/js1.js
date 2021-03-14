$(document).ready(function() {
    $('#question1').on('rating.change',(event, value) => console.log(value));
    $('#question1').on('rating.clear', e => console.log("rating:clear"));
});