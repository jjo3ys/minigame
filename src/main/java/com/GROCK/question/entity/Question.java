package com.GROCK.question.entity;

import com.GROCK.audit.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Question extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long questionId;

    @Column(length = 255, nullable = false)
    private String answer;

    @Column(length = 255, nullable = true)
    private String imgName;

    @Column(nullable = false)
    private String type;
}
