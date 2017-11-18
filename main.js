const CoinHive = require('coin-hive');

// Função IIFE assícrona
(async () => {
  // Instancie o CoinHive passando sua hash no constructor
  const miner = await CoinHive('sua_hash_aqui')
  // Exemplo
  // const miner = await CoinHive('ZM4gjqQ0jh0jbZ3tZDByOXAjyotDbo00')

  // Aqui é onde você dará o start e ele começará a mineração
  await miner.start()
})()
