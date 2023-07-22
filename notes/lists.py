num=[10,20,30,40,100]
fum=['rubber','paint']
print(num[0:2])
print(num[1:3])
print(num[4])
#this is used for 'for' loop in lists.
for i in num:
    print(i)
#this is used for while loop in lists.
i=0
while i<len(num):
    print(num[i])
    i+=1
#enumerate function in lists which is used to print index in lists.
for index,i in enumerate(num):
    print(index,i)
#lists can be mutable 
num[2]=200
num[0:5]=[20,35,40,45,56]
print(num)
#lists can be concatenated.
num=num+[23,435,56]
print(num)
#lists can be merged.
gum=num+fum
print(gum)
#lists can be converted
i=list('maaz')
print(i)
#lists can be aliased
num1=num
print(num1)
#index of array
print(num[0])
#length of array
length=len(num)
print(length)
#deleting elements in array
del num[3]
print(num)
#searching element in an array
index=num.index(56)
print(index)
#sorting an array
num.sort()
print(num)
#reverse element of an array
num.reverse()
print(num)
#copying an array
num2=num[:]
print(num2)
#creating 2d array
matrix=[[1,2,3],
        [4,5,6],
        [7,8,9]]
print(matrix[0][1])
#concatenation of array
a1=[1,2,3]
a2=[2,3,4]
concatenated=a1+a2
print(concatenated)
#array conversion
a1=[1,2,3]
tuple_a1=tuple(a1)
set_a1=set(a1)
string_a1="".join(str(x) for x in a1)
print(tuple_a1)
print(set_a1)
print(string_a1)
#operations in array
# Array operations
array1 = [1, 2, 3]
array2 = [4, 5, 6]

# Addition
result = [x + y for x, y in zip(array1, array2)]
print(result)  # Output: [5, 7, 9]

# Multiplication
result = [x * y for x, y in zip(array1, array2)]
print(result)  # Output: [4, 10, 18]

# Maximum and minimum
maximum = max(array1)
minimum = min(array2)
print(maximum)  # Output: 5
print(minimum)  # Output: 1


