require 'pry'

class Person
  attr_accessor :age
  attr_reader :name

  @@all = []

  def initialize(name, age)
    # stuff starting with an @ sign
    # we refer to as instance variables
    @name = name
    @age = age
    @@all << self
  end

  def self.all
    @@all
  end

  def greet_a_friend(friend)
    puts "hello, #{friend.name}, as you may know, my name is #{self.name}"
  end

  def introduce
    "hello world, my name is #{self.name}"
  end

  def self.talk_to_an_alien
    "ayyyyyyyy lmao we have 2 legs and 2 arms"
  end

end

dan = Person.new('Daniel', 27)
marju = Person.new('Marju', 27)
steve = Person.new('Steven', 26)
fernando = Person.new('Fernando', 36)
chris = Person.new('Chris', 34)

binding.pry
p 'eof'
