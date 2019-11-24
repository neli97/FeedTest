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
        [Route("~/api/GetCurrencies")]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return CurrencyOperations.GetCurrencies();
        }

        /// <summary>
        /// Calculate currency
        /// </summary>
        /// <param name="calculationModel"></param>
        [Route("~/api/CalculateCurrency")]
        [HttpPost]
        public double CalculateCurrency([FromBody]CurrencyCalculationModel calculationModel)
        {
            double result = CurrencyOperations.Calculate(calculationModel);

            return result;
        }
    }
}
