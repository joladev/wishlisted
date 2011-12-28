$.ready(function () {
    $.ajaxSetup ({
        cache: false
    });

	$("#create-wishlist").click(function () {
		$("div.span10").load("/new-wishlist");
	});
});