// Begin jQuery functions
(function($){
    $(document).ready(function()
	{
	});

    // Replace the following string with the AppId you received from the
    // Bing Developer Center.
    var AppId = "AppId=34b69a6414c74c47b8795bebdd6b9487";
    var Query = "Query="
    var Sources = "Sources=Image";
    var Version = "Version=2.0";
    var Options = "Options=EnableHighlighting";
    var WebCount = 10;
    var WebOffset = 0;


    Search= function(txtToSearch, img_id) {
		escapedTxt =  txtToSearch.replace(/[^a-zA-Z 0-9]+/g,'');
        var searchTerms = escapedTxt.replace(" ", "+");
        var arr = [AppId, Query + searchTerms, Sources, Version, Options, "Web.Count=" + WebCount, "Web.Offset=" + WebOffset, "JsonType=callback", "JsonCallback=?"];
        var requestStr = "http://api.search.live.net/json.aspx?" + arr.join("&");

        $.ajax({
            type: "GET",
            url: requestStr,
            dataType: "jsonp",
            success: function(msg) {
                SearchCompleted(msg, img_id);
            },
            error: function(msg) {
                alert("Something hasn't worked\n" + msg.d);
            }
        });
    }

    function SearchCompleted(response, img_id) {

        var errors = response.SearchResponse.Errors;
        if (errors != null) {
            // There are errors in the response. Display error details.
            DisplayErrors(errors);
        }
        else {
            // There were no errors in the response. Display the Web results.
            DisplayResults(response, img_id);
        }
    }

    function DisplayResults(response, img_id) {
		$("#"+img_id).attr("src", response.SearchResponse.Image.Results[0].MediaUrl);
    }

    function DisplayErrors(errors) {
        var errorHtml = [];

        for (var i = 0; i < errors.length; ++i) {
            errorHtml[i] = "<li>" + errors[i] + "</li>";
        }
        $('#error-list').append(errorHtml.join(''));
    }
})(jQuery);
