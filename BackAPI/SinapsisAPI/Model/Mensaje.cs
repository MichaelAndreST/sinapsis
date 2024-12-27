namespace sinapsis.Model
{
    public class Mensaje
    {
        public int idMensaje { get; set; }
        public int idCampania { get; set; }
        public short estadoEnvio { get; set; }
        public DateTime fechaHoraEnvio { get; set; }
        public string mensaje { get; set; }
        public short estado { get; set; }
    }
}
