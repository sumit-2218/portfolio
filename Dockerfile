# Use Java 17 image
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy project files
COPY . .

# Build the JAR using Maven Wrapper
RUN ./mvnw clean package

# Expose default Spring Boot port
EXPOSE 8080

# Run the Spring Boot app
CMD ["java", "-jar", "target/*.jar"]
