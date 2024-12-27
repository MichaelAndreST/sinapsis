using Microsoft.AspNetCore.Mvc;
using SinapsisAPI.Validators;

namespace SinapsisAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MensajeController : ControllerBase
    {
        private readonly MensajeRepository _repository;

        public MensajeController(IConfiguration configuration)
        {
            string connectionString = configuration.GetConnectionString("DefaultConnection");
            _repository = new MensajeRepository(connectionString);
        }

        // Endpoint para listar mensajes activos filtrados por mes y cliente
        [HttpGet("ListarMensajes")]
        public IActionResult ListarMensajesActivos([FromQuery] int mes, [FromQuery] int? clienteId = null)
        {
            // Validar los parámetros con el validador
            if (!MensajesValidator.ValidarMes(mes))
            {
                return BadRequest("El mes debe estar entre 1 y 12.");
            }

            /*
            if (!MensajesValidator.ValidarClienteId(clienteId))
            {
                return BadRequest("El ID del cliente debe ser mayor a 0.");
            }
            */

            try
            {
                var mensajes = _repository.ListarMensajesActivos(mes, clienteId);
                return Ok(mensajes);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error en el servidor: {ex.Message}");
            }
        }
    }
}
