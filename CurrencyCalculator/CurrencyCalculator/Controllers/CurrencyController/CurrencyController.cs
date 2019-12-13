using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FixerSharp;
using CurrencyCalculator.Models;
using Newtonsoft.Json;

namespace CurrencyCalculator.Controllers.CurrencyController
{
    [Route("api/[controller]")]
    public class CurrencyController : Controller
    {
        /// <summary>
        /// Get list with currencies
        /// </summary>
        /// <returns></returns>
        [Route("GetCurrencies")]
        [HttpGet]
        public IActionResult GetCurrencies()
        {
            IEnumerable<string> currencies = CurrencyOperations.GetCurrencies();

            return Ok(currencies);
        }

        /// <summary>
        /// Calculate currency
        /// </summary>
        /// <param name="calculationModel"></param>
        [Route("CalculateCurrency")]
        [HttpPost]
        public IActionResult CalculateCurrency([FromBody]CurrencyCalculationModel calculationModel)
        {
            double? result = CurrencyOperations.Calculate(calculationModel);
            if(result==null)
            {
                return BadRequest();
            }

            return Ok(result);
        }
    }
}
