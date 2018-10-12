require 'pry'

class User

  @@all = []

  attr_accessor :username

  def initialize(username)
    @username = username
    @@all << self
  end

  def all_tweets
    Tweet.all.select {|t| t.user == self }
  end

  def likes
    Like.all.select {|l| l.user == self }
  end

  def liked_tweets
    likes.map {|l| l.tweet}
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def delete_a_tweet(message)
    tweet_to_be_deleted = Tweet.all.find {|t| t.message == message}

    if !tweet_to_be_deleted
      puts 'that tweet doesn\'t exist'
      return false
    elsif tweet_to_be_deleted.user != self
      puts "can't delete what's not yours! It belongs to #{tweet_to_be_deleted.user.username} and I will tell that person you tried to do it!"
      return false
    end

    Tweet.all.delete(tweet_to_be_deleted)
    true
  end
end

class Tweet

  @@all = []

  attr_accessor :user, :message

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

  def likes
    Like.all.select {|l| l.tweet == self }
  end

  def likers
    likes.map {|l| l.user}
  end
end

class Like

  attr_accessor :user, :tweet

  @@all = []

  def initialize(user, tweet)
    @user = user
    @tweet = tweet
    @@all << self
  end

  def self.all
    @@all
  end
end

dan = User.new('Dan')
joe = User.new('Joe')
mikko = User.new('Mikko')

t1 = Tweet.new('wow its hot today', dan)
t2 = Tweet.new('its cold now', dan)
t3 = Tweet.new('        ...', joe)
t4 = Tweet.new('joe is right', mikko)
t5 = Tweet.new('lol', dan)

l1 = Like.new(mikko, t3)
l2 = Like.new(mikko, t4)
l3 = Like.new(dan, t1)
l4 = Like.new(dan, t3)
l5 = Like.new(joe, t3)

binding.pry
p 'eof'
