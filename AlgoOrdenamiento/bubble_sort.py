#1. - EMPEZAR A HACER COMPARACIONES DE ELEMENTOS ADYACENTE
#2. REPETIR HASTA TENER UN RECORIDO COMPLETO SIN NINGUN SWAP

def bubbleSort(arr):
    n = len(arr)
    
    for i in range(n):
        print(arr)
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]


array = [190 , 200, 1, 2, 4, 5, 55, 1000, 6, 800]


bubbleSort(array)
print("El arreglo ordenando de forma ascendente es:")
for i in range(len(array)):
    print("%d"%array[i]),
