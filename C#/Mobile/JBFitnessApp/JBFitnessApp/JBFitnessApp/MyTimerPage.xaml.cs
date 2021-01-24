//Name: (Jacob Benge)
//Class: (INFO 1200)
//Section: (X01)
//Professor: (Jensen)
//Date: 11/07/2020
//Project #: Project 7_B
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
    public partial class MyTimerPage : ContentPage
    {
        const int SECONDS = 60, DOUBLE_DIGITS = 10;
        int lapCount = 1;

        public MyTimerPage()
        {
            InitializeComponent();
        }

        /// <summary>
        /// Determines whether to initiate CountUp or CountDown and the duration
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private async void BtnTimerStart_Clicked(object sender, EventArgs e)
        {
            // Clear the direction variable 
            var direction = string.Empty;

            // Determine whether Count Down or Up is selected and trigger appropriate method
            if (GetDirection(ref direction))
            {
                if (direction == "Count Down")
                {
                    await CountDown();
                }
                else
                {
                    await CountUp();
                }
            }
        }

        /// <summary>
        /// Confirms a direction has been selected
        /// </summary>
        /// <param name="direction"></param>
        /// <returns></returns>
        private bool GetDirection(ref string direction)
        {
            if (PkrUpDown.SelectedIndex > -1)
            {
                direction = PkrUpDown.SelectedItem.ToString();
                return true;
            }
            else
            {
                DisplayAlert("Input error", "Please select a count direction.", "Close");
                return false;
            }
        }

        /// <summary>
        /// Counts Down from time entry
        /// </summary>
        /// <returns></returns>
        private async Task CountDown()
        {

            if (int.TryParse(EntryStartTime.Text, out int timevariable))
            {
                // Hide start button until timer finished
                BtnTimerStart.IsEnabled = false;

                // Loop until timer hits 0
                while (timevariable >= 0)
                {
                    DisplayTime(timevariable);
                    Task task = StartTimer();

                    // See supplemental section 3
                    await StartTimer();

                    // Decrement the time variable
                    timevariable--;
                }
                // show start button again
                BtnTimerStart.IsEnabled = true;
            }
            else
            {
                await DisplayAlert("Input Error", "Enter start time as a number", "Close");
                EntryStartTime.Text = "";
            }
        }

        /// <summary>
        /// Counts up from time selected
        /// </summary>
        /// <returns></returns>
        private async Task CountUp()
        {

            if (int.TryParse(EntryStartTime.Text, out int maxTime))
            {
                int timevariable = 0;

                // Hide start button until timer finished
                BtnTimerStart.IsEnabled = false;

                // Loop until timer hits maxTime
                while (timevariable <= maxTime)
                {
                    DisplayTime(timevariable);
                    Task task = StartTimer();

                    // See supplemental section 3
                    await StartTimer();

                    // Increment the time variable
                    timevariable++;
                }
                // show start button again
                BtnTimerStart.IsEnabled = true;
            }
            else
            {
                await DisplayAlert("Input Error", "Enter start time as a number", "Close");
                EntryStartTime.Text = "";
            }
        }

        /// <summary>
        /// Displays current timevariable in clock format
        /// </summary>
        /// <param name="timevariable"></param>
        private void DisplayTime(int timevariable)
        {
            // Calculate minutes and seconds from the time input
            int minutes = timevariable / SECONDS;
            int seconds = timevariable % SECONDS;

            // Format label timer to reflect time left in timevariable
            if (minutes >= DOUBLE_DIGITS)
            {
                if (seconds >= DOUBLE_DIGITS)
                {
                    LblTimer.Text = $"{minutes}:{seconds}";
                }
                else
                {
                    LblTimer.Text = $"{minutes}:0{seconds}";
                }
            }
            else
            {
                if (seconds >= DOUBLE_DIGITS)
                {
                    LblTimer.Text = $"0{minutes}:{seconds}";
                }
                else
                {
                    LblTimer.Text = $"0{minutes}:0{seconds}";
                }
            }
        }

        /// <summary>
        /// Grabs current LblTimer.Text and appends it to LblLaps.Text
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnGetLapTime_Clicked(object sender, EventArgs e)
        {
            LblLaps.Text += $"[Lap #{lapCount}: {LblTimer.Text}]";
            lapCount++;
        }

        /// <summary>
        /// Push Button to close timer page and return to Main Page
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnTimerClose_Clicked(object sender, EventArgs e)
        {
            Application.Current.MainPage.Navigation.PopModalAsync();
        }

        /// <summary>
        /// Retreived from Supplemental instructions part 3 for Project 6_B
        /// </summary>
        /// <returns></returns>
        private static async Task StartTimer()
        {
            //makes milliseconds behave like seconds
            await Task.Delay(1000);
        }
    }
}
