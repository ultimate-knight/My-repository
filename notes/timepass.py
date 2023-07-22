def intersection(a1,a2):
    set1=set(a1)
    set2=set(a2)
    s1=set1.intersection(set2)
    s2=list(s1)
    return s2

a1=[23,34,45,56]
a2=[43,55,85,66,23]
result=intersection(a1,a2)
print(result)