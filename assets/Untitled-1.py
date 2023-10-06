def sub(input_str):
    length = len(input_str)

    for i in range(length):
        for j in range(i, length):
            substring = input_str[i:j + 1]
            print(substring)

input_string = "abc"
print("All Substrings of 'abc':")
sub(input_string)
