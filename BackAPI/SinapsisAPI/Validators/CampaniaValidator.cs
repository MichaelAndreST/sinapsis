namespace SinapsisAPI.Validators
{
    public class CampaniaValidator
    {
        public static bool ValidarClienteId(int clienteId)
        {
            return clienteId > 0;  // Cliente debe tener un ID válido mayor a 0
        }

        public static bool ValidarNombreCampania(string nombreCampania)
        {
            return !string.IsNullOrEmpty(nombreCampania) && nombreCampania.Length <= 200;
        }

        public static bool ValidarFechaHoraProgramacion(DateTime fechaHoraProgramacion)
        {
            return fechaHoraProgramacion > DateTime.Now; // La fecha debe ser futura
        }

        public static bool ValidarEstado(short estado)
        {
            return estado == 0 || estado == 1;  // Solo estado 0 o 1 son válidos
        }
    }
}
