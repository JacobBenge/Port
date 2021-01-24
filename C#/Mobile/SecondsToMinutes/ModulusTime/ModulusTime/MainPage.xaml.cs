using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace ModulusTime
{
    public partial class MainPage : ContentPage
    {
        const int SECONDS = 60;
        public MainPage()
        {
            InitializeComponent();
        }

        private void BtnConvert_Clicked(object sender, EventArgs e)
        {
            int userSeconds, minutes, seconds;

            if (int.TryParse(SecondsEntry.Text,out userSeconds))
            {
                // set minutes from user input
                minutes = userSeconds / SECONDS;
                // set seconds from user input
                seconds = userSeconds % SECONDS;
                // show the time
                if (minutes >= 10)
                {
                    if (seconds >= 10)
                    {
                        LblTime.Text = $"{minutes}:{seconds}";
                    }
                    else
                    {
                        LblTime.Text = $"{minutes}:0{seconds}";
                    }
                }
                else
                {
                    if (seconds >= 10)
                    {
                        LblTime.Text = $"0{minutes}:{seconds}";
                    }
                    else
                    {
                        LblTime.Text = $"0{minutes}:0{seconds}";

                    }
                }
            }
            else
            {
                DisplayAlert("Invalid Input", "Please enter an integer for the seconds", "Close");
            }
        }
    }
}
