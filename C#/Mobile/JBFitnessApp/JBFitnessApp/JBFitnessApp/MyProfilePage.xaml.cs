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
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace JBFitnessApp
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MyProfilePage : ContentPage
    {
        public MyProfilePage()
        {
            InitializeComponent();
        }
        /// <summary>
        /// This code stores the operations of the My Profile Page.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnProfileClose_Clicked(object sender, EventArgs e)
        {
            const double weightMin = 50, weightMax = 1000, heightMin = 48, heightMax = 96, ageMin = 12, ageMax = 120;

            // Weight validation and parse then store in global variable
            if (double.TryParse(EntryProfWeight.Text, out double weight) && weight <= weightMax && weight >= weightMin)
            {
                // Height validation and parse then store in global variable
                if (double.TryParse(EntryProfHeight.Text, out double height) && height <= heightMax && height >= heightMin)
                {
                    // Age validation and parse then store in global variable
                    if (double.TryParse(EntryProfAge.Text, out double age) && age <= ageMax && age >= ageMin)
                    {
                        FitnessGlobalVariables.ProfAge = age;
                        FitnessGlobalVariables.ProfHeight = height;
                        FitnessGlobalVariables.ProfWeight = weight;
                        Application.Current.MainPage.Navigation.PopModalAsync();
                    }
                    else
                    {
                        DisplayAlert("Input Error", $"Please enter weight between {ageMin} and {ageMax}", "Close");
                        EntryProfWeight.Text = string.Empty;
                        EntryProfHeight.Text = string.Empty;
                        EntryProfAge.Text = string.Empty;
                    }
                }
                else
                {
                    DisplayAlert("Input Error", $"Please enter weight between {heightMin} and {heightMax}", "Close");
                    EntryProfWeight.Text = string.Empty;
                    EntryProfHeight.Text = string.Empty;
                    EntryProfAge.Text = string.Empty;
                }
            }
            else
            {
                DisplayAlert("Input Error", $"Please enter weight between {weightMin} and {weightMax}", "Close");
                EntryProfWeight.Text = string.Empty;
                EntryProfHeight.Text = string.Empty;
                EntryProfAge.Text = string.Empty;
            }
        }

        /// <summary>
        /// Code for the Before button, which swaps the image
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnProfileBefore_Clicked(object sender, EventArgs e)
        {
            // Swap source to appropriate image
            ImgProfile.Source = "before.jpg";
        }

        /// <summary>
        /// Code for the After button, which swaps the image and shows an encouragement alert
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnProfileAfter_Clicked(object sender, EventArgs e)
        {
            // Swap source to appropriate image
            ImgProfile.Source = "after.jpg";

            // Encouragement alert
            DisplayAlert("Good Job", "You're doing great", "Close");
        }

        private void BtnProfileClear_Clicked(object sender, EventArgs e)
        {
            EntryProfWeight.Text = String.Empty;
            EntryProfHeight.Text = String.Empty;
            EntryProfAge.Text = String.Empty;

            FitnessGlobalVariables.ProfWeight = 0;
            FitnessGlobalVariables.ProfHeight = 0;
            FitnessGlobalVariables.ProfAge = 0;
        }
    }
}