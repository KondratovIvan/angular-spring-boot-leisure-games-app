package com.example.laisuregameswebappbackend.util;

import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> resourceNotFoundException() {
        return new ResponseEntity<>(new MyGlobalExceptionHandler("Resource was not found"), HttpStatus.NOT_FOUND);
    }

    @Data
    private class MyGlobalExceptionHandler {
        private String message;

        public MyGlobalExceptionHandler(String message) {
            this.message = message;
        }
    }
}
