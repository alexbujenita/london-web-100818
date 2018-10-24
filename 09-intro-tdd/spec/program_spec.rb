require_relative '../program'

describe "is_palindrome?" do

  it 'should return true if the string is a palindrome if passed kayak' do
    expect(is_palindrome?('kayak')).to be(true)
  end

  it 'should return false if the string is not a palindrome' do
    expect(is_palindrome?('kayaks')).to be(false)
  end

  it 'should return true if the input has spaces and is a palindrome' do
    expect(is_palindrome?('amen icy cinema')).to be(true)
  end

  it 'should return false if the input has spaces and is not a palindrome' do
    expect(is_palindrome?('amens icies cinemas')).to be(false)
  end

  it 'should return true if the input has capital letters and is a palindrome' do
    expect(is_palindrome?('Kayak')).to be(true)
  end

  it 'should return false if the input has capital letters and is not a palindrome' do
    expect(is_palindrome?('Kayaks')).to be(false)
  end

  it 'should return true if the input has punctuation and it is a palindrome' do
    expect(is_palindrome?('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!')).to be(true)
  end

  it 'should return false if the input has punctuation and it is not a palindrome' do
    expect(is_palindrome?('A man, a plan, a cat, a ham, a yakasfdojjodfsafoijdiojd£QR*&Y, a yam, a hat, a canal-Panama!')).to be(false)
  end

  # invalid input handling

  it 'should raise an error if given an int' do
    expect { is_palindrome?(131) } .to raise_error(ArgumentError)
  end

  it 'should raise an error if given nil' do
    expect { is_palindrome?(nil) } .to raise_error(ArgumentError)
  end

  it 'should raise an error if given an empty string' do
    expect { is_palindrome?('') } .to raise_error(ArgumentError)
  end
end
