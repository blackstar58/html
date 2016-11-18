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
            $(".message").html(array[0].content);
           
            $(".message").val(array[0].ID);
            $("#content").val(array[0].content);
            $("#link").val(array[0].link);
            $("#title").val(array[0].title);
        },
                error: function(err) {
            var data = $.parseJSON(err.responseText);
            showErrorModal(data.errorMessage);
        }

   });
});
      });