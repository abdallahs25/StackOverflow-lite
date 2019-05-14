$(document).ready(function() {

    $("#editor").keyup(Update);

    function Update(){
        var text = $(this).val();
        var result = ParseToHtml(text);
        $("#resultAsHtml").html(result);
        $("#resultAsText").text(result);
    }

    $("#bold").click(function(){
        var range = $("#editor").getSelection();
        var textToReplaceWith = "[b]"+ range.text + "[/b]";
        $("#editor").replaceSelection(textToReplaceWith , true);

        var text = $("#editor").val();
        var result = ParseToHtml(text);
        $("#resultAsHtml").html(result);
        $("#resultAsText").text(result);
    });

    function ParseToHtml(text) {
        text = text.replace("[b]", "<b>");
        text = text.replace("[/b]", "</b>");
        text = text.replace("  ","&nbsp;");
        text = text.replace("\n","</br>");
        return text;
    }

    $("#bold").replaceSelection("[b]" + $("#editor").getSelection() + "[/b]", true);
});
$(document).ready(function() {

    $("#editor").keyup(Update);

    function Update(){
        var text = $(this).val();
        var result = ParseToHtml(text);
        $("#resultAsHtml").html(result);
        $("#resultAsText").text(result);
    }

    $("#bold").click(function(){
        var range = $("#editor").getSelection();
        var textToReplaceWith = "[b]"+ range.text + "[/b]";
        $("#editor").replaceSelection(textToReplaceWith , true);

        var text = $("#editor").val();
        var result = ParseToHtml(text);
        $("#resultAsHtml").html(result);
        $("#resultAsText").text(result);
    });

    function ParseToHtml(text) {
        text = text.replace("[b]", "<b>");
        text = text.replace("[/b]", "</b>");
        text = text.replace("  ","&nbsp;");
        text = text.replace("\n","</br>");
        return text;
    }

    $("#bold").replaceSelection("[b]" + $("#editor").getSelection() + "[/b]", true);
});