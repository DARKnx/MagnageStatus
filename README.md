# RANDOM STATUS

## Esse e um projeto simples para troca de avatar e de status de um bot, Foi usada a versão v13.2.0 do discord.js

```
1º - crie um arquivo chamado "status.js" em algum local de seu projeto.
2º - nesse mesmo arquivo coloque os scripts de status.js desse projeto.
3º - para o uso e necessario que o cliente esteja ativo, estão deve ser usado no evento ready
4º - veja abaixo como deve ser usada a função.
```

### .stats([client], [frases], [time])
#### Troca de status
```

Parametro |     tipo        |  opcional  |  descrição
----------------------------------------------------------------------------------
client    |   ClientUser    |    false   |  o user que sera alterado
frases    |     Array       |    false   |  o array de frases para troca
time      | Number(segunds) |    true    |  tempo em segundos para troca de status

```
exemplo:
```javascript

//declarando o arquivo que contem todas as funções
const random = require('./status.js');
//starting status swap
random.stats(client, ['status one', 'status two'])

```