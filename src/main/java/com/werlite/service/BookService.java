package com.werlite.service;

import com.werlite.bean.Books;
import com.werlite.dao.BookMapper;

import java.util.List;

public interface BookService {

    int addBooks(Books books);
    Books selectBooksById(int id);
    List<Books> selectBooks();
    int updateBooksById(Books books);
    int deleteBooksById(int id);
}
