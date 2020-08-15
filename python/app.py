import re
text = "Hello, World!"
name = re.search(r', (.*)!', text)
if name:
  print(name.group(1))