
x = 1230
def print_stuff(x)

  chars = ['o', 'x', 'c']
  wave_indent = 1
  wave_indent_direction = 'plus'
  indent_char = "."
  sleep_timer = (0.01)

  while x >= 0
    indent = indent_char * wave_indent
    print "#{x.to_s.rjust(4, "0")} " + indent + chars.sample + "\n"

    if wave_indent == 94
      wave_indent_direction = 'minus'
    elsif wave_indent == 1
      wave_indent_direction = 'plus'
    end

    if wave_indent_direction == 'plus'
      wave_indent += 1
    elsif wave_indent_direction == 'minus'
      wave_indent -= 1
    end
  end

  x -= 1
end


print_stuff(x)
