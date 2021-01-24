using System;
using System.Collections.Generic;
using System.Text;

namespace JBFitnessApp
{
    /// <summary>
    /// This code is used to store global variables and share them across pages. 
    /// </summary>
    public static class FitnessGlobalVariables
    {
        // Stores Prof(profile) weight as a double
        public static double ProfWeight { get; set; }
        // Stores Prof(profile) height as a double
        public static double ProfHeight { get; set; }
        // Stores Prof(profile) age as a double
        public static double ProfAge { get; set; }

    }
}
