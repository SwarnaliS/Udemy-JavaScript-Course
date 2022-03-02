exports.getDate = function(){

    var today = new Date();

    var option = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

DAY = today.toLocaleDateString("en-US", option);

return DAY;
}


exports.getDay= function(){

    var today = new Date();

var option = {
    weekday: "long"
};
DAY = today.toLocaleDateString("en-US", option);

return DAY;
}


