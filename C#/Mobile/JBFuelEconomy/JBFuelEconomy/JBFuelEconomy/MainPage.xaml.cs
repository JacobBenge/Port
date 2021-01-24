using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace JBFuelEconomy
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        /// <summary>
        /// This code calculates the MPG given the gallons and miles travelled.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnCalculate_Clicked(object sender, EventArgs e)
        {
            //Converts user input(string) to a double and stores it in a respective variable
            double miles = double.Parse(EntryMiles.Text);
            double gallons = double.Parse(EntryGallons.Text);

            //Calculates mpg
            double mpg = miles / gallons;

            //converts mpg to a string with 2 decimal places. 
            LblResults.Text = mpg.ToString("n2");
        }
    }
}
