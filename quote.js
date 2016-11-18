  $(document).ready(function() {
      $("#getMessage").on("click",function(){
       $.ajax({
        url: "https://crossorigin.me/http://quotesondesign.com/wp-json/posts",
        type: 'GET',
        dataType: 'json',
          contentType:"json",
        success:function(data){
      
          var array = data;
            console.log(array);
            console.log(array[0].title);
            $(".message").html(array[0].content);
            $("#content").val(array[0].ID);
            $("#link").val(array[0].link);
            $("#title").text("Hello world!");
            //$("h2:first").replaceWith(array[0].title);
        },
                error: function(err) {
            var data = $.parseJSON(err.responseText);
            showErrorModal(data.errorMessage);
        }

   });
});
      });