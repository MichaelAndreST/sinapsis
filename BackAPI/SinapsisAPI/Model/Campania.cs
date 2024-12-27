namespace sinapsis.Model
{
    public class Campania
    {
        public int IdCampania { get; set; }
        public int ClienteId { get; set; }
        public string NombreCampania { get; set; }
        public DateTime FechaHoraProgramacion { get; set; }
        public short Estado { get; set; }
    }
}
