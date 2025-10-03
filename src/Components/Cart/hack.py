arr = [3, 4, 5, 6, 6]
arr2 = arr.copy()

arr2.append(7)
print(arr2)

arr2.extend([4, 5])
print(arr2)

arr2.insert(2, 99)
print(arr2)

arr2.remove(6)
print(arr2)

popped = arr2.pop()
print(arr2)
print(popped)

count_4 = arr2.count(4)
print(count_4)

index_5 = arr2.index(5)
print(index_5)

arr2.reverse()
print(arr2)

arr2.sort()
print(arr2)

arr2.sort(reverse=True)
print(arr2)

arr2.clear()
print(arr2)

arr3 = [10, 20, 30]
arr4 = arr3.copy()
print(arr3)
print(arr4)
