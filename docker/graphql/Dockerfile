FROM openjdk:8-alpine

COPY ./ndm-graphql/build/libs/ndm-graphql-all.jar /tmp/ndm.jar

ENTRYPOINT ["java", "-jar", "/tmp/ndm.jar"]
