package com.GROCK.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf().disable()
                .headers().frameOptions().disable()
                .and()
                .formLogin()
                .loginPage("/admin")
                .loginProcessingUrl("/process_login")
                .failureUrl("/")
                .and()
                .authorizeHttpRequests()
                .anyRequest()
                .permitAll()
                .and().build();
    }
}
