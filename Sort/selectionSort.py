#  Selection sort

arr = [1,3,4,5,7,3,2,-9,0]

def selection_sort(arr, n):
    for i in range(n - 1):
        min = i
        for j in range(i + 1, n):
            if arr[j] < arr[min]:
                min = j
        temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    return arr

print(selection_sort(arr, len(arr)))