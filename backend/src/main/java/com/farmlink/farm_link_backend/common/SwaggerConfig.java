package com.farmlink.farm_link_backend.common;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    
    @Bean
    public OpenAPI farmLinkOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Farm Link API")
                        .description("스마트팜 주소 검증 및 지역 정보 조회 API")
                        .version("v1.0")
                        .contact(new Contact()
                                .name("Farm Link Team")
                                .email("contact@farmlink.com")
                                .url("https://farmlink.com"))
                        .license(new License()
                                .name("MIT License")
                                .url("https://opensource.org/licenses/MIT")));
    }
}
