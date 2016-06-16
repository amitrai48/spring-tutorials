#An Introduction to Spring Boot

Spring has come a long way from where it started. With one of the most used java framework
in enterprises, it has a lot of community support, materials and tutorials.

**Why Spring-Boot then?**

* Spring heavily relies on xml files for configurations, this might be useful for experienced spring users, but it does little help for the newbies who wanna join the league.

* Since Version 3.0.0 Spring started supporting annotations, where developers could use them to specify the application context.

* Still the "Hello World" experience of Spring wasn't easy. To start working on Spring, developers still had to write some few lines of code to get the "Hello World" experience and get hooked to this framework.

**Spring Boot**

Spring Boot is Spring's **convention-over-configuration** solution for creating stand-alone , production-grade Spring based Applications that you can "just run".
With Spring Boot you get that "Hello World" experience with minimum fuss.

**Features**

* Create stand-alone Spring applications

* Integrated server for development. Spring Boot attaches a Tomcat/Jetty/Undertow server directly with the compiled jar using Maven/Gradle (no need to deploy WAR files).

* Provide production-ready features such as metrics, health checks and externalized configuration.

* Absolutely **no code generation** and **no requirement for XML** configuration.

##What is Spring Boot ?

In simple terms `Spring Boot = Spring Framework - XML Configuration + Integrated Server`.

#Spring Boot Components

##Spring Boot Auto Configure

A module to auto configure a wide range of Spring projects. It will detect availabilty of common frameworks used (Spring Batch,Spring Data JPA,Hibernate). When the framework is detected it will try to auto configure that framework with some sensible defaults, which can be overridden by configuration in an `application.properties`/`application.yml` file or as command line switches.You can see common application properties used by spring [here](https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html) .

##Spring Boot Core

The **core** module provides the fundamental parts of the framework, including the IoC(Inversion of Control) and Dependency Injection features.

##Spring Boot CLI

