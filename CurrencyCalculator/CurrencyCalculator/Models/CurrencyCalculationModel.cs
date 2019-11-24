using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyCalculator.Models
{
    /// <summary>
    /// Currency calculation model
    /// </summary>
    public class CurrencyCalculationModel
    {
        /// <summary>
        /// Current currency
        /// </summary>
        public string CurrencyFrom { get; set; }

        /// <summary>
        /// Target currency
        /// </summary>
        public string CurrencyTo { get; set; }

        /// <summary>
        /// Value to calc between currencies
        /// </summary>
        public double ValueToCalc { get; set; }
    }
}
