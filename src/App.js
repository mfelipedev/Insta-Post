import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';

const app = {
    async start () {
     try {
      await Notifyer.init()

      Emitter.on('countdown-start', () => {
        Notifyer.notify({
          title: "Atenção!",
          body: "É o momento ideal para desenvolver conteúdo para a sua rede social!",
         })
      })

      Emitter.on('countdown-end', () => {
        Timer.init()
      })

        Timer.init()
       
     } catch (err) {
       console.log(err.message)
     }


    }
}

export { app }
