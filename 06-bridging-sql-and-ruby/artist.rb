require 'sqlite3'
require 'pry'

DB = { :conn => SQLite3::Database.new('./artists.db') }
DB[:conn].results_as_hash = true

class Artist

  attr_accessor :id, :name

  def initialize(id=nil, name)
    @id = id
    @name = name
  end

  def self.create_table
    sql = <<-SQL
      create table artists (id integer primary key, name text);
    SQL

    DB[:conn].execute(sql)
  end

  def self.find(id)
    sql = <<-SQL
      select * from artists where id=?;
    SQL

    artist_hash = DB[:conn].execute(sql, id)[0]
    Artist.parse_artist_hash(artist_hash)
  end

  def self.parse_artist_hash(artist_hash)
    if artist_hash
      Artist.new(artist_hash['id'], artist_hash['name'])
    else
      nil
    end
  end

  def self.get_highest_id
    sql = <<-SQL
      select id from artists order by id desc limit 1;
    SQL

    DB[:conn].execute(sql)[0]['id']
  end

  def save
    sql = <<-SQL
      insert into artists (name) values (?);
    SQL

    DB[:conn].execute(sql, @name)
    Artist.find(Artist.get_highest_id)
  end

  def self.create(name)
    a = Artist.new(name)
    a.save
  end

  def self.all
    sql = <<-SQL
      select * from artists;
    SQL

    DB[:conn].execute(sql).map do |artist_hash|
      Artist.parse_artist_hash(artist_hash)
    end
  end

  def update(new_name)
    sql = <<-SQL
      update artists set name=? where id=?;
    SQL

    DB[:conn].execute(sql, new_name, @id)
    Artist.find(@id)
  end

  def self.delete(id)
    if !Artist.find(id)
      puts 'you cannot delete something that doesn\'t exist!'
      return false
    end

    sql = <<-SQL
      delete from artists where id=?;
    SQL

    DB[:conn].execute(sql, id)

    !Artist.find(id)
  end
end

Pry.start
