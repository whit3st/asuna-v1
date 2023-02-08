module.exports = {
  app: {
    token: 'ODg5NTAwNTUzMTAzNjk5OTc4.GkvLIS.skgforJGeaIKQ8PwPvAB0pjLDz6pY2cNaVag7Q',
    playing: 'ahbap.org/bagisci-ol',
    global: true,
    guild: 'XXX',
    
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: '',
      commands: []
    },
    maxVol: 100,
    leaveOnEnd: false,
    loopMessage: false,
    spotifyBridge: true,
    defaultvolume: 75,
    discordPlayer: {
      ytdlOptions: {
        quality: 'highestaudio',
        highWaterMark: 1 << 25
      }
    }
  }
};
