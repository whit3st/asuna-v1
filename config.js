module.exports = {
  app: {
    token: '',
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
