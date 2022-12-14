USE users_db;

INSERT INTO users (username, age)
VALUES ('johndoe', 21), ('janedoe', 22), ('jamesdoe', 23), ('jackdoe', 24);

INSERT INTO posts (title, text, userId)
VALUES ('My First Post', 'Hello and welcome to my first post ever!', 1), ('Crazy Post', 'This post is CRAZY oh my goodness look at it!', 1), ('Post', 'Post post post post post post post!', 2)