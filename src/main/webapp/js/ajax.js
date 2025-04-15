// 当页面加载完成时执行 Ajax 请求
$(document).ready(function(){
    function allBooks(data){
        // 清空现有的书籍列表
        $('#bookList').empty();
        // 遍历后端返回的书籍数据，并渲染到页面上
        data.forEach(function(book) {
            var row = '<tr>';
            row += '<td>' + book.bookId + '</td>';
            row += '<td>' + book.bookName + '</td>';
            row += '<td>' + book.bookCounts + '</td>';
            row += '<td>' + book.detail + '</td>';
            row += '<td>' + '<a class="book_update" data-id='+'"'+book.bookId+'"'+' href="#">修改</a>|<a class="book_delete" data-id='+'"'+book.bookId+'"'+'href="#">删除</a>' + '</td>';
            row += '</tr>';
            $('#bookList').append(row); // 将渲染的内容添加到表格中
        });
        $('.book_delete').click(function (){
            var bookId = $(this).data('id');
            $.ajax({
                url: "/book/delete",
                type: "POST",
                data:{bookId:bookId},
                success:function (respose) {
                    if(respose.success){
                        alert("删除成功");
                    }else {
                        alert("删除失败");
                    }
                    location.reload();
                },
                error:function (xhr, status, error) {
                    console.log("请求失败：" + status + ", " + error);
                }
            })
        });
        var bookId;
        $('.book_update').click(function (){
            bookId = $(this).data('id');
            $('.box').css('display','block');
            $('.box_grey').css('display','block');

        });
        $('.box button').click(function (){
            var bookName = $('#bookName').val();
            var bookCounts = $('#bookCounts').val();
            var detail = $('#detail').val();
            if (!isNaN(parseInt(bookCounts))&&parseInt(bookCounts)>=0){
                $.ajax({
                    url:"/book/update",
                    type:"POST",
                    contentType:"application/json",
                    data:JSON.stringify({
                        bookId: bookId,
                        bookName: bookName,
                        bookCounts: bookCounts,
                        detail: detail
                    }),
                    success:function (respose){
                        if (respose.success){
                            alert("书籍修改成功");
                            location.reload();
                        }else {
                            alert("书籍修改失败");
                        }
                    },
                    error:function (xhr, status, error) {
                        console.log("请求失败：" + status + ", " + error);
                    }
                });
            }else {
                alert("输入有误");
            }

            $('.box').css('display','none');
            $('.box_grey').css('display','none');
        });
    }
    $.ajax({
        url: "/book/allBooks", // 后端请求路径
        type: "GET",     // 请求类型
        success: function(data) {
            allBooks(data);
        },
        error: function(xhr, status, error) {
            console.log("请求失败：" + status + ", " + error);
        }
    });


    $('.but_book1 button:first').click(function (){
        window.open("/book/addBook");
    });
    $('.but_book1 button:nth-child(n)').click(function (){
        location.reload();
    });
    $('.but_book2 form button').click(function (){
        var bookId = $('.but_book2 form input').val();
        var id = parseInt(bookId);
        if (!isNaN(id)&&parseInt(id)>=0){
            $.ajax({
                url:"/book/selectBookById",
                type:"POST",
                data:{bookId:id},
                success:function (data){
                    allBooks(data);
                },
                error:function (xhr, status, error) {
                    console.log("请求失败：" + status + ", " + error);
                }
            });
        }else {
            alert("输入有误")
        }
    });
});