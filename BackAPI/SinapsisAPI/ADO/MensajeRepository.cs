using MySqlConnector;
using sinapsis.Model;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

public class MensajeRepository
{
    private readonly string _connectionString;

    public MensajeRepository(string connectionString)
    {
        _connectionString = connectionString;
    }

    public List<Mensaje> ListarMensajesActivos(int mes, int? clienteId = null)
    {
        var mensajes = new List<Mensaje>();

        using (var connection = new MySqlConnection(_connectionString))
        {
            using (var command = new MySqlCommand("sp_listar_mensajes_activos", connection))
            {
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("p_mes", mes);
                command.Parameters.AddWithValue("p_cliente_id", clienteId.HasValue ? (object)clienteId.Value : DBNull.Value);

                connection.Open();
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        mensajes.Add(new Mensaje
                        {
                            idMensaje = Convert.ToInt32(reader["idMensaje"]),
                            idCampania = Convert.ToInt32(reader["idCampania"]),
                            estadoEnvio = Convert.ToInt16(reader["estadoEnvio"]),
                            fechaHoraEnvio = Convert.ToDateTime(reader["fechaHoraEnvio"]),
                            mensaje = reader["mensaje"].ToString(),
                            estado = Convert.ToInt16(reader["estado"])
                        });
                    }
                }
            }
        }

        return mensajes;
    }
}
