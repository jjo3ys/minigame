package com.GROCK.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ResourceHandlerConfiguration implements WebMvcConfigurer {
    private final String basePath;
    private final String imagePath;

    public ResourceHandlerConfiguration(@Value("${static.basePath}")String basePath, @Value("${static.imagePath}") String imagePath) {
        this.basePath = basePath;
        this.imagePath = imagePath;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/images/**")
                .addResourceLocations("file:///"+basePath+imagePath);
    }
}
