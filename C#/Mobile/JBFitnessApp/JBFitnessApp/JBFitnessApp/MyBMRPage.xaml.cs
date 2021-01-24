//Name: (Jacob Benge)
//Class: (INFO 1200)
//Section: (X01)
//Professor: (Jensen)
//Date: 10/20/2020
//Project #: Project 5_B
//I declare that the source code contained in this assignment was written solely by me.
//I understand that copying any source code, in whole or in part,
// constitutes cheating, and that I will receive a zero on this project
// if I am found in violation of this policy.
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace JBFitnessApp
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MyBMRPage : ContentPage
    {
        public MyBMRPage()
        {
            InitializeComponent();
            PckActivity.SelectedIndex = 0;
            PckGender.SelectedIndex = 0;
        }
        /// <summary>
        /// This event handler is triggerred by clicking the Calculate button on the BMR page. It retrieves the Height, Weight, and Age
        /// that was collected from the profile page and stored in global variables. Then it calculates the BMR for male and female, and then updates the text on MyBMRPage
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private async void btnBMRCalculate_Clicked(object sender, EventArgs e)
        {
            const double FBaseMulti = 655;
            const double MBaseMulti = 66;
            const double FWeightMulti = 4.35;
            const double MWeightMulti = 6.23;
            const double FHeightMulti = 4.7;
            const double MHeightMulti = 12.7;
            const double FAgeMulti = 4.7;
            const double MAgeMulti = 6.8;
            const double LittleActivity = 1.2;
            const double LightActivity = 1.375;
            const double ModerateActivity = 1.55;
            const double HeavyActivity = 1.725;
            const double VeryHeavyActivity = 1.9;
            double multiplier = 0;

            // Assigns multiplier a value based on activity level
            switch (PckActivity.SelectedItem.ToString())
            {
                case "Little to No Activity":
                    multiplier = LittleActivity;
                    break;
                case "Light Activity":
                    multiplier = LightActivity;
                    break;
                case "Moderate Activity":
                    multiplier = ModerateActivity;
                    break;
                case "Heavy Activity":
                    multiplier = HeavyActivity;
                    break;
                case "Very Heavy Activity":
                    multiplier = VeryHeavyActivity;
                    break;
                default:
                    multiplier = -1;
                    break;
            }

            // Determines whether to use female or male formula
            if (PckGender.SelectedItem.ToString() == "Male")
            {
                lblBmrResults.Text = ((multiplier) * (MBaseMulti + (MWeightMulti * FitnessGlobalVariables.ProfWeight) + (MHeightMulti * FitnessGlobalVariables.ProfHeight) - (MAgeMulti * FitnessGlobalVariables.ProfAge))).ToString("n2");
            }
            else
            {
                lblBmrResults.Text = ((multiplier) * (FBaseMulti + (FWeightMulti * FitnessGlobalVariables.ProfWeight) + (FHeightMulti * FitnessGlobalVariables.ProfHeight) - (FAgeMulti * FitnessGlobalVariables.ProfAge))).ToString("n2");
            }
            
            // This code is a "boilerplate" code used to have the app wait until the user has input their data on the profile page.
            var waitHandle = new EventWaitHandle(false, EventResetMode.AutoReset);
            var modalPage = new MyProfilePage();
            modalPage.Disappearing += (sender2, e2) =>
            {
                waitHandle.Set();
            };
            await Navigation.PushModalAsync(modalPage);
            await Task.Run(() => waitHandle.WaitOne());

        }

        private void btnBMRClose_Clicked(object sender, EventArgs e)
        {
            Application.Current.MainPage.Navigation.PopModalAsync();
        }
    }
}