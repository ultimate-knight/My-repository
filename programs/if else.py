people=40
cars=20
trucks=15

if cars>people:
    print("we shoild take the cars:")
elif cars<trucks:
    print("we should take the trucks:")
else:
    print("we should go by walk:")

if trucks<cars:
    print("we should take the cars:")
elif trucks>people:
    print("trucks are best:")
else:
    print("we shouldn't go:")

if people>cars:
    print("we need cars now:")
else:
    print("i don't know:")