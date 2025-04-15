$(document).ready(function (){
    $('button').click(function (){
        var bookName = $('#bookName').val();
        var detail = $('#detail').val();
        var bookCounts = parseInt($('#bookCounts').val(),10);
        if (!isNaN(bookCounts) && bookCounts>= 0){
            $.ajax({
                url:"/book/addBooks",
                type:"POST",
                contentType:"application/json",
                data:JSON.stringify({
                    bookId: 1,
                    bookName:bookName,
                    detail:detail,
                    bookCounts:bookCounts
                }),
                success:function (respose){
                    if (respose.success){
                        alert("书籍添加成功");
                        window.close();
                    }else {
                        alert("书籍添加失败");
                    }
                },
                error:function (xhr, status, error) {
                    console.log("请求失败：" + status + ", " + error);
                }

            });
        }else {
            alert("输入有误，请重新输入。")
        }

    });
});