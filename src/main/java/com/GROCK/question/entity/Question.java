package com.GROCK.question.entity;

import com.GROCK.audit.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;

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

    @Column(length = 255, nullable = false)
    private String imgUrl;

    @Transient
    @Value("${s3.baseUrl}")
    private String baseUrl;

    public String getImgUrl() {
        return baseUrl+imgUrl;
    }
}
