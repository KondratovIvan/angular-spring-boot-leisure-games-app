# angular-springboot-application

To run this application you must

**1. Repository clonning**
```bash
git clone https://github.com/KondratovIvan/angular-spring-boot-leisure-games-webapp
```

**2. Create 'leisureGames' postgresql DB**

**3. Spring boot app**
* Open folder leisure-games-webapp-backend in Java IDE

* Build the maven project:
```bash
mvn clean install
```
* Run project
* Open Postman or another http requests emulator and add new games with POST http://localhost:8080/game method
* Request body must looks like:
```bash
{ 
    "name":"Hat", 
    "fame":"narrow", 
    "shortDesc":"Explanation of the words spoken by a member of the company", 
    "fullDesc":"All participants in this fun game come up with ten words, write them on pieces of paper and put them in a hat. And then the fun begins: players, in a limited amount of time in line, try to explain, show or draw the words they come across, while everyone else continues to guess them. The most successful wins receive points, honor, glory and a medal around their neck.", 
    "imageLink":"https://5sfer.com/wp-content/uploads/2023/08/names-in-a-hat-1024x683.jpg" 
}
```

**4. Angular app**
* Open folder leisure-games-webapp-frontend in IDE with web development support, VSC for example

* Open a terminal, go to leisure-games-webapp-frontend folder and start Angualr project:
```bash
ng serve
```

* Open browser and browse at:  http://localhost:4200/
![image](https://github.com/KondratovIvan/angular-spring-boot-leisure-games-webapp/assets/94958641/9de9b80d-16e6-4789-9bab-b7eb1a1ccd44)
![image](https://github.com/KondratovIvan/angular-spring-boot-leisure-games-webapp/assets/94958641/761643ea-3d55-46d5-aef0-05bbec4f3055)
![image](https://github.com/KondratovIvan/angular-spring-boot-leisure-games-webapp/assets/94958641/259275c2-863f-49bc-a926-f64d24de3ab7)
