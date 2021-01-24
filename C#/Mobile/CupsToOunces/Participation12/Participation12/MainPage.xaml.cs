using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace Participation12
{
    public partial class MainPage : ContentPage
    {
        const int CUPS_TO_OUNCES = 8;
        public MainPage()
        {
            InitializeComponent();
        }

        private void BtnConvert_Clicked(object sender, EventArgs e)
        {
            double cups = 0, ounces = 0;

            if (ValidCups(ref cups))
            {
                ounces = CalculateOunces(cups);
                DisplayResults(ounces);
            }
        }

        private void DisplayResults(double ounces)
        {
            LblResults.Text = ounces.ToString("N2");
        }

        private double CalculateOunces(double cups)
        {
            return cups * CUPS_TO_OUNCES;
        }

        private bool ValidCups(ref double cups)
        {
            if (double.TryParse(EntryCups.Text, out cups)) return true;
            DisplayAlert("Invalid Input", "Please enter a number for cups", "Close");
            return false;
        }
    }
}
