# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## sqlite3 formatting

```sql
.mode column
.headers on
```

## Joins explained

[Link](http://blog.seldomatt.com/blog/2012/10/17/about-sql-joins-the-3-ring-binder-model/)

## Query examples

1. Write the SQL to return all of the rows in the artists table?

```SQL
select * from artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
select * from artists where artists.Name = "Black Sabbath";
```
3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```SQL
CREATE TABLE fans ( id INTEGER PRIMARY KEY, name TEXT);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```SQL
alter table fans add column artist_id integer;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**
```SQL
insert into fans (name, artist_id) values ("Steve", 169);
```

6. Write the SQL to return fans that are not fans of the black eyed peas.

```SQL
select name from fans where fans.artist_id != 169;
```
7. Write the SQL to display all artists's names next to their album titles

```SQL
select artists.Name, albums.Title from artists inner join albums on artists.ArtistId = albums.ArtistId;
```

8. Write the SQL to display artist name, album name and number of tracks on that album

9. Write the SQL to return the name of all of the artists in the 'Pop' Genre
