import random
result = random.sample(range(3,75),72)
gp = 1
numeracao = 1
imprimir = 'Grupo ' + str(gp) + 'º: '
for i in range (0,len(result)):
  if(i%12 == 0 and i != 0):
    print(imprimir)
    gp += 1
    imprimir = 'Grupo ' + str(gp) + 'º: '
  if(result[i]>=49):
    imprimir += 'P' + str(numeracao) + ' '
    numeracao += 1
  else:
    imprimir += str(result[i]) + ' '
print(imprimir)
