using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Participation6
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class PayrollPage : ContentPage
    {
        public PayrollPage()
        {
            InitializeComponent();
        }
        /// <summary>
        /// Set global variables and close the page
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void btnClose_Clicked(object sender, EventArgs e)
        {
            // Set global variables
            GlobalPayrollVariables.Hours = double.Parse(txtBoxHours.Text);
            GlobalPayrollVariables.Pay = decimal.Parse(txtBoxRate.Text);
            // Close the page

            Application.Current.MainPage.Navigation.PopModalAsync();
        }
    }
}