A command line tool that can be used if you want to quickly prototype with Spring.Follow the instructions in the main documentation of Spring if you want to [install the Spring Boot CLI](http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#getting-started-installing-the-cli).

##Spring Booot Actuator

Spring Boot Actuator adds several production grade services to your application. It helps you to monitor and manage your application when it's pushed to production.

##Spring Boot Starters

To get you started as quick as possible there are several starter dependency descriptors that you can include in your application. They provide a one-stop shop for all the dependency that your application need.
For example, if your application is a web app, `spring-boot-starter-web` supports for full-stack web development, including Tomcat and `spring-webmvc`. More information can be found [here](http://docs.spring.io/spring-boot/docs/1.2.1.RELEASE/reference/htmlsingle/#using-boot-starter-poms).

#Start using Spring Boot

To give you a hands on experience of Spring we will create some applications on spring. You can directly jump on this [examples](#examples) and get your hands dirty.

##What you will need?

* ###Build Systems

   The easiest way to manage your applications dependency is to use a build system.You can use any build system you like, the most used once are [Maven](https://maven.apache.org/) and [Gradle](http://gradle.org/).

   ###Maven

   **Note** : You can skip the installation part if you are using an IDE such as eclipse.

   Maven is downloadable as a zip file at http://maven.apache.org/download.cgi. Only the binaries are required, so look for the link to apache-maven-{version}-bin.zip or apache-maven-{version}-bin.tar.gz. Once you have downloaded the zip file, unzip it to your computer. Then add the bin folder to your path.
   
   To test the Maven installation, run mvn from the command-line:
        
        mvn -v

   If all goes well, you should be presented with some information about the Maven installation. It will look similar to (although perhaps slightly different from) the following:

        Apache Maven 3.3.9 (bb52d8502b132ec0a5a3f4c09453c07478323dc5; 2015-11-10T22:11:47+05:30)
        Maven home: D:\apache-maven-3.3.9\bin\..
        Java version: 1.8.0_77, vendor: Oracle Corporation
        Java home: C:\Program Files\Java\jdk1.8.0_77\jre
        Default locale: en_US, platform encoding: Cp1252
        OS name: "windows 7", version: "6.1", arch: "amd64", family: "dos"
   
   ###pom.xml

   Maven is based on the concept of a project object model (POM). All the required dependencies and your application informations are listed in pom.xml, which sits in the root folder. A typical pom.xml may look like this : 

        <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
        <modelVersion>4.0.0</modelVersion>
        <groupId>com.amit</groupId>
        <artifactId>spring-boot</artifactId>
        <version>0.0.1</version>
        <name>spring-sql Maven Webapp</name>
        <url>http://maven.apache.org</url>
        <parent>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-parent</artifactId>
            <version>1.3.3.RELEASE</version>
        </parent>

        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-web</artifactId>
            </dependency>

            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-data-jpa</artifactId>
            </dependency>
        </dependencies>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-maven-plugin</artifactId>
                </plugin>
            </plugins>
        </build>
        </project>

   **Dont pull your hairs yet**. It's okay if the content of this file makes no sense to you.. Read Along!

   ###Diving in the pom (wait pond!!!!)

        <modelVersion>4.0.0</modelVersion>
   
   The modelVersion is always set to 4.0.0 . That is currently the only supported POM version for Maven 2 and is always required.

        <groupId>com.amit</groupId>
        <artifactId>spring-sql</artifactId>
        <version>0.0.1</version>

   Every project is uniquely identified by combination of **groupId** and **artifactId**. We include the version number to differentiate our project with older versions.
   A POM requires that its groupId, artifactId, and version be configured. These three values form the project's fully qualified artifact name. This is in the form of `<groupId>`:`<artifactId>`:`<version>`. As for the example above, its fully qualified artifact name is "com.amit:spring-boot:0.0.1".

        <parent>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-parent</artifactId>
            <version>1.3.3.RELEASE</version>
        </parent>
    
   Remember we talked about Spring Boot Starters, the `spring-boot-starter-parent` is a special starter that provides useful Maven defaults. It also provides a dependency-management section so that you can omit version tags for “blessed” dependencies.To configure your project to inherit from the spring-boot-starter-parent simply set the parent as above.This will inherit defaults from Spring Boot.

   Any additional dependencies that your project needs will be includes as :
        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-web</artifactId>
            </dependency>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-data-jpa</artifactId>
            </dependency>
        </dependencies>

   The first dependency includes `spring-boot-starter-web` which helps in building a web application. See the use of groupId and artifactId to import this dependency. Ahhh!! now you get it. The version will be inherited from the parent which in our case is 1.3.3.RELEASE.

   The second dependency `spring-boot-starter-data-jpa` helps in management of relation data. Further info can be found [here](http://docs.spring.io/spring-data/jpa/docs/current/reference/html/).

   ###Using the Spring Boot Maven Plugin

   Spring Boot includes a [Maven plugin](http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#build-tool-plugins-maven-plugin) that can package the project as an executable jar. Add the plugin to your `<plugins>` section if you want to use it:
        <build>
            <plugins>
                <plugin>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-maven-plugin</artifactId>
                </plugin>
            </plugins>
        </build>

   ###Gradle

   We will update this section soon. 

* ###IDE

   It depends totally on you which IDE you want to use or if you don't wanna use them at all. But using IDE will save you a lot of time and increase your productivity. We will use [Eclipse](https://eclipse.org/) but you are free to choose any IDE that you like. Following steps are based on __Eclipse__ IDE

   1. Download Eclipse [here](https://www.eclipse.org/downloads/) and install it. The advantages of using eclipse are many one of them is it comes pre bundled with Maven.

   2.  Click on **File** -->**New**-->**Maven Project** .

   3. Follow the wizard , enter proper **groupId**, **artifactId**, and **version**. Remember Maven requires them to be configured properly.

   4. On completion you would get a directory structure and a `pom.xml` .

   5. To install the dependencies anytime right click on your project and click **Run As** --> **Maven Install**

   6. To run your application right click on your project and selct **Run As** --> **Java Application**. Selct *App*(if you havent changed your class name).

   **You can follow one of the examples to actually build an application**.

#Examples

* [Spring Boot with Embedded Database Support](/Spring%20Boot%20and%20Embedded%20DB)

* [Spring Boot with MySQL](Spring%20Boot%20and%20MySQL)

#Issues or Doubts
Please mail me at [amitrai48@gmail.com](mailto:amitrai48@gmail.com) for any doubts or issues.

#Content Contribution
If you find any error in this tutorial or you want to further contribute to the text, please raise a PR. Any contributions you make to this effort are of course greatly appreciated.

