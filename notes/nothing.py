def segment(s):
    count=0
    segments=s.split()
    for segment in segments:
        if segment:
            count+=1
    return count
 