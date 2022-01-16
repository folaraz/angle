FROM openjdk:12-jdk-alpine
EXPOSE 8080
ADD build/libs/angel.jar angel.jar
ENTRYPOINT ["java","-jar","/angel.jar"]