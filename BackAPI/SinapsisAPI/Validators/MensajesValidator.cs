namespace SinapsisAPI.Validators
{
    public class MensajesValidator
    {
        public static bool ValidarMes(int mes)
        {
            // Validar que el mes esté entre 1 y 12
            return mes >= 1 && mes <= 12;
        }

        /*
        public static bool ValidarClienteId(int? clienteId)
        {
            // Si clienteId es nulo, no se valida
            return clienteId == null || clienteId > 0;
        }
        */
    }
}
