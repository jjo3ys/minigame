package com.GROCK.question.service;

import com.GROCK.exception.BusinessLogicExecption;
import com.GROCK.exception.ExceptionCode;
import com.GROCK.question.entity.Question;
import com.GROCK.question.repository.QuestionRespository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRespository questionRespository;

    public QuestionService(QuestionRespository questionRespository) {
        this.questionRespository = questionRespository;
    }

    public Question createQuestion(Question question){
        return questionRespository.save(question);
    }

    public Question updateQuestion(Question question){
        // ...
        return questionRespository.save(question);
    }

    public Question findQuestion(List<Long> qIds, String type){
        Optional<Question> question = questionRespository.findByNotInList(qIds, type);
        return question.orElseThrow(() ->
                new BusinessLogicExecption(ExceptionCode.QUESTION_NOT_FOUND));
    }
}
