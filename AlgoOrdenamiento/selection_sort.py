# 1. ENCONTRAR EL NUMERO MENOR EN UN ARRAY
# 2. CREAR 2 SUBARRAYS PARA EL CONTROL DE EL ALGORITMO
# 3. IMPRIMIR EL RESULATDO DEL ALGORTIMO SELECTION SORT
import sys

array = [5, 21, 6, 23, 7 ,34, 100, 69]


def selectionSort(array):
    #RECORER todo NUESTRO ARRAY
    for i in range(len(array)):
        #ENCONTRAR EL VALOR MINIMO RESTANTE DENTRO DE NUESTRO ARRAY DESORDENADO
        idxDes = i
        for j in range (i+1, len(array)):
            if array[idxDes] > array[j]:
                idxDes = j
    #   ENCONTRANDO EL MINIMO ELEMENTO HACEMOS SWAP CON EL PRIMER VALOR DE NUESTRO ARRAY DESORDENADO
    array[i], array[idxDes] = array[idxDes], array[i]

# EJECUCION DE LA FUNCION

selectionSort(array)
print("El array ordenado es: ")

for i in range(len(array)):
    print("%d"%array[i]), 