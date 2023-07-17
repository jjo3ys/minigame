package com.GROCK.question.repository;

import com.GROCK.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface QuestionRespository extends JpaRepository<Question, Long> {
    @Query(value="SELECT q FROM Question q WHERE q.questionId NOT IN (:qIds) AND q.type = :type ORDER BY RAND() limit 1")
    Optional<Question> findByNotInList(List<Long> qIds, String type);
}
