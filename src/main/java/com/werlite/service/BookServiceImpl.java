package com.werlite.service;

import com.werlite.bean.Books;
import com.werlite.dao.BookMapper;

import java.util.List;

public class BookServiceImpl implements BookService{
    private BookMapper bookMapper;

    public void setBookMapper(BookMapper bookMapper) {
        this.bookMapper = bookMapper;
    }

    @Override
    public int addBooks(Books books) {
        return bookMapper.addBooks(books);
    }

    @Override
    public Books selectBooksById(int id) {
        return bookMapper.selectBooksById(id);
    }

    @Override
    public List<Books> selectBooks() {
        return bookMapper.selectBooks();
    }

    @Override
    public int updateBooksById(Books books) {
        return bookMapper.updateBooksById(books);
    }

    @Override
    public int deleteBooksById(int id) {
        return bookMapper.deleteBooksById(id);
    }
}
