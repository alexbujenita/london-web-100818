def is_palindrome?(string_of_chars)

  if string_of_chars.class != String || string_of_chars.length == 0
    raise ArgumentError.new('Input must not be an integer')
  end

  string_of_chars = string_of_chars
    .gsub(' ', '')
    .downcase
    .gsub(/\p{P}/, '')

  string_of_chars.reverse == string_of_chars
end
