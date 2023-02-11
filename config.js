module.exports = {
  app: {
    token: 'ODg5NTAwNTUz%%%MTAzNjk5OTc4.GBdIt5.8PikyK%%%gXUAZ68tEfp7-ByJT%%%9MkjZ78NHjsAY9g',
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
