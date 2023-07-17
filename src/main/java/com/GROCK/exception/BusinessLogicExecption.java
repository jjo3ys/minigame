package com.GROCK.exception;


import lombok.Getter;

public class BusinessLogicExecption extends RuntimeException {
    @Getter
    private ExceptionCode exceptionCode;

    public BusinessLogicExecption(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
