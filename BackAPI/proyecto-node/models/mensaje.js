class Mensaje {
   constructor(idMensaje, idCampania, estadoEnvio, fechaHoraEnvio, mensaje, estado) {
     this.idMensaje = idMensaje;
     this.idCampania = idCampania;
     this.estadoEnvio = estadoEnvio;
     this.fechaHoraEnvio = fechaHoraEnvio;
     this.mensaje = mensaje;
     this.estado = estado;
   }
 }
 
 module.exports = Mensaje; 
