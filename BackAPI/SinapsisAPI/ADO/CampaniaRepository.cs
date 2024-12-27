using MySqlConnector;
using System.Data;

namespace SinapsisAPI.ADO
{
    public class CampaniaRepository
    {
        private readonly string _connectionString;

        public CampaniaRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AgregarCampania(int clienteId, string nombreCampania, DateTime fechaHoraProgramacion, short estado)
        {
            using (var connection = new MySqlConnection(_connectionString))
            {
                using (var command = new MySqlCommand("sp_agregar_campania_por_cliente", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;

                    command.Parameters.AddWithValue("p_cliente_id", clienteId);
                    command.Parameters.AddWithValue("p_nombre_campania", nombreCampania);
                    command.Parameters.AddWithValue("p_fechaHoraProgramacion", fechaHoraProgramacion);
                    command.Parameters.AddWithValue("p_estado", estado);

                    connection.Open();
                    command.ExecuteNonQuery();
                }
            }
        }
    }
}
