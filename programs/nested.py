print("""you enter a dark room with two doors.
Do u go through door #1 or door #2?""")

door=input("enter door number:")

if door=="1":
    print("There is a giant bear here eating a cheese cake.")
    print("1. Take the cake.")
    print("What do u do?")
    print("2. Scream at the bear.")

    bear=input("enter any number:")

    if bear=="1":
       print("The bear eats ur face off.Good job!")
    elif bear=="2":
       print("The bear eats ur legs off.Good job!")
    else:
       print(f"well ,doing {bear} is probably better")
       print("bear runs away")

elif door=="2":
   print("u stare at ctulhu's retina:")
   print("blueberries")
   print("yellowjacket clothespin")
   print("understanding revolver yelling melodies")

   insanity=input("enter insanity:")

   if insanity=='1' or insanity=="2":
      print("your body survives powered by a mind of jello.")
      print("Good job!")
   else:
      print("The insanity rots ur eyes into a pool of luck")
      print("good job.")
else:
   print("you stumble around and fall on knife and die.Good job!")



 
