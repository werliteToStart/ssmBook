package com.werlite.controller;

import com.werlite.bean.Books;
import com.werlite.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/book")
public class BookController {
    @Autowired
    @Qualifier("BookServiceImpl")
    private BookService bookService;

    @RequestMapping("/allBook")
    public String list(Model model){
//        List<Books> books = bookService.selectBooks();

        return "allBook";
    }
    @RequestMapping("/allBooks")
    @ResponseBody
    public List<Books> list(){
        List<Books> books = bookService.selectBooks();

        return books;
    }
    @PostMapping("/delete")
    @ResponseBody
    public Map<String, Object> delete(@RequestParam("bookId") int bookId){
        Map<String, Object> respose = new HashMap<>();
        int i = bookService.deleteBooksById(bookId);
        if (i>0){
            respose.put("success",true);
        }else {
            respose.put("success",false);
        }
        return respose;
    }

    @RequestMapping("/addBook")
    public String addBookHtml(){
        return "addBook";
    }

    @PostMapping("/addBooks")
    @ResponseBody
    public Map<String,Object> add(@RequestBody Books books){
        int i = bookService.addBooks(books);
        Map<String, Object> respose = new HashMap<>();
        if (i > 0){
            respose.put("success",true);
        }else {
            respose.put("success",false);
        }
        return respose;
    }

    @PostMapping("/update")
    @ResponseBody
    public Map<String,Object> updateHtml(@RequestBody Books books){
        Map<String, Object> respose = new HashMap<>();
        int i = bookService.updateBooksById(books);
        if (i>0){
            respose.put("success",true);
        }else {
            respose.put("success",false);
        }
        return respose;
    }
    @PostMapping("/selectBookById")
    @ResponseBody
    public List<Books> selectBookById(@RequestParam("bookId") int bookId){
        Books book = bookService.selectBooksById(bookId);
        List<Books> books = new ArrayList<>();
        books.add(book);

        return books;
    }
}
