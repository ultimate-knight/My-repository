def countSegments(self, s):
    count = 0
        segments = s.split()
        for segment in segments:
            if segment:
                count += 1
                print(count)

        s = "Hello, my name is John"
        result = countSegments(s)
        print(result)

