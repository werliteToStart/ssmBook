package com.werlite.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Books {
    private int bookId;
    private String bookName;
    private int bookCounts;
    private String detail;

}
