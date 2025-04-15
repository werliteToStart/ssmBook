package com.werlite.dao;

import com.werlite.bean.Books;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BookMapper {
    public int addBooks(Books books);
    public Books selectBooksById(@Param("Id") int id);
    public List<Books> selectBooks();
    public int updateBooksById(Books books);
    public int deleteBooksById(@Param("Id") int id);
}
