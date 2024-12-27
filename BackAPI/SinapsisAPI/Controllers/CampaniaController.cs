using Microsoft.AspNetCore.Mvc;
using sinapsis.Model;
using SinapsisAPI.ADO;
using SinapsisAPI.Validators;

namespace SinapsisAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CampaniaController : ControllerBase
    {
        private readonly CampaniaRepository _repository;

        public CampaniaController(IConfiguration configuration)
        {
            string connectionString = configuration.GetConnectionString("DefaultConnection");
            _repository = new CampaniaRepository(connectionString);
        }

        // Endpoint para agregar campaña por cliente
        [HttpPost("agregar-campania")]
        public IActionResult AgregarCampania([FromBody] Campania campania)
        {
            // Validar los parámetros con el validador
            if (!CampaniaValidator.ValidarClienteId(campania.ClienteId))
            {
                return BadRequest("El ID del cliente debe ser mayor a 0.");
            }

            if (!CampaniaValidator.ValidarNombreCampania(campania.NombreCampania))
            {
                return BadRequest("El nombre de la campaña no es válido (debe tener menos de 200 caracteres).");
            }

            if (!CampaniaValidator.ValidarFechaHoraProgramacion(campania.FechaHoraProgramacion))
            {
                return BadRequest("La fecha y hora de la programación debe ser futura.");
            }

            if (!CampaniaValidator.ValidarEstado(campania.Estado))
            {
                return BadRequest("El estado debe ser 0 o 1.");
            }

            try
            {
                _repository.AgregarCampania(campania.ClienteId, campania.NombreCampania, campania.FechaHoraProgramacion, campania.Estado);
                return Ok("Campaña agregada exitosamente.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error en el servidor: {ex.Message}");
            }
        }
    }
}
