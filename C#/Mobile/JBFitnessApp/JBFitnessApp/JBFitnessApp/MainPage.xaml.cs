//Name: (Jacob Benge)
//Class: (INFO 1200)
//Section: (X01)
//Professor: (Tyler Jensen)
//Date: 12/10/2020
//Project #: 9_B
//I declare that the source code contained in this assignment was written solely by me.
//I understand that copying any source code, in whole or in part,
// constitutes cheating, and that I will receive a zero on this project
// if I am found in violation of this policy.
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace JBFitnessApp
{
    public partial class MainPage : ContentPage
    {
        /// <summary>
        /// This code runs when the page loads
        /// </summary>
        public MainPage()
        {
            InitializeComponent();
            // Generates today's date and converts it to a string to be added to the LblTodayDate
            LblTodayDate.Text = LblTodayDate.Text + DateTime.Now.ToString("d");
        }

        private void BtnMyProfile_Clicked(object sender, EventArgs e)
        {
            //Trigger to go to MyProfilePage after My Profile button clicked.
            Navigation.PushModalAsync(new MyProfilePage());
        }

        private void BtnBMR_Clicked(object sender, EventArgs e)
        {
            //Trigger to go to MyBMRPage after My Profile button clicked.
            Navigation.PushModalAsync(new MyBMRPage());
        }

        private void BtnSimpleTimer_Clicked(object sender, EventArgs e)
        {
            //Trigger to go to MyTimerPage after My Profile button clicked.
            Navigation.PushModalAsync(new MyTimerPage());
        }

        private void BtnMyWater_Clicked(object sender, EventArgs e)
        {
            Navigation.PushModalAsync(new MyWaterPage());
        }

        private void BtnMyFood_Clicked(object sender, EventArgs e)
        {
            Navigation.PushModalAsync(new FoodDetailsPage());
        }
    }
}
