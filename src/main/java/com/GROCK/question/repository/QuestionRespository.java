package com.GROCK.question.repository;

import com.GROCK.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface QuestionRespository extends JpaRepository<Question, Long> {
//    @Query(value="SELECT q FROM Question q WHERE q.questionId NOT IN :qIds ORDER BY RAND()")
//    Question findTop1ByNotInList(@Param("qIds") List<Long> qIds);
    @Query(value="SELECT * FROM question WHERE question.type = :type AND question.question_id NOT IN :qIds ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Optional<Question> findTop1ByNotInList(@Param("qIds") List<Long> qIds, @Param("type") String type);
//    Question findTopByOrderByIdNotIn(List<Long> ids);
}
