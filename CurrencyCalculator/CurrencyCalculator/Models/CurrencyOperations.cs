using FixerSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace CurrencyCalculator.Models
{
    /// <summary>
    /// Currency operations
    /// </summary>
    public class CurrencyOperations
    {
        public static List<string> GetCurrencies()
        {
            FieldInfo[] fieldInfos = typeof(Symbols).GetFields(BindingFlags.Static | BindingFlags.Public);
            IList<string> currencies = new List<string>();

            foreach (FieldInfo info in fieldInfos)
            {
                currencies.Add(info.Name);
                //currencies.Add(info.ToString());
            }

            return currencies.ToList();
        }

        public static double Calculate(CurrencyCalculationModel calculationModel)
        {
            double result = Fixer.Convert(calculationModel.CurrencyFrom, calculationModel.CurrencyTo, calculationModel.ValueToCalc);

            return result;
        }
    }
}
